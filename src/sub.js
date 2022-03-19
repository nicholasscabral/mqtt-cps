const fs = require("fs");
const dayjs = require("dayjs");
const mqtt = require("mqtt");
const subscriber = mqtt.connect("mqtt://broker.hivemq.com");
const mtopic = "testeNicholas";
let messageToAppend = "";

subscriber.on("connect", () => {
  subscriber.subscribe(mtopic);
  console.log("client subscribed to topic: " + mtopic);
});

subscriber.on("message", (topic, message) => {
  console.log(message.toString());
  messageToAppend = `${dayjs(new Date()).format(
    "DD/MM/YYYY hh:mm:ss"
  )} => ${message.toString()}\n`;
  fs.appendFileSync("./output.txt", messageToAppend);
});
