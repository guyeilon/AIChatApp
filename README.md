# Starter React-Vite Boilerplate

This is a starter boilerplate for React + Vite with:

- [TypeScript](https://www.typescriptlang.org/).
- [ESLint](https://eslint.org/) (Code style guides - [AirBnB](https://github.com/airbnb/javascript), [React Hooks](https://reactjs.org/docs/hooks-rules.html), [Absolute imports resolver](https://www.npmjs.com/package/eslint-import-resolver-typescript)).
- [Prettier](https://prettier.io/) (Code formatting).
- [Husky](https://typicode.github.io/husky/#/), [Commitlint](https://commitlint.js.org/#/), [Lint-staged](https://github.com/okonet/lint-staged) (Git Hooks + [Angular commit style guide](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)).
- [React-Query](https://react-query.tanstack.com/) (API calls hooks).
- [Axios](https://axios-http.com/) (HTTP Client).
- [styled-components](https://styled-components.com/) (Styling).
- [React Router (V6)](https://reactrouter.com/) (Client-side routing).
- [Redux-Toolkit](https://redux-toolkit.js.org/) (State Management).
- [Storybook](https://storybook.js.org/) (Design System).
- [React-i18next](https://react.i18next.com/) (Internationalization).
- [Vitest](https://vitest.dev/) (Unit tests framework)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/) (DOM testing).
- [React Google Login](https://github.com/anthonyjgrove/react-google-login)
- [React Facebook Login](https://github.com/keppelen/react-facebook-login)

## Installation:

- Clone and npm i.
- Run `cp .env.example .env` to create a .env file for environment variables (use PS on windows).
- Run `npm run dev`.
- Navigate to `localhost:3000`.

## Authentication

This starter implements a basic social login with Facebook and Google, it implemented based on a Django REST Auth mechanism, but can be adjusted depending on the relevant backend.
You should add your google and facebook credentials in the `.env` file in order to make it work.

## Style Guides

- Javascript/React: [AirBnB](https://github.com/airbnb/javascript).
- Commit Message Format: [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

## Folder Structure:

```
src
├── api
│     ├── client.ts                             # API client factory
│     ├── types.ts                              # API global types
│     ├── utils.ts                              # API utilities
│     └── clients                               # API clients declaration
│           └── <client>
│                 ├── client.ts                 # API instance
│                 ├── methods.ts                # API endpoint methods
│                 ├── params.ts                 # API query params definitions
│                 ├── payload.ts                # Request payload type definitions
│                 ├── response.ts               # Responses type definitions
│                 └── transform.ts              # Response transform functions
├── app
│     ├── app.tsx                               # App entry file
│     ├── ErrorBoundary.tsx                     # Error boundary
│     └── Providers.tsx                         # App providers wrapper
├── assets                                      # Assets folder
├── components
│       └── <ComponentName>
│               ├── ComponentName.tsx           # Component declaration
│               ├── ComponentName.stories.tsx   # Storybook templates
│               ├── ComponentName.test.tsx      # Unit tests
│               └── package.json                # Main file declaration for neat imports
├── constants                                   # App config & constants
├── contexts                                    # React context declarations
├── hooks                                       # Custom hooks
├── i18n                                        # Internationalization
├── icons                                       # SVG to JSX generated icons
├── mocks                                       # Mock data for testing
├── models                                      # Internal app models declaration
├── providers                                   # Routing providers
├── routes                                      # routing
│     ├── Routes.tsx                            # Routing tree declaration
│     └── paths.tsx                             # route paths
├── screens                                     # App screens
│       └── <ScreenName>
│                 ├── Screen.tsx                # Screen declaration
│                 ├── Screen.test.tsx           # Unit tests
│                 ├── <Nested>                  # Nested routes/screen-specific components
│                 └── package.json              # Main file declaration for neat imports
├── store
│     ├── index.ts                              # Store declaration
│     ├── reducers
│     │      ├── index.ts                       # Exports combined reducer
│     │      └── <reducerName.reducer>.ts
│     ├── selectors                             # Selectors folder
│     │      └── <reducerName.selector>.ts      # Name should be related to reducer name
│     ├── hooks.ts                              # Typed React Redux hooks (useSelector, useDispatch)
│     └── Provider.tsx                          # Redux store provider (handy for unit testing)
├── styles
│     ├── index.ts                              # Global styles
│     ├── shared.ts                             # Shared styled components
│     ├── theme.ts                              # styled-components theme
│     └── Provider.tsx                          # styled-components theme provider
└── utils                                       # Utility functions


```

## Available Scripts

- `dev`: Run dev server
- `build`: Run build (will be outputted into `dist` directory)
- `serve`: Serve a preview of the production build (not optimized for production use, just for preview)
- `test`: Run vitest unit tests (watch mode)
- `test:run`: Run vitest unit tests (do not watch)
- `lint`: Run ESLint on the entire project
- `format`: Run Prettier code formatting on the entire project
- `isready`: Run format, lint, type-check, build and tests at once
- `generate-icons`: Generate JSX components from all the icons from the `assets/icons` directory (the output will be accessible in the `icons` directory
- `storybook`: Run storybook design system
# AIChatApp

# 🧠 AI Chat Gallery App

A React + Redux Toolkit app that features an OpenAI-powered chatbot and a gallery of selectable images from [picsum.photos](https://picsum.photos). Users can pick images from the gallery and attach them to chat messages.

---

## 🚀 Getting Started

### 1. Clone the repository

2. Install dependencies
npm install
# or
yarn install

🔐 Set Up OpenAI API

You’ll need an OpenAI API key to use the chat feature.

1. Create a .env file at the root of the project:
touch .env

2. Add your OpenAI API key:
VITE_OPENAI_API_KEY=your_openai_api_key_here


You can get a key from https://platform.openai.com/account/api-keys

🧪 Run the App
npm run dev
# or
yarn dev


Open your browser and go to http://localhost:5173

📂 Project Structure
src/
├── components/         # Reusable components (ChatMessage, ImageMessage, etc.)
├── screens/            # Chat and Gallery screens
├── store/              # Redux slices and root store
├── utils/              # Utility functions (e.g., fetchImages.ts)
├── types/              # TypeScript interfaces
├── routes/             # Route definitions
├── App.tsx             # App setup and route rendering
└── main.tsx            # Root render with Provider and Router

🧩 Features

🔥 React + Vite + TypeScript

🤖 OpenAI chat integration (GPT)

🖼️ Gallery from picsum.photos

✅ Select and attach images to the chat

🧰 State management with Redux Toolkit

🎨 UI with MUI and Styled-components

📌 Notes

Selected images are managed in Redux (myImages slice).

You can extend support for uploads or backend storage.

The app uses a <Layout> component with a basic nav bar for navigation between Chat and Gallery screens.