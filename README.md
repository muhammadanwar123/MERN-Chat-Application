# MERN Chat Application

## Overview
MERN Chat Application is a real-time messaging platform built using the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO for real-time communication. This application allows users to send private and group messages, ensuring secure and efficient interactions.

## Features
- **Real-time messaging**: Send and receive messages instantly using Socket.IO.
- **User authentication**: Secure login and registration using JWT (JSON Web Tokens).
- **Private and group chats**: Communicate with individual users or create group chats.
- **Responsive design**: Built with Chakra UI for a mobile-friendly interface.
- **Image uploads**: Users can upload and share images using Cloudinary.

## Technologies Used
- **Frontend**: 
  - React.js
  - Chakra UI
  - Socket.IO Client
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB
  - Socket.IO Server
  - JSON Web Tokens (JWT)
- **Cloud Storage**: 
  - Cloudinary for image uploads

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/muhammadanwar123/MERN-Chat-Application.git
   
2.Navigate to the client and server directories:
cd MERN-Chat-Application
cd client

3.Install the client dependencies:
npm install

4.Navigate to the server directory:
cd ../server

5.Install the server dependencies:
npm install

6.Create a .env file in the server directory and add your MongoDB URI and Cloudinary credentials:
MONGO_URI=your_mongo_uri
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

7.Start the server:
npm start

8.In a new terminal window, navigate back to the client directory and start the client:
cd client
npm start


Usage
Navigate to http://localhost:3000 in your web browser to access the application.
Register for a new account or log in if you already have one.
Start chatting with your friends in private or group chats!


License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to the developers of the MERN stack and Socket.IO for their excellent libraries and frameworks.
Special thanks to Cloudinary for providing image storage services.

