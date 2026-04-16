const sendNotification = async (event) => {
  if (event.label === "person") {
    console.log("🚨 ALERT: HUMAN DETECTED");

    // 🔥 Future IoT integration
    // Example: send signal to Raspberry Pi / ESP32
    // axios.post("http://iot-device-ip/buzzer", { state: "ON" })
  }
};

module.exports = sendNotification;