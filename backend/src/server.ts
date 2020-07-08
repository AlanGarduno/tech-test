import app from "./app";

app.listen(process.env.HOST_PORT, () => {
  console.log("Server is listening on " + process.env.HOST_PORT + " in " + process.env.NODE_ENV + " mode.");
});
