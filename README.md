## Using Docker
```bash
npm install && docker build -t my-nextjs-app . && cd nginx && docker build -t my-nginx . && NETWORK_NAME="my-network" && docker network inspect "$NETWORK_NAME" &>/dev/null || docker network create "$NETWORK_NAME" && docker run -d --name nginx-container --network my-network -p 80:80 my-nginx && docker run -d --name nextjs-app --network my-network my-nextjs-app
```

Open http://localhost with your browser to see the result.


## Without Docker
First, run the development server:

```bash
npm install
npm run build
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
