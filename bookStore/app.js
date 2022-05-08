const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const { userSyncHandler } = require('./Middleware/syncUserMiddlewareHandler');
const { errorResponse, unknownRequests } = require('./Middleware/errorHandler');
const userRoute = require('./Routes/user-route');
const bookRoute = require('./Routes/books-route');

dotenv.config({ path: "./.env" });

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(express.json());
app.use(userSyncHandler);

app.use('/api/user', userRoute);
app.use('/api/book', bookRoute);


app.use(unknownRequests);
app.use(errorResponse);

module.exports=app