# Copilot / AI Agent Instructions for Plateful

Purpose: give an AI coding agent the minimal, actionable context to be productive in this repository.

**Big Picture**
- **Architecture:** Two-app monorepo: `backend` (Express + Mongoose + Stripe) and `frontend` (React + Vite). See [backend/server.js](backend/server.js) and [frontend/src/main.jsx](frontend/src/main.jsx).
- **Data flow:** Frontend calls REST endpoints under `/api/*` on the backend (e.g. `/api/items`, `/api/cart`, `/api/user`, `/api/orders`). Backend controllers -> Mongoose models (in `backend/modals`) -> MongoDB. Example: `OurMenu` frontend fetches `/api/items` which is implemented in [backend/controllers/itemController.js](backend/controllers/itemController.js).

**Key entry points & files**
- Backend server: [backend/server.js](backend/server.js)
- DB connect: [backend/config/db.js](backend/config/db.js) (requires `MONGO_URI`).
- Routes: [backend/routes](backend/routes) (itemRoute, cartRoute, orderRoute, userRoute).
- Controllers: [backend/controllers](backend/controllers) (implement business logic; e.g. Stripe integration in `orderController.js`).
- Models: [backend/modals](backend/modals) (naming: `item.js`, `order.js`, `cartItem.js`, `userModel.js`). Note the repo uses folder `modals` (not `models`).
- Frontend root: [frontend/src/App.jsx](frontend/src/App.jsx) and router; cart state managed in [frontend/src/CartContext/CartContext.jsx](frontend/src/CartContext/CartContext.jsx).

**Important conventions & patterns (project-specific)**
- Authentication: login/register returns a JWT stored in localStorage as `authToken`. Frontend attaches it as header `Authorization: Bearer <token>` when calling protected routes (see `CartContext` requests).
- Cart shape: server returns cart items with `{ _id, item, quantity }` (CartContext expects `_id` as string). Preserve `_id` when mutating.
- Image uploads: `multer` stores files under `backend/uploads/` and backend serves them statically at `/uploads`. Item documents store `imageUrl` as path like `/uploads/<filename>`; `itemController` prefixes with host when responding.
- Payments: Stripe `checkout.sessions` used for online payments; `orderController` saves `sessionId` and uses `/api/orders/confirm?session_id=...` for verification. Env vars needed: `STRIPE_SECRET_KEY` and `FRONTEND_URL`.
- CORS is restricted to `http://localhost:5173` and `http://localhost:5174` (see [backend/server.js](backend/server.js)). When testing from different host/port, update CORS config.

**Developer workflows / commands**
- Start backend (dev):
  - `cd backend` then `npm run start` (uses `nodemon server.js`).
- Start frontend (dev):
  - `cd frontend` then `npm run dev` (Vite).
- Build frontend: `npm run build` in `frontend`.
- Preview frontend build: `npm run preview` in `frontend`.

Environment variables commonly required:
- `MONGO_URI` — MongoDB connection string (backend).
- `JWT_SECRET` — for signing tokens used in `auth` middleware.
- `STRIPE_SECRET_KEY`, `FRONTEND_URL` — payment flow.

**Integration & debugging tips for AI changes**
- When changing API shapes, update both controller responses and any frontend code that consumes them (search for endpoint URLs in `frontend/src`).
- For cart/order related code, follow the canonical formats found in `CartContext` and the controllers:
  - Cart API expects/returns `{ _id, item, quantity }`.
  - Order items are nested objects with `{ item: { name, price, imageUrl }, quantity }`.
- To reproduce issues locally: ensure `MONGO_URI` is set and backend is running on port 4000 (default). Frontend hard-codes `http://localhost:4000` in several axios calls — change cautiously.

**Files to inspect first for any task**
- `backend/server.js`, `backend/config/db.js`, `backend/controllers/orderController.js`, `backend/controllers/cartController.js`, `backend/controllers/itemController.js`
- `frontend/src/CartContext/CartContext.jsx`, `frontend/src/App.jsx`, pages under `frontend/src/pages` when changing UX/API interactions.

**Restrictions / things NOT to change without dev signoff**
- Default CORS allowed origins (the team expects localhost:5173/5174). If expanding, coordinate with frontend devs.
- `item` model `name` is `unique: true` — changing this impacts DB uniqueness constraints.

If any section is unclear or you want the agent to include example PR templates or automated tests, tell me which area to expand. After your feedback I'll iterate.
