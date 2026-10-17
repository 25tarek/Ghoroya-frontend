# 🏠 Ghoroya - Multi-Page Web Application

A modern, responsive, and seamless multi-page web platform designed for **Ghoroya** (Ghoroya Foods, Arts & Crafts, and Expert Services). Built with **React**, **Tailwind CSS**, and **React Router**, this project showcases a decoupled client-demonstration architecture featuring full multi-page navigation and smooth cross-page hash routing.

---

## 🌟 Key Features

*   **📱 Fully Responsive UI:** Tailored layout for all screen sizes, including desktop navigation and a mobile drawer (hamburger menu).
*   **🚦 Multi-Page Routing:** Powered by `react-router-dom` with dedicated pages for:
    *   **Homepage (`/`):** Hero section, 1-hour delivery badges, Core Services, Interactive App Showcase, and Rider/Merchant Join section.
    *   **About Us Page (`/about`):** Detailed story, Founder & CEO profile (**Abdur Rahim**), vision, and mission.
    *   **Privacy Policy Page (`/privacy-policy`):** Transparent user data protection and policy details.
*   **🔗 Seamless Cross-Page Navigation:** Custom `NavHashLink` component allowing users on any sub-page to click navbar section anchors (`#features`, `#app-showcase`, `#rider-merchant`) and automatically route to the Homepage while smoothly scrolling to the target section.
*   **🌐 Dual Language Support:** Instant toggling between **Bangla (বাংলা)** and **English**.
*   **🖼️ Interactive Showcase:** Dynamic 3D-styled app interface gallery with live preview switching.

---

## 🛠️ Tech Stack & Dependencies

*   **Frontend Framework:** [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** `react-router-dom`
*   **Icons:** `lucide-react`

---

## 📂 Project Structure

```text
ghoroya-v2/
├── public/
│   ├── logoGhoroya.png
│   ├── screen1.png
│   ├── screen2.png
│   ├── screen3.png
│   └── founder.jpg
├── src/
│   ├── App.jsx           # Main routing & component architecture
│   ├── main.jsx          # Application entry point
│   └── index.css         # Tailwind CSS imports
├── package.json
├── vite.config.js
└── README.md