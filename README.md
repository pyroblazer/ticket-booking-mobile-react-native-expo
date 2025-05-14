# 🎫 Ticket Booking Mobile App (React Native + Expo)

This is the **mobile frontend** for the [Ticket Booking Backend (Golang)](https://github.com/pyroblazer/ticket-booking-backend-golang). Built with **React Native**, **Expo Router**, and **Axios**, it allows users to browse events and book tickets via a clean, modern interface.

---

## 🚀 Features

- 🔐 User authentication (JWT-based)
- 📅 Browse available events
- 🎟️ Book and manage your tickets
- 📱 Optimized for Android & iOS
- 📡 Connects to the backend via REST API
- 🧭 Expo Router for navigation

---

## 📦 Tech Stack

- **React Native**
- **Expo**
- **Expo Router**
- **Axios** for API calls
- **AsyncStorage** for JWT persistence

---

## 📲 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pyroblazer/ticket-booking-mobile-react-native-expo.git
cd ticket-booking-mobile-react-native-expo
````

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment

Create a `.env` file at the root:

```bash
cp .env.example .env
```

**Example `.env`:**

```env
API_URL_ANDROID=http://10.0.2.2:8080
API_URL_IOS=http://127.0.0.1:8080
API_URL_WEB=http://127.0.0.1:8080
```

### 4. Run the App

```bash
npm start
# then press 'a' for Android or 'i' for iOS simulator
```

---

## 🔗 Backend API

Make sure the backend is running at `http://localhost:8080` (or your configured IP).

Check out the backend repo:
👉 [ticket-booking-backend-golang](https://github.com/pyroblazer/ticket-booking-backend-golang)

---

## 🧪 Testing

```bash
npm run test
```

---

## 🙋 Contributing

1. Fork this repo
2. Create a new branch
3. Make changes and commit
4. Open a pull request 🚀

---

## 🧑‍💻 Maintainer

Built with ❤️ by [pyroblazer](https://github.com/pyroblazer)

```