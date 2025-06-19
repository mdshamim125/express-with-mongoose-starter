import app from './app';
import config from './config';
import mongoose from 'mongoose';
async function server() {
  try {
    // Connect Database -- here
    //  await mongoose.connect('mongodb+srv://<db_username>:<db_password>@cluster0.s1le0vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    //  console.log("Connected to MongoDB Using Mongoose!!");
   //or
    await mongoose.connect(config.database_url!);
    console.log("Connected to MongoDB Using Mongoose!!");

    app.listen(config.port, () => {
      console.log(`✅ Server running on port ${config.port}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
  }
}

server();
