# 💈 Barbershop Booking System

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Backend-NestJS-red?style=for-the-badge&logo=nestjs" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL-blue?style=for-the-badge&logo=postgresql" />
  <img src="https://img.shields.io/badge/ORM-Prisma-black?style=for-the-badge&logo=prisma" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Animations-FramerMotion-black?style=for-the-badge&logo=framer" />
  <img src="https://img.shields.io/badge/Language-TypeScript-blue?style=for-the-badge&logo=typescript" />
</p>

---

## 📌 Overview

Fullstack barbershop booking system focused on **premium user experience** and **real-time scheduling**.

Users can book appointments **without authentication**, selecting:

- Barber
- Date
- Available time slot

---

## ⚙️ Backend

### 🧱 Stack

- NestJS
- Prisma ORM
- PostgreSQL
- JWT (ready for auth)
- Throttler (rate limit)
- Global Pipes, Guards, Interceptors

---

### 📦 Modules

#### 🔹 UsersModule

- User management
- Auth structure

#### 🔹 AuthModule

- JWT login

#### 🔹 BarbersModule

- Barber management
- Relation with appointments

#### 🔹 Appointments (Private)

- Protected bookings (JWT)

#### 🔹 PublicAppointmentsModule ⭐

- Booking **without login**
- Main feature

---

### 🗃️ Database (Prisma)

```prisma
model Appointment {
  id          String   @id @default(uuid())
  date        DateTime @unique

  guestName   String?
  guestEmail  String?
  guestPhone  String?

  userId String?
  user   User? @relation(fields: [userId], references: [id])

  barber   Barber @relation(fields: [barberId], references: [id])
  barberId String

  createdAt DateTime @default(now())
}

```

✔️ Highlights
Supports authenticated and guest users
Prevents double booking
Clean relational structure
🔌 API Endpoints
📅 Get Available Slots
GET /public/appointments/available

Query:

date=YYYY-MM-DD
barberId=UUID

Response:

["09:00", "09:30", "10:00"]
📌 Create Appointment
POST /public/appointments

Body:

{
"guestName": "João",
"guestPhone": "11999999999",
"barberId": "uuid",
"date": "2026-05-25T09:00:00.000Z"
}
🧠 Business Rules
30-minute slot rounding
No past bookings
Slot conflict validation
Same-day time filtering
Rate limiting
Global error handling
🎨 Frontend
🧱 Stack
React
TypeScript
TailwindCSS
Framer Motion
React DatePicker
🧩 Main Component

BookingSection.tsx

Handles the entire booking experience.

🔄 User Flow
Select barber
Choose date
Fetch available slots
Select time
Enter name & phone
Click Reserve
Booking created
UI updates automatically
🔌 API Integration
Get slots
getAvailableSlots(date, barberId)
Create booking
createPublicAppointment({
guestName,
guestPhone,
barberId,
date,
});
📅 Date Handling
Library: react-datepicker
Locale: pt-BR
Display: dd/MM/yyyy
Backend format:
toLocaleDateString("en-CA") // YYYY-MM-DD
🧠 State Management
selectedBarber
date
slots
selectedSlot
guestName
guestPhone
loading
loadingBooking
error
success
barbers
🎯 Features
Dynamic barber loading
Real-time slot availability
Conflict prevention
Loading & error feedback
Auto refresh after booking
Responsive UI
Premium UX
⚠️ Challenges Solved
Issue Solution
404 errors Fixed route mismatch
400 errors Correct UUID usage
500 errors Data validation
slots.map error Ensured array response
Connection refused Backend not running
DatePicker locale Fixed with date-fns
📈 Current Status

✔️ Backend fully functional
✔️ Public booking working
✔️ Frontend integrated
✔️ Full booking flow completed
✔️ Modern UI implemented

🚧 Next Steps
Full authentication system
Admin dashboard
Booking cancellation
Notifications (WhatsApp / Email)
Schedule management panel
Deployment (Vercel + Railway)
💬 Conclusion

This project delivers a complete booking system with:

Real frontend/backend integration
Business logic implementation
Scalable architecture
Production-ready foundation
🚀 Final Note

This project covers one of the hardest parts of real-world development:

👉 Connecting frontend + backend + database reliably

Which already puts it beyond basic tutorial-level applications.

<p align="center"> Made with 💻, ☕ and a bit of chaos. </p> ```
