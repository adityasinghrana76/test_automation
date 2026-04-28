# 🛒 Amazon Automation Testing using Playwright

## 📌 Project Overview

This project demonstrates **end-to-end automation testing** of an e-commerce flow on Amazon using **Playwright** with JavaScript.

The automation covers:

* Opening Amazon website
* Searching for products (iPhone / Samsung Galaxy)
* Selecting a product
* Extracting the product price
* Adding the product to the cart
* Running test cases in parallel

---

## 🚀 Tech Stack & Tools Used

### 1. Node.js

* Used as the runtime environment to execute JavaScript code.
* Required to install dependencies and run automation scripts.

### 2. Playwright

* Modern automation framework for UI testing.
* Supports multiple browsers (Chromium, Firefox, WebKit).
* Provides:

  * Auto-waiting
  * Parallel execution
  * Reliable selectors
  * Headless & headed execution

### 3. npm

* Used to manage project dependencies.
* Helps install Playwright and other required packages.

---

## 📂 Project Structure

```
amazon-automation/
│
├── tests/
│   └── amazon.spec.js        # Test cases
│
├── pages/
│   └── amazonPage.js         # Page Object Model (POM)
│
├── playwright.config.js      # Playwright configuration
├── package.json              # Project metadata & dependencies
└── README.md                 # Documentation
```

---

## ⚙️ Setup Instructions

### 1. Install Node.js

Download and install from:
👉 https://nodejs.org

Verify installation:

```
node -v
npm -v
```

---

### 2. Clone / Create Project

```
mkdir amazon-automation
cd amazon-automation
npm init -y
```

---

### 3. Install Playwright

```
npm install -D @playwright/test
npx playwright install
```

---

## 🧠 Framework Design

### ✔ Page Object Model (POM)

We use **POM (Page Object Model)** for better maintainability.

👉 Benefits:

* Code reusability
* Separation of logic and tests
* Easy updates if UI changes

**Example:**

* `amazonPage.js` → Handles all actions (search, click, get price)
* `amazon.spec.js` → Contains test scenarios

---

## 🧪 Test Scenarios

### ✅ Test Case 1: iPhone

* Open Amazon
* Search for "iPhone"
* Select first product
* Extract price
* Add to cart

### ✅ Test Case 2: Samsung Galaxy

* Open Amazon
* Search for "Samsung Galaxy"
* Select first product
* Extract price
* Add to cart

---

**Add to cart feature is not available here as it require user login.**

---
## ⚡ Parallel Execution

Configured in `playwright.config.js`:

```
fullyParallel: true,
workers: 2,
```

👉 Why?

* Runs multiple tests simultaneously
* Reduces execution time
* Improves efficiency

---

## 🛠 Configuration Details

```
use: {
  browserName: 'chromium',
  headless: false,
  viewport: null,
  launchOptions: {
    slowMo: 300
  }
}
```

### Explanation:

* **Chromium** → Browser used for testing
* **headless: false** → Opens browser UI
* **slowMo** → Slows execution for visibility
* **timeout handling** → Prevents test failures due to slow network

---

## ▶️ Running Tests

```
npx playwright test
```

---

## 📊 Output

* Product price printed in console:

```
iPhone Price: ₹xxxxx
Galaxy Price: ₹xxxxx
```
* If product is currently unavailable or out of stock it will print Price not found

---

* Logs for actions like:

```
Added to cart
Handled error...
```

---

## ⚠️ Error Handling

This project includes:

* Try-catch blocks
* Timeout handling
* Fallback logs

👉 Ensures:

* Tests don’t crash
* Handles slow network / dynamic UI

---

## 💡 Key Features

✔ Parallel execution
✔ Page Object Model
✔ Robust error handling
✔ Dynamic waits
✔ Real-world automation scenario

---

## 👨‍💻 Author

**Aditya Singh Rana**

---
