const Dynamo = require("../common/dynamo.js")
const Responses = require("../common/responses")
exports.handler = async (event, ctx) => {
  try{
      const movies = await Dynamo.getMoviesList()
      return Responses._200({
        movies: movies
      })
    }
    catch(err){
      console.log(err.message)
      return Responses._400({
        message: err.message
      })
    }
}