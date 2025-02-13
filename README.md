# Currency Converter

## Overview
This is a full-stack currency converter application built using **React (frontend), Node.js & Express (backend)**. It fetches real-time exchange rates using an external API and allows users to convert between different currencies.

## Features
- Convert between different currencies using real-time exchange rates.
- User-friendly interface for easy input and selection.
- Backend API to fetch conversion rates from an external source.
- Error handling for invalid inputs and server issues.

## Tech Stack
### Frontend
- React
- Axios (for API requests)

### Backend
- Node.js
- Express
- Axios
- dotenv (for managing API keys)

## Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/currency-converter.git
cd currency-converter
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```

#### Create a `.env` file in the backend directory:
```
EXCHANGE_RATE_API_KEY=your_api_key_here
```

#### Start the backend server
```sh
node server.js
```

### 3️⃣ Frontend Setup
```sh
cd ../frontend
npm install
npm start
```

## Usage
1. Open the application in your browser.
2. Enter an amount, select currencies, and click "Convert".
3. View the converted amount based on real-time exchange rates.

## API Endpoint (Backend)
### `GET /convert`
#### Query Parameters:
- `from`: Base currency (e.g., USD)
- `to`: Target currency (e.g., EUR)
- `amount`: Amount to convert

#### Example Request:
```
GET http://localhost:5000/convert?from=USD&to=EUR&amount=100
```

#### Example Response:
```json
{
  "from": "USD",
  "to": "EUR",
  "amount": 100,
  "convertedAmount": "92.50",
  "rate": 0.925
}
