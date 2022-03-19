const mqtt = require("mqtt");
const publisher = mqtt.connect("mqtt://broker.hivemq.com");
const mtopic = "testeNicholas";

publisher.on("connect", () => {
  setInterval(() => {
    publisher.publish(mtopic, (Math.random() * 50).toFixed(3).toString());
  }, 2000);
});
