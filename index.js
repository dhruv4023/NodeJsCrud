import express from "express";

// routes
import bookRoute from "./routes/bookRoute.js";


// configuration
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});
app.use("/book", bookRoute);
// app.use("/posts", postRoute);

app.listen(5500, () => {
  console.log("Server running...");
});

/* ----------------------------MONGODB SETUP------------------- */
import mongoose from "mongoose";
mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB database connected");
  })
  .catch((e) => {
    console.log("db not connected");
  });
