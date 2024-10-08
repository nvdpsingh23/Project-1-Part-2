# Step 1: Use an official Node.js image as the base for building the app
FROM node:18-alpine AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application to the working directory
COPY . .

# Step 6: Build the React application for production
RUN npm run build

# Step 7: Use an Nginx server to serve the built files
FROM nginx:stable-alpine

# Step 8: Copy the build folder to the Nginx folder
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Step 10: Expose port 80 for the Nginx server
EXPOSE 80

# Step 11: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
