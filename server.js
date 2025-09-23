// server.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const Joi = require("joi");
const twilio = require("twilio");
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");

const app = express();
app.use(bodyParser.json());

// Twilio client setup
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
