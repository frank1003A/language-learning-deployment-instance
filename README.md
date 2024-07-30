# Language Learning AI Game

## Overview

Welcome to the Language Learning AI Game! This repository contains the source code for our interactive language learning game.

## Introduction

The Language Learning AI Game aims to create an engaging and effective language learning experience through interactive 3D games and advanced AI technology. Our goal is to make language acquisition enjoyable for users of all ages and backgrounds.

## Features

- Interactive Dialogues with 3D Avatars: Practice speaking with avatars and receive real-time feedback on grammar and pronunciation.

- Dramatic Storylines: Immerse yourself in engaging storylines with customizable quests like adventure, mystery, or romance.

- Cultural Insights: Learn idiomatic expressions and cultural nuances while progressing through the game.

## Installation

In order to run this app locally, you should have the following programs installed on your computer:

- [nodejs](https://nodejs.org/) >= 20.0.0
- [pnpm](https://yarnpkg.com/) >= 9.4.0


To get started with the project, follow these steps:
#### Clone this repository

```
git clone https://github.com/hngprojects/language_learning_fe.git
cd language_learning_fe
```

#### Install dependencies

```
pnpm install
```

#### Start the server

```
pnpm dev
```

Open ``` http://localhost:3000 ``` with your browser to see the result.

## Access Style Guides and Components
Open ``` http://localhost:3000/guides ``` to see the components and style guides available for you.

## Usage

Once the development server is running, you can start exploring the game and developing new features. The main entry point of the application is ``` (landing-routes)/(home)/pages.tsx ```.

### Project Structure
public
│
├── admin-dashboard
├── email
├── games
├── home
├── images
├── logo
├── passwordCriteria
├── product
├── signup
│
├── 404.gif
├── next.svg
└── vercel.svg

src
│
├── app
│   ├── auth-routes
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   ├── forgot-password.tsx
│   │   └── reset-password.tsx
│   │
│   ├── landing-routes
│   │   ├── index.tsx (Landing Page)
│   │   ├── about.tsx
│   │   ├── pricing.tsx
│   │   ├── help.tsx
│   │   ├── legal
│   │   │   ├── privacy-policy.tsx
│   │   │   └── terms-and-conditions.tsx
│   │   └── trial
│   │       ├── index.tsx (Squeeze Page)
│   │       ├── waitlist.tsx
│   │       └── refer.tsx
│   │
│   ├── guides
│   │   ├── getting-started.md
│   │   ├── faq.md
│   │   └── troubleshooting.md
│   │
│   ├── dashboard
│   │   ├── index.tsx
│   │   ├── profile.tsx
│   │   ├── settings
│   │   │   ├── profile.tsx
│   │   │   ├── account-security.tsx
│   │   │   ├── payment-information.tsx
│   │   │   ├── notification.tsx
│   │   │   └── data-and-privacy.tsx
│   │   │
│   │   ├── products
│   │   │   ├── index.tsx
│   │   │   ├── add.tsx
│   │   │   └── [id].tsx
│   │   │
│   │   ├── analytics.tsx
│   │   └── subscriptions.tsx
│   │
│   ├── admin
│   │   ├── index.tsx (Admin Dashboard)
│   │   ├── users.tsx
│   │   ├── email-templates.tsx
│   │   ├── settings.tsx
│   │   └── waitlist.tsx
│   │
│   ├── game
│   │   ├── index.tsx (Game Home)
│   │   ├── quest.tsx
│   │   ├── delve.tsx
│   │   ├── progress.tsx
│   │   └── [stage].tsx (Dynamic Route for Game Stages)
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
│
├── components
│   ├── common
│   │   ├── Button
│   │   │   └── button.tsx
│   │   ├── Modal
│   │   │   └── modal.tsx
│   │   └── Navbar
│   │       └── navbar.tsx
│   │
│   ├── game
│   │   ├── GameCard.tsx
│   │   ├── GameStats.tsx
│   │   └── GameOverlay.tsx
│   │
│   ├── admin
│   │   ├── AdminNavbar.tsx
│   │   ├── UserCard.tsx
│   │   └── Graph.tsx
│   │
│   ├── landing
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── Testimonials.tsx
│   │
│   └── forms
│       ├── LoginForm.tsx
│       ├── SignupForm.tsx
│       └── PasswordResetForm.tsx
│
├── fonts
│   ├── Inter
│   └── LilitaOne
│
├── hooks
│   ├── useAuth.ts
│   ├── useGameProgress.ts
│   └── useFetch.ts
│
├── lib
│   ├── firebase.ts
│   ├── api.ts
│   └── utils.ts
│
└── test
    ├── auth.test.ts
    ├── game.test.ts
    └── utils.test.ts


### Scripts
- ```pnpm dev```: Runs the development server.
- ``` pnpm build ```: Builds the application for production.
- ``` pnpm lint ```: Runs ESLint to check for linting errors.

## Contributing
Read our [contributing guide](./CONTRIBUTING.md)  to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to the Learning Language AI Game.