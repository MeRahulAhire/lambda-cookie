"use strict";
const cookie = require("cookie");

module.exports.hello = async (event) => {
  const body = JSON.parse(event.body);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Set-Cookie": cookie.serialize('id', 'abcd-', {
        
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
