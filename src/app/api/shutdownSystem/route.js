import { exec } from 'child_process';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    exec('shutdown now', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        // return new Response(
        return NextResponse(
          JSON.stringify({ message: "An error occurred while shutting down the server." }),
          { status: 500 }
        );
      }
      console.log('Server reboot initiated.');
      // return new Response(
      return NextResponse(
        JSON.stringify({ message: "Server shutdown initiated." }),
        { status: 200 }
      );
    });
  } catch (error) {
    // return new Response(JSON.stringify(error.message), { status: 500 });
    return NextResponse(JSON.stringify(error.message), { status: 500 });
  }
}
