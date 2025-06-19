# Localization Management Frontend

This is the frontend client for the **Localization Management System**, built with **Next.js App Router**, **React Query**, and **Zustand**. It provides a sleek and responsive interface to manage translation keys and localized strings across different projects and languages.

---

## 🚀 Features

- 🔍 View and search translation keys by project/language
- 📋 Sidebar project/language selectors (integrated with Zustand)
- ✍️ Inline translation editor
- ☁️ React Query for efficient API calls and caching
- 🎨 TailwindCSS + Dark mode UI
- 🧪 Jest + Testing Library unit tests

---

## 🧰 Tech Stack

| Layer              | Stack                            |
| ------------------ | -------------------------------- |
| Framework          | Next.js 14+ (App Router)         |
| Language           | TypeScript                       |
| State Management   | Zustand                          |
| API Management     | React Query (@tanstack)          |
| Styling            | Tailwind CSS + custom tokens     |
| Testing            | Jest + React Testing Library     |

---

## ⚙️ Setup Instructions

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/localization-management-frontend.git
cd localization-management-frontend
```

### ✅ 2. Install Dependencies
- Make sure you have Node.js 18+ installed.
```bash
npm install
# or
yarn install
```

### ✅ 3. Environment Variables
- Create a .env.local file:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
This points to the backend FastAPI service.
```

🔁 You may update the URL if deploying backend to a live server.

### ✅ 4. Start Development Server
```bash
npm run dev
```
App runs on:

➡️ http://localhost:3000

### 🧪 Run Tests
Run all unit tests using:

```bash
npm run test
```
Includes working example for TranslationKeyManager component test.

### Design Approach

- App Router: Leveraged Next.js App Router for routing and layout composability.
State separation:
- Zustand manages project and language filters globally.
- React Query handles all API interactions and data caching.
- Server sync: Mutations trigger React Query invalidations to keep UI state fresh.
UI hierarchy:
- Sidebar: Select project/language.
- Toolbar: Search/add keys (scaffolded).
- TranslationKeyManager: Lists keys and editable translations.

### ⚖️ Trade-offs Considered
Decision	Justification
Zustand over Redux	Lightweight, simpler, and fits the filter-only global state
React Query for API	Handles caching, loading/error states cleanly
App Router over Pages Router	Modern architecture, future-ready
JSONB-based translation schema	Simplified API response structure; easier for frontend mapping
Jest for testing	Widely adopted, great integration with RTL

### 🧩 Potential Improvements
Authentication & role-based UI

Project/language management UIs

Key import/export (CSV/JSON)

Pagination and search improvements

Editable translation comments and metadata

### 📝 Notes
The layout and logic are designed to simulate a real-world translation dashboard.

Dummy placeholders are left in page.tsx for Toolbar, Sidebar, and Profile sections to demonstrate layout scaffolding.

### Contact
Feel free to reach out via GitHub or LinkedIn for any questions or improvements.

https://github.com/dar-sub
https://linkedin.com/in/ridwan-akinfenwa
