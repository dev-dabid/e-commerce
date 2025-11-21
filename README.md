# 🛍️ Mini E-commerce Product Catalog

## Project Overview

This is a simple, client-side **Mini E-commerce Product Catalog** application built using vanilla JavaScript, HTML, and CSS. It allows users to browse products fetched from a remote API, filter them by category, and search by title.

The design is **mobile-first** and fully responsive, ensuring a smooth experience across different screen sizes using only plain CSS and media queries.

## ✨ Features

- **Dynamic Product Display:** Fetches and renders product data from the [Fake Store API](https://fakestoreapi.com/).
- **Category Filtering:** Users can filter products by various categories present in the dataset.
- **Product Search:** Filter the product list dynamically by searching product titles.
- **Responsive UI:** Optimized for mobile devices using plain CSS and media queries.
- **Shopping Cart Logic:** Implements the logic to add items to a local shopping cart data structure (`state.cart`) and updates the cart item count display.

> **Note on Cart View:** The logic to manage the cart is complete, but the front-end display (the actual cart page or modal) for viewing and modifying cart contents is **not yet implemented**.

![Screenshot of the e-commerce product catalog](/assets/images/shofi.png)

## ⚙️ Installation and Setup

To run this project, simply:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/dev-dabid/e-commerce
    ```
2.  **Open the HTML File:**
    Navigate to the project folder and open your main HTML file (e.g., `index.html`) directly in any modern web browser.

## 📁 Project Structure (JavaScript)

The application logic is organized into three main files:

| File           | Role                     | Key Responsibilities                                                                               |
| :------------- | :----------------------- | :------------------------------------------------------------------------------------------------- |
| **`logic.js`** | Core Business Logic      | Data fetching, cart management (`addToCart`), filtering logic (`getVisibleProducts`).              |
| **`ui.js`**    | User Interface Rendering | Creating product cards (`createProductCard`), rendering lists, and setting up DOM event listeners. |
| **`main.js`**  | Initialization           | Sets up the application state, fetches initial data, and connects the UI handlers to the logic.    |

## 🛠️ Future Improvements

- Implement the **Cart View** (modal or dedicated page) to display cart contents.
- Persist the cart data using **Local Storage**.
- Add more sophisticated UI/UX elements (e.g., loading indicators, error messages).
