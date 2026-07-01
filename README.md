# 🌍 Wanderlust

**Wanderlust** is a full-stack, responsive web application inspired by Airbnb. It allows users to discover, list, and review unique accommodations around the world. Featuring a sleek, modern UI with seamless animations and an intuitive user experience, Wanderlust is the ultimate platform for travelers and hosts alike.

## ✨ Features

- **Explore Accommodations:** Browse beautiful listing cards featuring high-quality images, pricing, and locations.
- **Dynamic Filtering:** Filter properties by categories such as *Trending*, *Rooms*, *Beach*, *Castles*, and more. Empty categories are automatically hidden!
- **Tax Toggle:** Instantly calculate and view total prices including taxes with a smooth, animated toggle.
- **User Authentication:** Secure sign-up, login, and logout functionalities managed via Passport.js.
- **Listing Management:** Authenticated hosts can create new listings with image uploads, edit their existing properties, and delete them.
- **Review System:** Users can leave detailed reviews with a 5-star rating system on properties they've visited.
- **Authorization & Security:** Strict server-side validation, ensuring only the listing owner can edit/delete their property, and only the review author can delete their review.
- **Premium UI/UX:** A highly polished interface featuring floating toast notifications, sticky action cards, horizontal scrolling filter bars, and modern CSS transitions.

## 🛠️ Tech Stack

### Frontend
- **HTML5 & CSS3** (Custom, modern Airbnb-style aesthetic)
- **EJS** (Embedded JavaScript Templating)
- **Bootstrap 5** (For responsive grid layouts)
- **FontAwesome** (Icons)

### Backend
- **Node.js & Express.js** (RESTful architecture)
- **MongoDB & Mongoose** (Database and ODM)
- **Passport.js** (Local authentication strategy)
- **Joi** (Server-side data validation schema)
- **Cloudinary & Multer** (Cloud storage and image file uploading)
- **Express-Session & Connect-Flash** (Session management and toast notifications)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v16+ recommended)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) Account (or local MongoDB server)
- [Cloudinary](https://cloudinary.com/) Account (for image uploads)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/archishah61/Wanderlust.git
   cd Wanderlust
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the following keys. You will need to get these credentials from your MongoDB and Cloudinary accounts.
   ```env
   ATLAS_MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   SECRET=your_super_secret_session_string
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the Application:**
   ```bash
   npm start
   ```
   *Note: For automatic server restarts during development, you can use `npx nodemon app.js`.*

5. **View in Browser:**
   Open your browser and navigate to:
   ```text
   http://localhost:8080/listings
   ```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
