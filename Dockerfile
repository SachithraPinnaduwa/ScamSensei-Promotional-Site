# Step 1: Use an official Node.js image as the base
FROM node:20

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Build the application for production
RUN npm run build

# Step 7: Use an official Nginx image to serve the static files
FROM nginx:stable-alpine

# Step 8: Copy the build artifacts from the previous stage to the Nginx server
COPY --from=0 /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 to the outside world
EXPOSE 80

# Step 10: Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
