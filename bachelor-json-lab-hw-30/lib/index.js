import express from 'express'
const app = express()
import router from './routes/index.js'

app.use(express.json())
app.use(router)


app.listen(3000, () => console.log('listening on port 3000'))
