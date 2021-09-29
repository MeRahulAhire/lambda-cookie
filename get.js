
const cookie = require("cookie");

exports.handler = async (event) => {
  const body = event.queryStringParameters;
  const name = body.name;
  const value = body.value;
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://lambda-cookie.netlify.app",
      "Access-Control-Allow-Credentials": true,
      "Set-Cookie": cookie.serialize(name, value, {
        maxAge: 10,
      }),
    },
    body: JSON.stringify(
      {
        input: name, value
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
