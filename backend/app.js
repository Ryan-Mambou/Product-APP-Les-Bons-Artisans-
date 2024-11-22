const express = require("express");
const cors = require("cors");
const client = require("./database"); // Import the database connection file
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });
