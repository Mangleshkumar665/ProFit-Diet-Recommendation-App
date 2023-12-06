const { CustomAPIError } = require("../errors");

const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {


let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, 
    msg : err.message || 'Something went wrong try again later'
}

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message });
  // }

  // validation error message beatification 

  if( err.name === "ValidationError"){

    customError.msg = Object.values(err.errors).map((errItems)=> errItems.message ).join(',')
    customError.statusCode = 400
  }

  //  cast error message beaitification 
    if( err.name === 'CastError'){

      customError.msg = `No Item Found with id : ${err.value} ` 
      customError.statusCode = 404;
      
    }



  // duplicate error message beautification 
  if( err.code && err.code === 11000){
    
    customError.msg = ` Duplicate value entered for ${Object.keys(err.keyValue)} field . please chose another value `

    customError.statusCode = 400
  }
  
  // return res.status(customError.statusCode).json({ err });

  return res.status(customError.statusCode).json({ msg : customError.msg });


};




module.exports = errorHandlerMiddleware;
