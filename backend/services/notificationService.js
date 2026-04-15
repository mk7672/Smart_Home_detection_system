// services/notificationService.js
const sendNotification = async (event) => {
  if (event.label === "human") {
    console.log("🚨 ALERT: HUMAN DETECTED");
  }
};

module.exports = sendNotification;