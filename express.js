const express = require('express');
const app = express();
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const userModel = require('./models/user');
const dbConnection = require('./config/db');

// Middleware
app.use(morgan('dev'));
app.use(express.json()); // middleware to parse json data
app.use(express.urlencoded({extended: true})); // middleware to parse urlencoded data
app.use(express.static('public')); // to serve static files
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');      
});

app.get('/about', (req, res) => {
    res.send("This is about page of express.js");
});

app.get('/contact', (req, res) => {
    res.send("This is contact page of express.js");
});

app.get('/register', (req, res) => {
    res.render('register');      
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Input validation
        if (!username || !email || !password) {
            return res.status(400).json({
                ok: false,
                error: 'Please provide all required fields: username, email, and password'
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user with hashed password
        const user = await userModel.create({
            username,
            email,
            password: hashedPassword
        });

        // Return success without password
        const { password: _, ...userWithoutPassword } = user.toObject();
        res.status(201).json({
            ok: true,
            message: 'User registered successfully',
            user: userWithoutPassword
        });

    } catch (err) {
        console.error('Error creating user:', err);
        
        // Handle duplicate email error
        if (err.code === 11000) {
            return res.status(400).json({
                ok: false,
                error: 'Email already exists'
            });
        }

        // Handle validation errors
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(error => error.message);
            return res.status(400).json({
                ok: false,
                error: messages.join(', ')
            });
        }

        // Handle other errors
        res.status(500).json({
            ok: false,
            error: 'Internal server error'
        });
    }
});

app.post('/getdata', (req, res) => {
    console.log(req.body);
    res.send("This is get data page of express.js");
});

app.get('/get-users', async (req, res) => {
    try {
        const users = await userModel.find({}, { password: 0 }); // Exclude password field
        res.json({
            ok: true,
            users
        });
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({
            ok: false,
            error: 'Error fetching users'
        });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});