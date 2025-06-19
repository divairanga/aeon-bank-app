AEON Bank – Mobile Transactions App

A simple React Native mobile app built for AEON Bank that allows users to:
- View a list of their recent transactions (incoming/outgoing)
- Tap on a transaction to view detailed information
- Share transaction details via external apps (WhatsApp, email, etc.)

Features
- Transaction list with details, date & amount
- Detailed view on transaction tap
- One-tap share feature
- built using React Native + TypeScript + Zustand
- Clean code structure, reusable components, and modern design

Tech Stack

| Layer         | Technology        |
| ------------- | ----------------- |
| Framework     | [Expo + React Native](https://expo.dev) |
| Language      | TypeScript        |
| Navigation    | React Navigation  |
| State Mgmt    | Zustand           |
| Share Utility | React Native Share |

Prerequisites
- Node.js (v18+ recommended)
- `npm` or `yarn`
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Expo Go app on your Android/iOS device *(for testing)*

Installation
```bash
# Clone the repo
git clone https://github.com/divairanga/aeon-bank-app.git
cd aeon-bank-app

# Install dependencies
npm install 

#Getting Started
npx expo start
