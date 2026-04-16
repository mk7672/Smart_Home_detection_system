const axios = require("axios");

const detectImage = async (imagePath) => {
  try {
    const response = await axios({
      method: "post",
      url: process.env.DL_API_URL,
      headers: {
        "Api-Key": "secure123",
        "Content-Type": "application/json"
      },
      data: {
        device_id: "cam_01",
        password: "pass123",
        image_path: imagePath
      }
    });

    console.log("ML RESPONSE:", response.data);

    return response.data;

  } catch (error) {
    console.log("DL ERROR FULL:", error.response?.data || error.message);

    return {
      label: "unknown",
      confidence: 0.5,
      alert: false
    };
  }
};

module.exports = detectImage;