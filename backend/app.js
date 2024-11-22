const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const uri = "mongodb://localhost:27017/products";

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

const mongoose = require("mongoose");

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB locally!"))
  .catch((err) => console.error("Connection error:", err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
