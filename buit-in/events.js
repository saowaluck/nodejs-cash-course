//Events
const events = require('events')
const EventEmitter = events.EventEmitter
const connect = new EventEmitter

connect.on("online", () => {
  console.log("event on")
})
connect.emit("online")