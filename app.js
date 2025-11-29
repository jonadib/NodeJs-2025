const express = require('express')
const app =express()
const morgan = require('morgan')
const userModel = require('./models/user');
const dbConnection = require('./config/db');


app.use(morgan('dev'));
//routing in express.js
app.use(express.json()); //middleware to parse json data
app.use(express.urlencoded({extended:true})); //middleware to parse urlencoded data
app.use(express.static('public')); //to serve static files
app.set('view engine' ,'ejs');

// app.use((req,res,next)=>{ //middleware 
//     console.log('This is middleware');
//     const a =5;
//     const b=5;
//     const c=a+b;app
//     console.log('sum is :-' ,c)
//     return next()

// })

// app.get('/',(req,res)=>{
//     res.render('index');      
// })

// app.get('/about',(req,res)=>{
//     res.send("This is about page of express.js")
// })
// app.get('/contact',(req,res)=>{
//     res.send("This is contact page of express.js")
// })

app.get('/register',(req,res)=>{
    res.render('register');      
})

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        await userModel.create({ username, email, password });
        res.send("User registered successfully!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error registering user");
    }
});


// app.post('/getdata',(req,res)=>{
//     console.log(req.body)
//     res.send("This is get data page of express.js");
// })

app.get('/get-users',(req,res)=>{ // data read from database
    userModel.find({ //findOne is a method to find a single document
    }).then((users)=>{ res.send(users) })
})

app.get('/update-users',async (req,res)=>{ // update user data
    await userModel.findOneAndUpdate({
        username:'a' 
    },{
        email:'a@a.com'
    })
    res.send("User updated successfully");
})

app.get('/delete-users' ,async (req,res)=>{ // delete user data
    await userModel.findOneAndDelete({
        username:'a'
    })
    res.send("user deleted succesfully");
})

app.listen(3000);
