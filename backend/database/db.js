const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Unable to connect with Database", err);
    process.exit(1);
  }
}

module.exports = connectToDB;
