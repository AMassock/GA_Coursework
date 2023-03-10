const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/penpal", { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;