const AWS = require('aws-sdk')

let options = {}

if (process.env.IS_OFFLINE){
  options = {
    region: 'localhost',
    endpoint: 'https://localhost:2000'
  }
}

const documentClient = new AWS.DynamoDB.DocumentClient(options);

const Dynamo = {
  async getMoviesList(){
    const params = {
      TableName: process.env.tableName,
    }
    console.log(params)
    const res = await documentClient.scan(params).promise()
    console.log(res)
    if(res == undefined || res.length == 0){
      throw Error('No movies :(');
    }
    return res.Items
  }
}

module.exports = Dynamo