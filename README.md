## Using Docker
To run this project using Docker, follow these steps:

Ensure you have Docker installed on your system.
Open a terminal.
Copy and paste the following command to set up the required Docker network and start the containers:
```bash
NETWORK_NAME="my-network" && docker network inspect "$NETWORK_NAME" &>/dev/null || docker network create "$NETWORK_NAME" && docker rm -f nginx-container nextjs-app &>/dev/null || true && docker run -d --name nextjs-app --network my-network eriumzone/my-nextjs-app && docker run -d --name nginx-container --network my-network -p 80:80 --restart=no eriumzone/my-nginx
```
Once the containers are up and running, open your web browser and visit http://localhost to see the application in action.

Additionally, if you wish to use the erium.local domain, run the following script to point the domain name to the corresponding IP address:
```
chmod +x update_ip.sh && sudo sh update_ip.sh
```

## Without Docker
If you prefer not to use Docker, you can still run the project locally with the following steps:

Ensure you have Node.js and npm (Node Package Manager) installed on your system.
Open a terminal or command prompt.
Run the following commands to set up the project:

```bash
npm install
npm run build
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


After running these commands, open your web browser and visit [http://localhost:3000](http://localhost:3000) to see the application in action.

You can start editing the page by modifying the `app/page.js` file. The page will auto-update as you make changes to the file.

This project utilizes [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
