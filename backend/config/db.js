import mongoose from 'mongoose';
import dotenv from 'dotenv';
  dotenv.config();

const uri = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log(' DB CONNECTED');
  } catch (err) {
    console.error(' DB CONNECTION ERROR:', err.message);
    process.exit(1);
  }
};










// STEPS TO GET YOUR MONGODB ATLAS USERNAME & PASSWORD:

//
// 1. SIGN UP / LOG IN TO MONGODB ATLAS
//    • Visit: https://www.mongodb.com/cloud/atlas
//    • Create a free account or log in.
//
// 2. CREATE OR SELECT A PROJECT
//    • In the Atlas dashboard, click “Projects”.
//    • Click “New Project” to create one, or select an existing project.
//
// 3. DEPLOY A CLUSTER (IF NEEDED)
//    • Inside your project, click “Build a Cluster”.
//    • Choose the Shared (free) tier.
//    • Pick your cloud provider & region, then “Create Cluster”.
//    • Wait for provisioning to complete (a few minutes).
//
// 4. ADD A DATABASE USER (THIS IS YOUR USERNAME & PASSWORD)
//    • In the left menu, choose “Database Access”.
//    • Click “+ ADD NEW DATABASE USER”.
//    • Under “Authentication Method,” select “Password.”
//    • Enter your desired Username (e.g. myAppUser).
//    • Enter & confirm a secure Password (make note of it).
//    • Under “Database User Privileges,” grant at least “Read and write to any database.”
//    • Click “Add User.”
//
// 5. WHITELIST YOUR IP ADDRESS
//    • In the left menu, go to “Network Access.”
//    • Click “+ ADD IP ADDRESS.”
//    • Click “Add Current IP Address” or enter 0.0.0.0/0 (less secure).
//    • Click “Confirm.”
//
// 6. COPY YOUR CONNECTION STRING
//    • In the left menu, click “Clusters.”
//    • On your cluster, click the blue “Connect” button.
//    • Choose “Connect your application.”
//    • Copy the URI, e.g.:
//      mongodb+srv://<username>:<password>@cluster0.t5l2pir.mongodb.net/Taskflow?retryWrites=true&w=majority
//    • Replace <username> and <password> with the ones you created.
//
// 7. STORE CREDENTIALS IN ENVIRONMENT VARIABLES
//    • Create a file named `.env` at your project root (add `.env` to `.gitignore`):
//        MONGO_USER=myAppUser
//        MONGO_PASS=YourSecurePassword123
//        MONGO_CLUSTER=cluster0.t5l2pir.mongodb.net
//        MONGO_DB=Taskflow
//
// 8. UPDATE YOUR CODE TO USE DOTENV
//    • Install dotenv: `npm install dotenv`
//    • In your code:
//      ```js

