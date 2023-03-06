require('dotenv').config();
const express = require("express");
const app = express();



const router = require("./routes/users_routes");

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/", router);


app.listen(PORT, () => {
    console.log(PORT)
})