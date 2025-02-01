const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; // here we check the status pf error if not then we assing it to 500
  res.status(statusCode); //status of the error

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errorHandler;
