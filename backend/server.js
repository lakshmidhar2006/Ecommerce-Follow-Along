const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();  // ✅ Fixed environment variable loading

const app = require('./app');
const connectDB = require('./db/db');

const PORT = process.env.PORT || 5000;  // ✅ Ensures port availability

const server = app.listen(PORT, async () => {
    await connectDB();
    console.log(`✅ Server running on port ${PORT}`);
});

// ✅ Proper shutdown handling
process.on('SIGTERM', () => {
    console.log('🔴 Server shutting down...');
    server.close(() => process.exit(0));
});
