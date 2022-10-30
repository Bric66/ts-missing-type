require("dotenv").config();
import * as express from "express";
import { Application } from "express";
import { UserRouter } from "./routes/users";

const port = +process.env.PORT;

// Type the app const.
const app: express.Application = express();

app.use("/user", UserRouter);

app.listen(port, () => {
  console.info(`server listenning on port ${port}`);
});
