# Wanderlust

A Node.js/Express travel listing application using MongoDB, Passport authentication, and Cloudinary for image uploads.

## Prerequisites

- Node.js 22.11.0 (or compatible version)
- npm
- MongoDB Atlas connection string
- A `.env` file in the project root containing:
  - `ATLAS_MONGO_URI`
  - `SECRET`

## Install

1. Open a terminal in the project folder.
2. Run:
   ```bash
   npm install
   ```

## Environment

Create a `.env` file at the project root with values like:

```env
ATLAS_MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
SECRET=yourSessionSecret
```

## Run the app

Start the server with:

```bash
npm start
```

Then open:

```text
http://localhost:8080
```

## Notes

- The app uses `app.js` as the entry point.
- The server listens on port `8080`.
- If you want automatic reload during development, install `nodemon` globally or as a dev dependency and run:
  ```bash
  npx nodemon app.js
  ```
