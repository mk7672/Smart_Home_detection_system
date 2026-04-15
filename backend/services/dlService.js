// services/dlService.js
const axios = require("axios");

const detectImage = async (imageUrl) => {
  try {
    const response = await axios.post(process.env.DL_API_URL, {
      image_url: imageUrl,
    });

    return response.data; // { label, confidence }
  } catch (error) {
    console.log("DL ERROR:", error.message);

    // fallback (important so app never crashes)
    return {
      label: "unknown",
      confidence: 0.5,
    };
  }
};

module.exports = detectImage;