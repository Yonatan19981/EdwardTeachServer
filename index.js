
const { MongoClient } = require("mongodb");
require('dotenv').config();
// Replace the uri string with your connection string.
const uri =process.env.MONGO_URL ;
var client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('EdwardTeach');
    const userData = database.collection('UserData');
    try {
        //userData.insertOne( { item: "card", qty: 15 } );
        const cursor = userData.find({ item: "card" });
        await cursor.forEach(console.log);
     } catch (e) {
        print (e);
     };
     
     
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
