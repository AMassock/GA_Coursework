import mongoose from "mongoose"

mongoose.connect('mongodb://localhost/bachelor_nation', { useNewUrlParser: true, useUnifiedTopology: true })

export default mongoose