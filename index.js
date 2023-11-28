const express = require("express")
const app = express()
const cors = require("cors")
const { Data } = require("./DummyData")
app.use(cors({
    origin: "*"
}))
app.get("/", (req, res) => {
    res.send(Data)
})
app.listen(5500, () => {
    try {
        console.log("server started sucessfully")
    }
    catch {
        console.log("server not started")
    }
})