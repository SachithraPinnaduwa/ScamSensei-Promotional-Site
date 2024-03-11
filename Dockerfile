# Step 1: Use the official Node.js image as the base image
FROM node:20

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Install serve to serve the static files
RUN npm install -g serve

# Step 8: Expose port 5000 for the application
EXPOSE 5173

# Step 9: Run the application using serve
CMD ["serve", "-s", "build"]
