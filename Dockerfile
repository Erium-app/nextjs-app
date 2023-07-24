# Use the official Node.js image as the base image
FROM node:20.4.0-alpine3.17

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .


RUN npm install prisma -g
RUN prisma generate


# Build the Next.js application
RUN npm run build

# Expose the default Next.js port (3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
