const Dynamo = require('../common/dynamo.js');
const Responses = require('../common/responses');

exports.handler = async (event, ctx) => {
  const table = process.env.tableName;
  try {
    const movies = await Dynamo.getMoviesList(table);
    return Responses._200({
      message: movies,
    });
  } catch (err) {
    console.log(err.message);
    return Responses._400({
      message: err.message,
    });
  }
};
