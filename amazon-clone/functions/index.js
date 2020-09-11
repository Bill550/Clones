// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const express = require('express'); //After installing (npm i express) in terminal And don't forget you have to bhi in function folder
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51HQC8WLtqV8uAAoEUyqE3L7vAKK1ti9ofOg3qJfH1TtX2LiXmem037s4ShononaTeYqI4NSU9via0uxxrMoBYHg000v8TBUf8R');

// To Setup API We Need All of these ⬇⬇⬇

// 1- App config
const app = express();

// 2- Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); ///this allow us tu send data and parse in json

// 3- API routes 
app.get('/', (request, response) => response.status(200).send('Hello World')) /// This is dummy route for testing the things Working
app.post("/payments/create", async (request, response) => {
    const total = request.query.total; // query

    console.log("Payment Request Recieved !!! : ", total);
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // Remember This is in the subunit o currency
        currency: "usd"
    });

    // this is for OK / Created Any thing
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


// 4- Listen Command
exports.api = functions.https.onRequest(app);


// by typing command firebase emulators:start 
// we get
// function[api]: http://localhost:5001/clone-33515/us-central1/api
// http://localhost:4000/functions //  
