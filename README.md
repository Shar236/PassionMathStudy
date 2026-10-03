# Full-Stack Foundation

A minimal React + Vite frontend and Node.js + Express REST API.

## Structure

```text
frontend/  React application and Vite configuration
backend/   Express application and REST API
```

## Requirements

- Node.js 20 or newer
- npm

## Setup

Install each application independently:

```sh
cd backend && npm install
cd ../frontend && npm install
```

Copy `.env.example` to `.env` in each application and adjust values for your environment. The frontend uses `VITE_API_URL`; the backend uses `PORT`, `CLIENT_ORIGIN`, and the optional `DATABASE_URL` for future database integration.

Start the backend and frontend in separate terminals:

```sh
cd backend && npm run dev
```

```sh
cd frontend && npm run dev
```

The frontend runs at http://localhost:5173 and proxies `/api` requests to the backend at http://localhost:5000. Check the API at http://localhost:5000/api/health.

## 10. Ownership & handover checklist

- [ ] Domain registered with the owner's email and mobile number
- [ ] Hosting, Cloudflare, MongoDB Atlas and Cloudinary accounts owned by the owner (developer access added as a member, never as the primary account)
- [ ] Full source code repository transferred to the owner
- [ ] Owner has the superadmin account and 2FA enabled; developer admin accounts removed or downgraded
- [ ] Owner has changed every master password and regenerated `JWT_SECRET`, `CSRF_SECRET` and `ENCRYPTION_KEY` (this signs everyone out)
- [ ] Credentials handed over through a password manager, never a plain-text document
- [ ] Backup schedule confirmed, second backup location confirmed, one test restore completed
