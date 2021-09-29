"use strict";
const cookie = require("cookie");

module.exports.hello = async (event) => {
  const body = JSON.parse(event.body);
  const name = body.name,
  const value = body.value 
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://lambda-cookie.netlify.app",
      "Access-Control-Allow-Credentials": true,
      "Set-Cookie": cookie.serialize(name, value, {
        maxAge: 10
        
      }),
    },
    body: JSON.stringify(
      {
        input: event
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
