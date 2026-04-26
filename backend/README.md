<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

# ✂️ Cortex Evolution - Backend API

## 📌 Visão Geral

API para gerenciamento de agendamentos de um salão de cabeleireiro, com foco em:

- Reserva de horários
- Gestão de barbeiros
- Autenticação segura
- Prevenção de conflitos de agenda

---

## 🧱 Stack Utilizada

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT (Authentication)
- Class-validator / Class-transformer
- Jest (E2E Testing)

---

## 🚀 Progresso do Projeto (Checklist)

---

### 🟢 Setup Inicial

- [x] Inicialização do projeto com NestJS CLI
- [x] Configuração do TypeScript
- [x] Estrutura modular (AppModule)
- [x] Configuração do Prisma
- [x] Conexão com PostgreSQL
- [x] Primeira migration

---

### 🟢 Autenticação (Auth)

- [x] Criação de usuário (register)
- [x] Hash de senha com bcrypt
- [x] Login com validação de credenciais
- [x] Geração de JWT
- [x] Proteção de rotas com AuthGuard

---

### 🟢 Domínio de Agendamentos

- [x] Criação de agendamentos
- [x] Normalização de horários (30 min)
- [x] Regra de conflito de horários
- [x] Bloqueio de horários passados

---

### 🟢 Multi-Barber (Escala)

- [x] Criação do model Barber
- [x] Relacionamento Barber → Appointment
- [x] Suporte a múltiplos barbeiros
- [x] Ajuste de regra de unicidade (@@unique[date, barberId])

---

### 🟢 Disponibilidade

- [x] Cálculo dinâmico de horários disponíveis
- [x] Filtro por barbeiro
- [x] Filtro por data
- [x] Exclusão de horários já ocupados

---

### 🟢 Validação e Padronização

- [x] DTO para entrada de dados
- [x] Validação com class-validator
- [x] Transformação com class-transformer
- [x] Validação de UUID
- [x] Validação de data (ISO)

---

### 🟢 Arquitetura e Padrões

- [x] Response Interceptor (padronização de resposta)
- [x] Exception Filter global
- [x] Logging Interceptor
- [x] Guards de autenticação

---

### 🟢 Autorização

- [x] Sistema de Roles (USER / ADMIN)
- [x] Roles Guard
- [x] Proteção de rotas por perfil

---

### 🟢 Segurança

- [x] Rate Limiting com Throttler
- [x] Proteção contra múltiplas requisições
- [x] Sanitização de dados

---

## 🧪 Testes E2E

---

### ✅ Testes Funcionando

- [x] Registro + Login (Auth flow)
- [x] Bloqueio de rota sem token (401)
- [x] Acesso com token válido

---

### ⚠️ Testes com Falha (para correção futura)

- [ ] Conflito de horário (double booking)
- [ ] Validação de DTO (dados inválidos)
- [ ] Disponibilidade de horários

---

## 🧠 Aprendizados Técnicos

- Diferença entre autenticação e autorização
- Uso correto de Interceptors vs Middleware
- Single Source of Truth em banco de dados
- Validação vs transformação de dados
- Importância de testes E2E
- Problemas reais com datas e timezone

---

## 🚧 Próximos Passos

- [ ] Corrigir testes E2E com falha
- [ ] Separar ambiente de teste (DB isolado)
- [ ] Implementar testes unitários adicionais
- [ ] Iniciar frontend com React
- [ ] Deploy (Docker + Cloud)

---

## 🏁 Status Atual

🟡 Backend funcional com validações e segurança
🔴 Testes E2E parcialmente instáveis
🟢 Arquitetura pronta para evolução

---

## 💡 Observação

Este projeto está sendo desenvolvido com foco em aprendizado profundo de arquitetura backend com NestJS, seguindo boas práticas de mercado.

---
