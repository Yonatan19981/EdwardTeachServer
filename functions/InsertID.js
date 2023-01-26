// Grab our credentials from a .env file or environment variables
require('dotenv').config({ path: '../.env'});

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://kxcfcqdbooxecnhuzevs.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
console.log("Connected to DB")
// Our standard serverless handler function
exports.handler = async event => {

  // Insert a row
  const { data, error } = await supabase
  .from('App_User_Data')
  .insert([
    { Chat_Id: 11}
  ])
  // Did it work?
  console.log(data, error);
  
}