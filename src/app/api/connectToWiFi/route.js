import wifi from "node-wifi";

// Connect to WiFi network
function connectToWiFi(ssid, password) {
  return new Promise((resolve, reject) => {
    wifi.connect({ ssid, password }, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

export async function POST(req) {
  try {
    // Initialize wifi module
    wifi.init({
      iface: null, // Network interface to use (optional)
    });

    const { ssid, password } = await req.json();

    const result = await connectToWiFi(ssid, password);
    console.log(result);
    // res.json({ message: result });

    return new Response(
      JSON.stringify({ message: "Successfully connected to WiFi." }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
