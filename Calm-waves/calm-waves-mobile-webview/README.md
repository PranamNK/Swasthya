# Calm Waves - Expo Go WebView Wrapper

This wrapper lets Expo Go display the existing **Next.js** Calm Waves app inside a mobile WebView.

## Prerequisites
- Node.js installed
- Expo Go installed on your phone
- Next server running on your PC (example: http://192.168.244.1:9002)
- Phone and PC on the same Wi‑Fi network

## Setup
From repo root:

```bash
cd "c:/Users/ashit.ASUS/OneDrive/Documents/Calm Waves/calm-waves-mobile-webview"
npm install
```

## Run
```bash
npm run start
```

Open Expo Go → scan the QR code.

## Configure URL
Edit `src/App.tsx` and set `WEBVIEW_URL`.

Example:
- `const WEBVIEW_URL = "http://192.168.244.1:9002";`

## Notes
Expo Go cannot run Next.js directly. This project simply wraps the Next app in a native WebView.

