// Grab our credentials from a .env file or environment variables
require('dotenv').config();
const {
    DATABASE_URL,
    SUPABASE_SERVICE_API_KEY
} = process.env;

// Connect to our database 
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
exports.handler = async event => {

  // Insert a row
  let { data: App_User_Data, error } = await supabase
  .from('App_User_Data')
  .select('*')
  
  // Did it work?
  console.log(data, error);
  
}

