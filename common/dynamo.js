const AWS = require('aws-sdk');

let options = {};

if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:2000',
  };
}

if (process.env.JEST_WORKER_ID) {
  options = {
    endpoint: 'http://localhost:2000',
    region: 'local-env',
    sslEnabled: false,
  };
}

const documentClient = new AWS.DynamoDB.DocumentClient(options);

const Dynamo = {
  async getMoviesList(tableName) {
    const params = {
      TableName: tableName,
    };
    try {
      const res = await documentClient.scan(params).promise();
      if (res == undefined || res.length == 0) {
        throw Error('No movies :(');
      }
      return res.Items;
    } catch (err) {
      throw Error(err.message);
    }
  },
};

module.exports = Dynamo;
