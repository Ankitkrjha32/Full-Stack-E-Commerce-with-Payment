const express = require("express");
const collection = require("./mongoose");
const Checkout = require("./checkout");
const cors = require("cors");
const app = express();
// const app = require("express");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const Razorpay = require("razorpay");
const Contact = require("./contact");
// const Checkout = require("./mongoose");
require('dotenv').config();



app.get('/sample', (req,res) => {
    try {
        return res.status(200).json({message: "this is a sample contact us page"});
    }
    catch (error) {
        console.log(error);
    }
})

app.post("/login",async(req,res)=>{
    const{email,password} = req.body

    try {
        const check = await collection.findOne({email:email,password:password})
        console.log("Login attempt:", { email, password, check }); //For Debugging     

        if(check) {
            res.json({ status: "exist", user: check });
        }
        else {
            res.json({ status: "NotExist" });
        }
    }
    catch(e) {
        console.log(`Error : ${e}`);
        res.json({ status: "NotExist" });
    }
})



app.post("/signup",async(req,res)=>{
    console.log("enterd signup")
    const{username,email,password} = req.body

    const data = {
        username : username,
        email : email,
        password : password
    }

    try {
        const check = await collection.findOne({email:email})

        if(check) {
            res.json({ status: "exist" });;
        }
        else {
            res.json({ status: "NotExist" });
            await collection.insertMany([data]) 
        }
    }
    catch(e) {
        console.log(`Error : ${e}`);
        res.json({ status: "NotExist" });
    }
})


// Payment Gateway
const razorpay = new Razorpay({
    key_id: 'rzp_test_znYZ029eSbyTDf',
    key_secret: '2gSXb1P05eU02G9lz781fpcq'
  });
  
  app.post('/buy', async (req, res) => {
    const { amount } = req.body;
  
    console.log('Received amount:', amount); 
  
    const options = {
      amount: amount * 100,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`
    };
  
    try {
      if (!amount || amount <= 0) {
        throw new Error('Invalid amount');
      }
  
      const order = await razorpay.orders.create(options);
      console.log('Order created:', order);
      res.json(order);
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: error.message });
    }
  });


  //Check out Data
  app.post('/checkout', async (req, res) => {
    const { address, city, state, zip, paymentMethod, paymentCompleted } = req.body;

    if (!address || !city || !state || !zip || !paymentMethod ) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newCheckout = new Checkout({
            address,
            city,
            state,
            zip,
            paymentMethod,
            paymentCompleted
        });

        await newCheckout.save();
        res.status(201).json({ message: 'Checkout data saved successfully' });
    } catch (error) {
        console.error('Error saving checkout data:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

//Contact Data

app.post('/contact',async (req,res) => {
    const {fname,lname,email,message} = req.body;

    if (!fname || !lname || !email || !message ) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const contactSchema = new Contact({
            fname,
            lname,
            email,
            message
        });

        await contactSchema.save();
        res.status(201).json({ message: 'Checkout data saved successfully' });
    }
    catch(error) {
        console.error('Error saving contact data:', error);
        res.status(500).json({ message: 'Server error' });
    }
})
  
app.listen(5000,() => {
    console.log('Port Connected');
})