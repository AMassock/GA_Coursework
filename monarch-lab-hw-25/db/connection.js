import mongoose from "mongoose";

mongoose.Promise = Promise;

const mongoURI = "mongodb://localhost/monarch-api";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", err));


// module.exports = mongoose;

export default mongoose