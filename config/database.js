//mongoose config
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => console.log(`Connected to ${db.name} at ${db.host}:${db.port}`))
db.on("close", () => console.log("Disconnected from Mongoose"))
db.on("error", (error) => console.log(error));

module.exports = mongoose