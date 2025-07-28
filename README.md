## Smart Stalker
A full-stack e-commerce platform developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to browse products, search and filter items, manage a shopping cart, and place orders with secure authentication. The admin dashboard enables product management (add, edit, delete), category control, order tracking, and user management. Admins can monitor sales, view order histories, update delivery statuses, and manage inventory in real-time. The frontend is designed using React for responsive and dynamic user interaction, while the backend handles secure APIs, JWT-based authentication, and role-based access control to separate admin and user privileges.

### Demo
https://www.loom.com/share/0e9b4e5bedef4b34981ed72de6872c27

### 🔑 Key Features of the E-Commerce Website
#### 🔐 Authentication System
This project uses JWT (JSON Web Token) for secure authentication.

Users need to sign up only once.

After login, a token is issued which remains valid for 24 hours.

As long as the token is valid, users can access protected routes without needing to log in again.

Once the token expires, users must log in again, but do not need to re-register.

Admin and user roles are handled via role-based access control, allowing only authorized users to access the admin dashboard.


#### 🛒 Customer-Side Features

User Authentication – Sign up, log in, and logout with secure JWT-based authentication.

Product Browsing – View products with categories, price ,discounts and search functionality.

Shopping Cart – Add, update, or remove products in real-time.

Checkout System – Place orders with order summary and address input.

Order History – View previous orders with details and status updates.

Chatbot Support – Interactive chatbot for product queries and user assistance (basic NLP or rule-based).

#### 🛠 Admin Panel & Dashboard
Admin Authentication – Secure login with role-based access control.

Dashboard Overview – Summary of total orders, users, and revenue.

Product Management – Add, edit, and delete products with image uploads.

Order Management – Track orders, update delivery status, and manage returns.

User Management – View, block, or delete users as needed.

Inventory Tracking – Monitor stock levels and restock alerts.

Sales Analytics – View sales trends and performance insights (optional charts or basic reports).

#### 💬 Chatbot Integration
Customer Support Bot – Helps users find products, answer FAQs, and guide them through the site.

#### 🔔 Notification Features
##### ✅ Staff Alerts (Back Office)
Low-Stock Notification When any product's inventory falls at or below its configured lowStockThreshold, an automatic email is sent to all designated staff to restock the products.

##### Product Lifecycle Alerts
New Product Added: On creation of any new product, staff receive an email with product name, SKU, and details.

Product Updated: Any edits to product information (price, description, stock, etc.) trigger a staff notification email summarizing the changes.

Product Deleted: If a product is removed, staff receive an alert with the product name and ID for audit and record-keeping.

##### User Activity Notifications
User Sign-Up: Upon registration, the user gets a welcome email confirming account creation, along with next steps or a confirmation link.

User Sign-In (Login): Each successful login triggers an email confirming the sign-in time and optionally the IP or device used.

User Sign-Out (Logout): On logout, they receive a logout confirmation email noting the time and session end.

#### 🌐 Other Technical Features
RESTful API – Clean and scalable API architecture using Express.js.

MongoDB Database – Efficient document-based storage of users, orders, and products.

Responsive Design – Fully mobile-friendly interface using React.

Protected Routes – Frontend access control for both user and admin routes.

### Installation
Install my-project with npm

  npm install my-project
  cd my-project
  npm install express mongoose bcrypt 
  npm i cookie-parser jsonwebtoken dotenv
  npm i redis validator
Run Locally
### Clone the project

  git clone 
Go to the project directory

  cd my-project
Install dependencies

  npm install 
Start the server

  npm run start
### FAQ
How does the chatbot help?
The chatbot helps users by answering common questions like “How to place an order?”, “What are today’s offers?”, or guiding them to the right product categories.

How do I access the admin dashboard?
Log in using admin credentials. Admins are granted access based on roles set in the backend database.

Can a user become an admin?
No, only users with the admin role in the database can access admin routes and dashboard features.

### Support
For support, email smartstocker1234@gmail.com
