# Use the official Node.js image as the base image
FROM node:19-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production --network-timeout 300000
RUN yarn add @types/styled-components

# Copy the rest of the project files to the container
COPY . .

# Build the project
RUN yarn build

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD ["yarn", "run", "serve"]
