const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/err-handler");
const cors = require("cors");
require("dotenv/config");

//middleware
app.use(express.json());
app.use(morgan("tiny"));
// app.use(authJwt());
// app.use(errorHandler);
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(cors({origin:'*'}));

//routes
const dishRouter = require("./routers/dishes");
const userRouter = require("./routers/users");
const restaurantRouter = require("./routers/restaurants");
const orderRouter = require("./routers/orders");

const api = process.env.API_URL;

app.use(`${api}/dish`, dishRouter);
app.use(`${api}/user`, userRouter);
app.use(`${api}/restaurant`, restaurantRouter);
app.use(`${api}/order`, orderRouter);

//database
mongoose
  .connect(process.env.MONGODB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "test",
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

//server
app.listen((process.env.PORT || 5000), () => {
  console.log(api);
});
