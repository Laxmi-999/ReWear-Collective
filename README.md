# ReWear-Collective
A basic thrift online store using a modern online marketplace for buying and selling pre-owned items, built with the MERN stack and Next.js.

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Roadmap](#project-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## About The Project

This project aims to create a user-friendly and feature-rich online platform for thrift shopping. It connects individuals who want to sell their pre-loved items with buyers looking for unique and sustainable purchases. The application is built using the MERN stack (MongoDB, Express.js, React, Node.js) with Next.js for a robust, scalable, and SEO-friendly frontend.

## Features

* **User Authentication:** Secure registration and login for buyers and sellers.
* **Product Listing:** Sellers can easily list their items with detailed descriptions, condition, and multiple images.
* **Product Discovery:** Buyers can browse, search, and filter products by categories, price, condition, and more.
* **Product Detail Pages:** Comprehensive view of each item with images, seller info, and reviews.
* **Shopping Cart:** Intuitive cart functionality for managing items before purchase.
* **Secure Checkout:** Streamlined checkout process with payment gateway integration.
* **Order Management:** Buyers can track orders; sellers can manage their sales.
* **Reviews & Ratings:** Users can provide feedback on products and sellers.
* **Admin Panel:** (Future) Centralized control for managing users, products, orders, and categories.
* **Responsive Design:** Optimized for seamless experience across all devices.

## Tech Stack

* **Frontend:**
    * [Next.js](https://nextjs.org/) (React Framework)
    * [React](https://react.dev/) (JavaScript Library for UI)
    * [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS Framework)
    * [React Context API / Zustand](https://zustand-demo.pmnd.rs/) (State Management)
    * [Axios](https://axios-http.com/) (HTTP Client)
* **Backend:**
    * [Node.js](https://nodejs.org/) (JavaScript Runtime)
    * [Express.js](https://expressjs.com/) (Web Framework for Node.js)
    * [MongoDB](https://www.mongodb.com/) (NoSQL Database)
    * [Mongoose](https://mongoosejs.com/) (MongoDB Object Data Modeling - ODM)
    * [JWT](https://jwt.io/) (JSON Web Tokens for Authentication)
    * [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) (Password Hashing)
    * [Multer](https://github.com/expressjs/multer) (For handling `multipart/form-data`, primarily for file uploads)
* **Deployment:** (Examples)
    * Frontend: [Vercel](https://vercel.com/)
    * Backend: [Render](https://render.com/) / [Heroku](https://www.heroku.com/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Node.js (LTS version recommended)
* npm or Yarn
* MongoDB installed locally (e.g., using [MongoDB Community Server](https://www.mongodb.com/try/download/community) and managing with [MongoDB Compass](https://www.mongodb.com/products/compass)).

### Installation

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/your_username/thrift-store-online.git](https://github.com/your_username/thrift-store-online.git)
    cd thrift-store-online
    ```

2.  **Backend Setup:**
    ```bash
    cd backend # or server
    npm install # or yarn install
    ```
    Create a `.env` file in the `backend` directory and add:
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/thriftDB # Or your local MongoDB connection string
    JWT_SECRET=your_jwt_secret_key
    # Add other environment variables like payment gateway keys here
    ```
    Start the backend server:
    ```bash
    npm start # or yarn start
    ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend # Assuming frontend is sibling to backend
    npm install # or yarn install
    ```
    Create a `.env.local` file in the `frontend` directory and add:
    ```
    NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/api # Or your deployed backend URL
    ```
    Start the Next.js development server:
    ```bash
    npm run dev # or yarn dev
    ```

Now, open your browser and navigate to `http://localhost:3000` (or the port Next.js uses).

## Project Roadmap

This project is divided into several phases to ensure a structured development process and deliver core functionalities early on.

### Phase 1: Foundation & Core MVP (Presentable Release)
This phase focuses on building the essential features that make the application functional and presentable.
* Basic user authentication (buyer and seller roles).
* Seller's ability to list items with essential details and one image.
* Buyer's ability to browse all listed products, view product details, and perform basic search/filter by category.
* Initial deployment for accessibility.

### Phase 2: Enhanced Functionality & Seller Tools
* Implementation of advanced product management features for sellers (multiple images, more detailed product attributes).
* Initial shopping cart and checkout process.
* Basic order creation after simulated payment.

### Phase 3: Order Fulfillment & User Experience Refinement
* Development of buyer order history and seller order management dashboards.
* Integration of product and seller review/rating systems.
* Improvements to search and filtering capabilities.
* Focus on ensuring a fully responsive design.

### Phase 4: Admin Features & Optimizations
* Creation of a dedicated admin panel for platform management.
* Implementation of SEO best practices and performance optimizations.
* Enhancement of security features.

### Phase 5: Advanced Features & Scaling
* Future additions like an in-app messaging system, wishlists, recommendation engine, and more.

For a more detailed breakdown, refer to the "Project Roadmap" section above this README.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - your_email@example.com
Project Link: [https://github.com/your_username/thrift-store-online](https://github.com/your_username/thrift-store-online)

## Acknowledgments

* [Next.js Documentation](https://nextjs.org/docs)
* [React Documentation](https://react.dev/docs)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [MongoDB Documentation](https://docs.mongodb.com/)
* [Express.js Documentation](https://expressjs.com/)
* [Mongoose Documentation](https://mongoosejs.com/docs/)



