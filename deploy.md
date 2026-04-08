# Deployment Guide

This repository has three deployable pieces:

1. The Next.js frontend in the project root.
2. The Express API in `backend/`.
3. The Supabase database defined in `supabase/full_schema.sql`.

The recommended production setup is:

- Frontend on Vercel.
- Backend API on Render, Railway, Fly.io, or any Node host.
- Database and auth on Supabase.

## 1. Prerequisites

Before deploying, make sure you have:

- A Supabase project.
- A GitHub repository connected to your code host.
- A backend hosting account.
- A Vercel account.
- Supabase service role key, project URL, and JWT secret.
- Razorpay test or live credentials.
- SMTP credentials for outgoing email.

## 2. Supabase Setup

1. Open your Supabase project.
2. Go to the SQL Editor.
3. Paste the contents of `supabase/full_schema.sql`.
4. Run the script.
5. Confirm the tables, triggers, policies, and seed data were created.

### Required Supabase values

- Project URL: use the value from the Supabase dashboard.
- Anon key: safe for the frontend.
- Service role key: backend only, never expose in the browser.
- JWT secret: backend auth verification.

## 3. Environment Variables

Use the example files as the source of truth:

- `.env.example`
- `backend/.env.example`

### Frontend variables

Set these in Vercel and in local `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`

### Backend variables

Set these in your backend host:

- `PORT`
- `FRONTEND_URL`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_JWT_SECRET`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `FROM_EMAIL`
- `ADMIN_EMAIL`

### Important notes

- Keep `.env.local` and backend `.env` out of git.
- Do not put the Supabase service role key in the frontend.
- `FRONTEND_URL` can be a comma-separated list of allowed origins.

## 4. Frontend Deployment on Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Set the root directory to the repository root.
4. Add the frontend environment variables.
5. Set `NEXT_PUBLIC_API_BASE_URL` to the deployed backend URL.
6. Deploy the project.

### Build settings

- Framework preset: Next.js.
- Build command: `npm run build`.
- Output directory: default.

### After deploy

- Confirm the home page loads.
- Confirm public pages load.
- Confirm auth routes load.
- Confirm dashboard and admin routes load.

## 5. Backend Deployment

Deploy the `backend/` folder as a standalone Node app.

### Recommended host settings

- Root directory: `backend`
- Start command: `npm start`
- Install command: `npm install`

### Backend env vars

Add all variables from `backend/.env.example` to the host environment.

### Backend health check

After deployment, open:

- `/health`

Expected response:

```json
{ "ok": true, "service": "pranic-healing-api" }
```

## 6. Connect Frontend and Backend

Update the production frontend environment variable:

- `NEXT_PUBLIC_API_BASE_URL=https://your-backend-domain`

Update the backend origin list:

- `FRONTEND_URL=https://your-vercel-domain.vercel.app`

If you have multiple frontends, separate them with commas.

## 7. Production Checklist

Before announcing launch, verify:

- Supabase SQL script has been executed successfully.
- Frontend routes render without errors.
- API `/health` returns success.
- Login and registration work.
- Booking form submits successfully.
- Contact form stores a lead.
- Courses and healers pages load data.
- Razorpay checkout keys are set correctly.
- SMTP sends email in production.

## 8. Local Development Setup

If you want to run the project locally:

1. Install dependencies at the repo root.
2. Install dependencies in `backend/`.
3. Create `.env.local` from `.env.example`.
4. Create `backend/.env` from `backend/.env.example`.
5. Run the frontend with `npm run dev`.
6. Run the backend with `npm start` inside `backend/`.

## 9. Useful Commands

Frontend:

```bash
npm install
npm run dev
npm run build
npm start
```

Backend:

```bash
cd backend
npm install
npm run dev
npm start
```

## 10. Troubleshooting

### Frontend fails to start

- Check `NEXT_PUBLIC_SUPABASE_URL`.
- Check `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Make sure `NEXT_PUBLIC_SITE_URL` is set correctly.

### Backend fails to start

- Check `SUPABASE_URL`.
- Check `SUPABASE_SERVICE_ROLE_KEY`.
- Check `FRONTEND_URL` formatting.

### CORS errors

- Add the frontend URL to `FRONTEND_URL`.
- Ensure the backend URL is the same one used in `NEXT_PUBLIC_API_BASE_URL`.

### Supabase query or policy failures

- Re-run `supabase/full_schema.sql`.
- Confirm the role policies were created.
- Confirm the service role key is used only in backend code.

### Payment issues

- Verify Razorpay key ID and secret.
- Make sure test keys are not mixed with live keys.

## 11. Final Production Order

Use this order for the cleanest deployment:

1. Run the Supabase SQL script.
2. Deploy the backend and confirm `/health`.
3. Deploy the frontend.
4. Point the frontend to the backend URL.
5. Verify auth, booking, contact, and payments.

## 12. Files To Update For Production

- `.env.local`
- `backend/.env`
- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_SITE_URL`
- `FRONTEND_URL`

Keep this file as the single deployment reference for the project.