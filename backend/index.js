const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 
const authRoutes = require('./middleware/auth');
const User = require('./models/User'); 

dotenv.config();

const app = express();


const corsOptions = {
    origin: "http://localhost:3000", 
    methods: "GET, POST, PUT, DELETE, HEAD",
    credentials: true,
};

app.use(cors(corsOptions)); 
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const createAdminUser = async () => {
    const admin = await User.findOne({ username: 'test-admin' });
    if (!admin) {
        const newAdmin = new User({
            username: 'test-admin',
            password: await bcrypt.hash('test-admin', 10), 
            role: 'Store Manager'
        });
        await newAdmin.save();
        console.log('Admin user created');
    }
};

createAdminUser();
