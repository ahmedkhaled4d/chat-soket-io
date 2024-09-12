# Chat Socket.IO Project

This project is a real-time chat application built with TypeScript, Node.js, Express, Socket.IO, MongoDB (with Mongoose), and integrates file uploading capabilities using Multer and Cloudinary.

## Features

- Real-time messaging using Socket.IO
- User authentication
- Message persistence with MongoDB
- File uploads (images, documents) with Cloudinary storage
- TypeScript for enhanced developer experience and type safety

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (usually comes with Node.js)
- MongoDB

You will also need accounts for:

- [Cloudinary](https://cloudinary.com/) for file storage

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/chat-socket-io.git
   cd chat-socket-io
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

   Replace the placeholder values with your actual configuration.

## Running the Application

1. Compile TypeScript to JavaScript:

   ```
   npm run build
   ```

2. Start the server:

   ```
   npm start
   ```

   For development with hot-reloading:

   ```
   npm run dev
   ```

The application should now be running on `http://localhost:3000`.

## Project Structure

```
.
├── src/
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── services/           # Business logic
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── app.ts              # Express app setup
│   └── server.ts           # Entry point
├── public/                 # Static files
├── uploads/                # Temporary upload directory
├── .env                    # Environment variables
├── package.json
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## API Endpoints

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login
- `GET /api/messages`: Get all messages
- `POST /api/messages`: Create a new message
- `POST /api/upload`: Upload a file

For detailed API documentation, refer to the API.md file (if available).

## Socket.IO Events

- `connection`: Fired upon a new connection
- `disconnect`: Fired when a client disconnects
- `chat message`: Used to send and receive messages

## File Uploads

This project uses Multer for handling multipart/form-data, which is primarily used for uploading files. The uploaded files are then stored in Cloudinary.

## Database

MongoDB is used as the database, with Mongoose as the ODM (Object Document Mapper). The connection is established in `src/config/database.ts`.

## Testing

Run the test suite with:

```
npm test
```

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
