const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://W8PypVqIRJXDReMh:W8PypVqIRJXDReMh@cluster0.1nq2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI);

mongoose.connection
  .on("open", (stream) => {
    console.log("Database connected sucessfully");
  })
  .once("error", (streme) => {
    console.log("Failed to connect to database");
  });

module.exports = mongoose;
