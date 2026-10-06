# RAGOX — Technology & Digital Experience Agency

REGOX is a modern portfolio and digital experience platform for a high-craft technology agency specializing in Web Development, UI/UX Design, Digital Product Design, and AI Solutions.

---

## 1. Project Locations

- **Root Workspace**: `/Users/gourabghosh/Desktop/REGOX`
- **Frontend Application**: `/Users/gourabghosh/Desktop/REGOX/frontend`
- **Backend API Server**: `/Users/gourabghosh/Desktop/REGOX/backend`
- **Original Assets (Protected & Untouched)**: `/Users/gourabghosh/Desktop/busniess`

---

## 2. Technologies & Architecture

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite 6
- **Architecture**: Component-based modular architecture (`components/`, `sections/`, `data/`, `styles/`)
- **Styling**: Modern CSS Custom Properties & CSS Modules architecture (`index.css`)
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & Space Grotesk
- **Accessibility**: WCAG 2.1 AA compliant, semantic markup, focus rings, `@media (prefers-reduced-motion)`

### Backend
- **Runtime**: Node.js v24
- **Framework**: Express.js
- **Architecture**: REST API with layered routing, controllers, services, and validation middleware
- **Security & Data**: CORS origin configuration, JSON body limiter (100kb), sanitized inputs, local persistent JSON store (`data/inquiries.json`)

---

## 3. Directory Structure

```
REGOX/
├── frontend/
│   ├── public/
│   │   ├── assets/
│   │   │   ├── regox_brand_reel.mp4       # Motion reference video
│   │   │   └── regox_design_reference.jpg # Visual reference
│   │   ├── favicon.svg                    # Geometric R+X brand favicon
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx                 # Sticky transform header + mobile menu
│   │   │   ├── Footer.jsx                 # Manifesto, sitemap & status pill
│   │   │   ├── RegoxBrandmark.jsx         # Architectural R+X vector geometry
│   │   │   ├── MagneticButton.jsx         # Interactive physics button
│   │   │   ├── CustomCursor.jsx           # Minimalist trailing follower
│   │   │   ├── SectionHeading.jsx         # Editorial tracking headings
│   │   │   ├── ProjectCard.jsx            # Large case study card
│   │   │   ├── ProjectPreviewVisual.jsx   # Live dashboard UI mockups
│   │   │   ├── CaseStudyModal.jsx         # Deep-dive 5-stage case study modal
│   │   │   └── ReelModal.jsx              # Brand motion video player modal
│   │   ├── sections/
│   │   │   ├── Hero.jsx                   # Fullscreen hero + R+X brand visual
│   │   │   ├── SelectedWork.jsx           # Large portfolio case studies
│   │   │   ├── Services.jsx               # Interactive 01-06 service selector
│   │   │   ├── Process.jsx                # 5-stage timeline from Idea to Impact
│   │   │   ├── About.jsx                  # Small team, big digital thinking
│   │   │   ├── TechConvergence.jsx        # Design × Code × AI node diagram
│   │   │   ├── CaseStudyPreview.jsx       # InfoTally deep-dive showcase
│   │   │   └── Contact.jsx                # Fully validated INR contact form
│   │   ├── data/
│   │   │   ├── projects.js                # Modular project concepts data
│   │   │   ├── services.js                # Modular services data
│   │   │   ├── process.js                 # 5-stage methodology data
│   │   │   └── technologies.js            # Genuine technology stack data
│   │   ├── styles/
│   │   │   └── index.css                  # Design system tokens & utilities
│   │   ├── App.jsx                        # Application root orchestrator
│   │   └── main.jsx                       # React entrypoint
│   ├── index.html                         # SEO & Open Graph meta tags
│   ├── vite.config.js                     # Vite proxy & bundler config
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── app.js                         # Express middleware & router mounting
│   │   ├── server.js                      # HTTP listener on port 5001
│   │   ├── config/
│   │   │   └── env.config.js              # Environment variable parser
│   │   ├── controllers/
│   │   │   ├── health.controller.js       # GET /api/health
│   │   │   └── contact.controller.js      # POST /api/contact
│   │   ├── services/
│   │   │   └── contact.service.js         # Inquiry persistence & logging
│   │   ├── middleware/
│   │   │   ├── validation.middleware.js   # Input validation (INR budgets)
│   │   │   └── errorHandler.middleware.js # Standardized error formatting
│   │   └── routes/
│   │       ├── health.routes.js
│   │       └── contact.routes.js
│   ├── data/
│   │   └── inquiries.json                 # Persistent inquiry storage
│   ├── .env.example
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── package.json                           # Root concurrency runner
├── README.md
└── .gitignore
```

---

## 4. Development & Running Instructions

### Option A: Run Both Services Concurrently (Recommended)

From the project root (`/Users/gourabghosh/Desktop/REGOX`):

```bash
# 1. Install all dependencies across root, frontend and backend
npm run install:all

# 2. Start both backend (port 5001) and frontend (port 5173) concurrently
npm run dev
```

### Option B: Run Services Separately

**Terminal 1 — Backend API Server:**
```bash
cd /Users/gourabghosh/Desktop/REGOX/backend
npm install
npm run dev
```
- Server boots at: `http://localhost:5001`
- Health check: `http://localhost:5001/api/health`

**Terminal 2 — Frontend Application:**
```bash
cd /Users/gourabghosh/Desktop/REGOX/frontend
npm install
npm run dev
```
- App boots at: `http://localhost:5173`

---

## 5. API Endpoints

### 1. `GET /api/health`
Health check endpoint reporting server status, uptime, and environment.

**Response (200 OK):**
```json
{
  "status": "ok",
  "service": "REGOX API Server",
  "uptime": 12.45,
  "timestamp": "2026-10-06T05:18:05.359Z",
  "environment": "development",
  "version": "1.0.0"
}
```

### 2. `POST /api/contact`
Receives contact inquiries, validates required fields, and stores submissions.

**Request Payload:**
```json
{
  "name": "Arjun Sharma",
  "email": "arjun@example.in",
  "company": "Nexus Labs",
  "projectType": "Web Development",
  "budget": "₹50,000 – ₹1,00,000",
  "message": "We need a modern web application built with React and Node.js."
}
```

**Allowed Budget Tiers (INR):**
- `₹10,000 – ₹25,000`
- `₹25,000 – ₹50,000`
- `₹50,000 – ₹1,00,000`
- `₹1,00,000+`
- `Not sure yet`

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Thank you for reaching out. Your inquiry has been received by the REGOX engineering team.",
  "inquiryId": "inq_1791263908617_4lsdax",
  "timestamp": "2026-10-06T05:18:28.617Z"
}
```

---

## 6. Verification & Production Build

To test the production build of the frontend:
```bash
cd /Users/gourabghosh/Desktop/REGOX/frontend
npm run build
```
Build output is generated inside `dist/`.

---

## 7. Optional Production Configuration

The backend is pre-configured with a `.env.example` file. If you wish to connect a production email service provider (such as Resend, SendGrid, or AWS SES), you can add the corresponding credentials to `.env`:

```env
PORT=5001
NODE_ENV=production
CORS_ORIGIN=https://regox.agency
# SMTP_HOST=smtp.resend.com
# SMTP_PORT=587
# SMTP_USER=resend
# SMTP_PASS=re_xxxxxxxxx
```
