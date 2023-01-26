
  const { MongoClient } = require("mongodb");

  exports.handler = async function (event, context) {
    const value = String(process.env.MONGO_URL);
    const uri =value ;
    var cursor;
var client = new MongoClient(uri);

    try {
        const database = client.db('EdwardTeach');
        const userData = database.collection('UserData');
        try {
            //userData.insertOne( { item: "card", qty: 15 } );
            cursor = userData.find();
            await cursor.forEach(console.log);
         } catch (e) {
            print (e);
         };
         
         
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }

  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `The user in the database are: ${cursor}.` }),
    };  
  };
  
