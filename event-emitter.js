const events = require("events");
const eventEmitter = new events.EventEmitter();

/**Create a event */
eventEmitter.on("sayName", (text) => {
  console.log("My name: Clotilde", text.age, text.surname);
});
/**Trigger a event */

setTimeout(() => {
  eventEmitter.emit("sayName", { age: 12, surname: 'mehmet' });
}, 2000);
