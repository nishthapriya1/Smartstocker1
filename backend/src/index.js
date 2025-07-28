require('dotenv').config();
const express = require('express');
const app = express();
const main = require("./config/db");
const redisClient = require('./config/redis')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/userAuth');
const productRouter = require('./routes/productAuth');
const adminRoutor = require('./routes/adminAuth');
const fileUpload = require("express-fileupload")  //1
const cors = require('cors'); // ✅ Import CORS
const getGeminiResponse = require('./aichat/chat');
app.use(express.json());
app.use(cookieParser())
console.log("1111");

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true               
}));


app.use(fileUpload({
    useTempFiles: true
}))


app.use('/user', authRouter)
app.use('/product', productRouter)
app.use('/admin', adminRoutor)


const InitalizeConnection = async () => {
    try {

        await Promise.all([main(), redisClient.connect()]);
        console.log("DB Connected");

        app.listen(5000, () => {
            console.log("Server listening at port number: 5000");
        })

    }
    catch (err) {
        console.log("Error: " + err);
    }
}


InitalizeConnection();
