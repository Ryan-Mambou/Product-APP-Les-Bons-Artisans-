const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const client = require("../database");

const dbName = "productDB";
const usersCollection = "users";

module.exports = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;

      const existingUser = await client
        .db(dbName)
        .collection(usersCollection)
        .findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = { email, password: hashedPassword };

      const result = await client
        .db(dbName)
        .collection(usersCollection)
        .insertOne(newUser);

      res.status(201).json({
        _id: result.insertedId,
        email: newUser.email,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await client
        .db(dbName)
        .collection(usersCollection)
        .findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "This account does not exist" });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { userId: user._id, email: user.email },
        "JWT_SECRET",
        { expiresIn: "24h" }
      );

      res.status(200).json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
