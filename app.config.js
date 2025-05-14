import "dotenv/config";

export default {
  expo: {
    name: "Ticket Booking App",
    slug: "ticket-booking-mobile-react-native-expo",
    version: "1.0.0",
    extra: {
      API_URL_ANDROID: process.env.API_URL_ANDROID,
      API_URL_IOS: process.env.API_URL_IOS,
      API_URL_WEB: process.env.API_URL_WEB,
    },
  },
};
