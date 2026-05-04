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

## ⚙️ Tecnologias e Arquitetura

### 🧱 Stack Principal

- **Backend:** NestJS, Prisma ORM, PostgreSQL
- **Frontend:** React, TailwindCSS, Framer Motion
- **Segurança:** JWT (ready for auth), Throttler (rate limit)

### 📦 Módulos do Backend

- **UsersModule:** Gestão de usuários e estrutura de autenticação
- **AuthModule:** Implementação de login via JWT
- **BarbersModule:** Gerenciamento de barbeiros e relações
- **PublicAppointmentsModule ⭐:** Feature principal de agendamento público (sem login)

---

## 🗃️ Database Schema (Prisma)

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

---

## 🔌 API Endpoints

### 📅 Consultar Horários Disponíveis

`GET /public/appointments/available`

**Query Params:**

| Param      | Tipo   | Descrição              |
| :--------- | :----- | :--------------------- |
| `date`     | string | Formato: `YYYY-MM-DD`  |
| `barberId` | string | UUID do barbeiro       |

**Response:**

```json
["09:00", "09:30", "10:00"]
```

### 📌 Criar Agendamento

`POST /public/appointments`

**Body:**

```json
{
  "guestName": "João",
  "guestPhone": "11999999999",
  "barberId": "uuid-do-barbeiro",
  "date": "2026-05-25T09:00:00.000Z"
}
```

---

## 🧠 Regras de Negócio & Lógica

- **Slot Management:** Arredondamento de horários a cada 30 minutos
- **Validação Temporal:** Bloqueio de agendamentos em datas passadas
- **Prevenção de Conflitos:** Validação de slot ocupado para evitar double-booking
- **UX Premium:** Feedback visual de loading, erro e sucesso em tempo real

---

## ⚠️ Desafios Técnicos Solucionados

| Problema                       | Solução Implementada                                                                      |
| :----------------------------- | :---------------------------------------------------------------------------------------- |
| **ERR_STREAM_PREMATURE_CLOSE** | Downgrade estratégico para Prisma 5.10.0 e Node 20 para estabilidade em Mac Silicon      |
| **ERR_UNSAFE_PORT (6666)**     | Migração para a porta 7777 para evitar bloqueios nativos do Chrome/Safari                 |
| **P1012 (Schema Validation)**  | Ajuste do `datasource` para leitura via `env("DATABASE_URL")` e bypass do config moderno |
| **Slots.map error**            | Garantia de tipagem e fallback de array vazio no retorno da API                           |

---

## 🚀 Como Rodar

### 1. Clone o repositório

```bash
git clone <link-do-repo>
```

### 2. Backend

```bash
cd backend
npm install
# Configure o .env com a DATABASE_URL
npx prisma generate
npm run start:dev
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🚧 Next Steps

- [ ] Sistema completo de autenticação (Dashboard Admin)
- [ ] Cancelamento de agendamentos via token único
- [ ] Notificações via WhatsApp/E-mail
- [ ] Deploy automatizado (Vercel + Railway)

---

## 💬 Conclusão

Este projeto demonstra a integração real entre Frontend, Backend e Banco de Dados, cobrindo desafios de arquitetura, segurança e regras de negócio complexas. É uma base pronta para produção e escalável.

---

<p align="center">Made with 💻, ☕ and a bit of chaos.</p>
