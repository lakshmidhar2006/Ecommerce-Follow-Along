const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();  // ✅ Fixed dotenv loading

const app = express();

// ✅ Apply CORS before routes
app.use(cors({ origin: "http://localhost:5175", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Corrected static folder paths
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/products', express.static(path.join(__dirname, '../products')));

// ✅ Imported routers correctly
const userRouter = require("./controller/user");
const productRouter = require('./controller/Product');

app.use('/api', userRouter);
app.use('/api/products', productRouter);

module.exports = app;
