# Copilot Instructions for js-lesson-15

## Project Overview
This is a React lesson project (Create React App) demonstrating core React concepts: functional components, class components, and component composition. The app serves as an educational resource, not a production application.

## Architecture & Component Structure

**Key Components:**
- `App.js`: Root component that composes `FunctionComponent` and `ClassComponent` to demonstrate both patterns
- `FunctionComponent.js`: Arrow function component displaying static JSX (`<h1>Learn React</h1>`)
- `ClassComponent.js`: Class-based component using constructor and state (state: `{ name: "Enjoy" }`)
- `index.js`: Entry point using React 19.2.3 with StrictMode for development warnings

**Data Flow:**
Class components manage local state via `this.state` initialized in constructor. Function components are stateless (before hooks). No external data sources or service layers—this is a demonstration of component patterns.

## Development Workflow

**Core Commands:**
- `npm start`: Runs development server on localhost:3000 with hot reloading
- `npm test`: Launches Jest test runner (interactive watch mode)
- `npm run build`: Creates optimized production bundle in `build/` folder
- `npm run eject`: One-way operation exposing webpack/Babel config (avoid unless necessary)

**Testing Stack:** @testing-library/react v16.3.2 with Jest runner

## Code Patterns & Conventions

**Component Patterns:**
- **Functional Components**: Use arrow functions, keep simple, no lifecycle methods (Lesson 15 doesn't use Hooks)
- **Class Components**: Use `extends Component`, initialize state in constructor with `super(props)`, render JSX in `render()` method
- **JSX Rules**: Always return single root element; use `className` not `class` for CSS

**Styling:** CSS files co-located with components (`App.css` for App, `index.css` for global). ESLint extends `react-app` preset.

**Module Exports:** Use `export default ComponentName` for components; CommonJS-style imports

## Critical Notes for AI Agents
- **No Hooks**: This is a fundamentals lesson using only class and function components—don't suggest useState, useEffect
- **Minimal Complexity**: Focus on explaining component composition and rendering logic
- **Educational Purpose**: Suggestions should clarify React concepts, not add production features
- **React 19**: Version includes latest stability improvements; use modern JSX patterns

