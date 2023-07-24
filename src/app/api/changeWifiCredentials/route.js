const { exec } = require('child_process');

export async function POST(req) {
  try {
    const { ssid, password, newPassword } = await req.json();

    if (!ssid || !currentPassword || !newPassword) {
        return new Response(
            JSON.stringify({ message: "Please provide all required fields." }),
            { status: 400 }
          );
    }
  // Construct the nmcli command to change the Wi-Fi password
//   const command = `nmcli dev wifi con "${ssid}" password "${password}" name "${ssid}"`;

// Execute the shell command to change the WiFi password
const command = `nmcli device wifi con '${ssid}' password '${currentPassword}'`;

  // Execute the command to change the password
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Failed to change Wi-Fi password:', error);
    //   return res.status(500).send('');
      return new Response(
        JSON.stringify({ message: "Failed to change Wi-Fi password." }),
        { status: 500 }
      );
    }
    // Success, now change the saved password for the connection
    const changePasswordCmd = `nmcli connection modify '${ssid}' wifi-sec.psk '${newPassword}'`;
    exec(changePasswordCmd, (changeError, changeStdout, changeStderr) => {
      if (changeError) {
        console.error('Error changing saved WiFi password:', changeError.message);
        return new Response(
            JSON.stringify({ message: "Failed to change saved WiFi password." }),
            { status: 500 }
          );
        // return res.status(500).json({ error: 'Failed to change saved WiFi password.' });
    }
    return new Response(
        JSON.stringify({ message: "WiFi password changed successfully." }),
        { status: 200 }
      );
        // return res.status(200).json({ message: 'WiFi password changed successfully.' });
    });
})

    return new Response(
      JSON.stringify({ message: "Successfully changed WiFi Password." }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
