'use server'
const { exec } = require('child_process');
const os = require('os');

export async function POST(req) {
  try {
    const username = os.hostname();
    const { hostCurrentPassword, hostNewPassword } = await req.json();

    const command = `./src/app/api/changeHostPassword/updatePassword.sh ${username} ${hostCurrentPassword} ${hostNewPassword}`;
    await exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
      }
      if(stdout) {
        console.log(`Script Output: ${stdout}`);
      return new Response(JSON.stringify({ message: `Password updated successfully for user ${username}` }), { status: 200 });
      }
      if (stderr) {
        console.error(`Script Error: ${stderr}`);
        if (stdout.includes('passwd: password updated successfully')) {
          return new Response(JSON.stringify({ message: 'Password updated successfully' }), { status: 200 });
        } else {
          return new Response(JSON.stringify({ error: 'Bad Request' }), { status: 400 });
        }
      }

      // console.log(`Script Output: ${stdout}`);
      // return new Response(JSON.stringify({ message: `Password updated successfully for user ${username}` }), { status: 200 });
    });

    return new Response(JSON.stringify({ message: 'Processing request' }), { status: 200 });

  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}



  //   const username = os.hostname();
  //   const { hostCurrentPassword, hostNewPassword } = await req.json();

  // const command = `echo -e "${hostCurrentPassword}\n${hostNewPassword}\n${hostNewPassword}" | passwd ${username}`;

  // exec(command, (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`Failed to change password: ${error.message}`);
  //     return new Response(JSON.stringify({ error: 'Failed to change password.'}), { status: 500 });
  //     // return res.status(500).json({ error: 'Failed to change password' });
  //   }
  //   if (stderr) {
  //     console.error(`STDERR: ${stderr}`);
  //     return new Response(JSON.stringify({ error: 'Failed to change password.'}), { status: 500 });
  //     // return res.status(500).json({ error: 'Failed to change password' });
  //   }

  //   console.log('Password changed successfully.');
  //   return new Response(JSON.stringify({ message: 'Password changed successfully'}), { status: 200 });
  //   // return res.json({ message: 'Password changed successfully' });
  // });