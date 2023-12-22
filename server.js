import express from "express"
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

dotenv.config();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PORT = process.env.PORT || 5009

const app = express();

app.use('/yam-guy', express.static(path.join(__dirname, 'static/yamguywedding')));

app.listen(PORT, () => {
    console.log("Server started on port: " + PORT)
})