# qual.is

## Features

- Built with Next.js 15 and React 19
- Fully responsive design with Tailwind CSS
- Dark/Light theme support
- Markdown-based blog posts with gray-matter
- SEO optimized with next-seo
- Topic-based filtering
- Accessibility-first design
- Comprehensive test coverage (Unit + E2E)
- Type-safe with strict TypeScript
- Multi-browser E2E testing with Playwright
- CI/CD with GitHub Actions
- Pre-commit hooks for code quality

## Technology

### Core

- **Framework**: Next.js 15 (App Router)
- **React**: 19.0
- **TypeScript**: 5.5 (Strict mode)
- **Styling**: Tailwind CSS 3.4

### Testing

- **Unit/Component**: Vitest + React Testing Library
- **E2E**: Playwright (Chromium, Firefox, WebKit)
- **Coverage**: V8 (70% threshold)

### Code Quality

- **Linting**: ESLint with Next.js, TypeScript, React, and accessibility rules
- **Formatting**: Prettier
- **Pre-commit**: Husky + lint-staged
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development

### Available Scripts

#### Development

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
```

#### Code Quality

```bash
npm run lint         # Check formatting with Prettier
npm run lint:eslint  # Run ESLint checks
npm run format       # Auto-format code with Prettier
npm run type-check   # Run TypeScript type checking
npm run quality      # Run all quality checks
```

#### Testing

```bash
npm test                 # Run unit tests in watch mode
npm run test:unit        # Run unit tests once
npm run test:unit:watch  # Run unit tests in watch mode
npm run test:unit:ui     # Open Vitest UI
npm run test:coverage    # Generate coverage report
npm run test:e2e         # Run E2E tests
npm run test:e2e:ui      # Run E2E tests in UI mode
npm run test:e2e:debug   # Debug E2E tests
npm run test:e2e:report  # Show Playwright report
npm run test:all         # Run all tests
```

### Project Structure

```
www-qual-is/
├── _posts/              # Markdown blog posts
├── .github/
│   └── workflows/       # GitHub Actions CI/CD
├── .husky/              # Git hooks
├── e2e/                 # Playwright E2E tests
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── _components/ # React components
│   │   ├── posts/       # Post pages
│   │   ├── about/       # About page
│   │   ├── blog/        # Blog listing
│   │   └── layout.tsx   # Root layout
│   ├── interfaces/      # TypeScript interfaces
│   └── lib/             # Utility functions
├── vitest.config.ts     # Vitest configuration
├── playwright.config.ts # Playwright configuration
├── eslint.config.mjs    # ESLint configuration
└── tsconfig.json        # TypeScript configuration
```
