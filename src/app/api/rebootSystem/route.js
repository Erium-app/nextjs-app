const { exec } = require('child_process');

export async function POST(req) {
  try {
    exec('shutdown -r now', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return new Response(
            JSON.stringify({ message: "An error occurred while rebooting the server." }),
            { status: 500 }
          );
        }
        console.log('Server reboot initiated.');
        return new Response(
            JSON.stringify({ message: "Server reboot initiated." }),
            { status: 200 }
          );
      });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
