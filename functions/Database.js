
  exports.handler = async function (event, context) {
    const value = String(process.env.MONGO_URL);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Value of MONGO_URL is ${value}.` }),
    };  
  };
  
