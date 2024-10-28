const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/db'); // Ensure DB is connected

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
