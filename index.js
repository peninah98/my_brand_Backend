import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import mongoose from 'mongoose';
import blogroutes from './routes/blog'
import userroutes from './routes/user'
import loginroutes from './routes/login'
import messageroutes from './routes/message'
import commentroutes from './routes/comment'
import swaggerDocs from "./swaggerDocs/main"

const corsOptions = {
  origin: '*',
  credentials:true,
  optionsSuccessStatus: 200 
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10, // Maintains up to 10 sockets connected to MongoDB
  bufferMaxEntries: 0, // If not connected, return errors immediately rather than waiting for reconnect
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
  mongoose.connect(process.env.DB_URL, options)
  .then(() => {
    console.log("Successfully connected")
  }).catch((Error)=>console.log("Connection fails",Error.message))
  
  const app = express();
  app.use(morgan("dev"));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  app.use(express.json());
  app.use("/api/v1",cors(corsOptions), blogroutes);
  app.use("/api/v1",cors(corsOptions), userroutes);
  app.use("/api/v1", cors(corsOptions),loginroutes);
  app.use("/api/v1", cors(corsOptions),commentroutes);
  app.use("/api/v1", cors(corsOptions),messageroutes);
  app.use('/upload', express.static('upload'));
  app.get('/', (req, res) => res.status(200).send('Welcome'));
 


  export default app;
