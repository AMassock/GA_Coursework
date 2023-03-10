import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/hogwarts", { useNewUrlParser: true, useUnifiedTopology: true });

export default mongoose