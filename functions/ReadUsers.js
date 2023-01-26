// Grab our credentials from a .env file or environment variables
require('dotenv').config({ path: '../.env'});
require('dotenv').config();
const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =process.env.MONGO_URL ;
var client = new MongoClient(uri);

// Our standard serverless handler function
exports.handler = async event => {

    try {
        const database = client.db('EdwardTeach');
        const userData = database.collection('UserData');
        try {
            //userData.insertOne( { item: "card", qty: 15 } );
            const cursor = userData.find();
            await cursor.forEach(console.log);
            return cursor;
         } catch (e) {
            print (e);
         };
         
         
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    // Did it work?
    console.log(data, error);
    
  }
  

  
