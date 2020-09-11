# Clones
Amazon, Whatsapp, Twitter, To-do App, Facebook, Facebook Messenger, Instagram, Instagram Reels, Netflix, COVID-19 Tracker, Youtube, Tinder, TikTok, Spotify, Slack, Google



Redux And ContextAPI Are not Same there are On Same Pattern Both use the idea of Global Store for app for dispatching of data and reducer just listen {Like we add,remove Item to basket}

link and history : link use to change URL and history helps us to pass the User from One page to another




// this is  BACK-END ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ ////////////////////////////////////////////////////////
{/*
this type of setup needed to get the BACK-END Express App on a Cloud Funtcion

const functions = require('firebase-functions');
const express = require('express'); //After installing (npm i express) in terminal And don't forget you have to bhi in function folder
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51HQC8WLtqV8uAAoEUyqE3L7vAKK1ti9ofOg3qJfH1TtX2LiXmem037s4ShononaTeYqI4NSU9via0uxxrMoBYHg000v8TBUf8R'); // secrete KEY From Stripe 

// To Setup API We Need All of these ⬇⬇⬇

// 1- App config
const app = express();

// 2- Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); ///this allow us tu send data and parse in json

// 3- API routes 
app.get('/', (request, response) => res.status(200).send('Hello World')) /// This is dummy route for testing the things Working


// 4- Listen Command
exports.api = functions.https.onRequest(app);

*/
}

to run this on our local  we use this ccommand : firebase emulators:start 