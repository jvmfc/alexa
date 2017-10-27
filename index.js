"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "Carolina": function () {
    this.response.speak("Hello, Carolina"); 
    this.emit(':responseReady');
  },
  "LaunchRequest": function () {
    this.response.speak("Welcome to The Good Place"); 
    this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

