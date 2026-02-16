# TechStack Conference Website

This is the frontend codebase for the TechStack Conference website, a modern, high-performance web application built with React 19, TypeScript, and Vite.

## Project Overview

- **Purpose**: A platform for conference information, session catalog, registration, and attendee engagement.
- **Core Technologies**:
  - **Framework**: React 19 (using `Suspense` and `lazy` for performance).
  - **Type Safety**: TypeScript (strict mode enabled).
  - **Build Tool**: Vite 7 (optimized with manual chunking for vendors).
  - **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss`.
  - **Animations**: Framer Motion.
  - **Routing**: React Router 7.
  - **Testing**: Vitest with React Testing Library and JSDom.
  - **Icons**: Lucide React.

## Building and Running

| Action | Command |
| :--- | :--- |
| **Development** | `npm run dev` |
| **Build** | `npm run build` |
| **Test** | `npm test` |
| **Lint** | `npm run lint` |
| **Preflight** | `npm run preflight` (Lint + Test + Build) |
| **Preview** | `npm run preview` |

## Development Conventions

- **Component Structure**: Follow a modular design. Place reusable UI components in `src/components` and top-level views in `src/pages`.
- **Styling**: Use utility-first CSS with Tailwind CSS. Avoid custom CSS unless absolutely necessary (manage via `src/index.css`).
- **Data Management**: Static data for features and sessions is stored in `src/data`. Ensure all data structures adhere to the defined interfaces.
- **Performance**: Use lazy loading for all page components via `src/lazyLoad.ts`.
- **Testing**: 
  - Every major component and page should have a corresponding `.test.tsx` file.
  - Use `vitest` for running tests and `@testing-library/react` for component rendering.
- **Linting**: Adhere to the ESLint rules defined in `eslint.config.js`.

## Architecture Details

- **Layout**: The `Layout` component wraps all pages to provide consistent navigation and footer.
- **Routing**: Routes are defined in `App.tsx`.
- **State**: Currently uses local component state and props.
- **Backgrounds**: Uses `ParticleBackground` for a modern, tech-focused visual feel.
