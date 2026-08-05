// Ambient declaration for global (non-CSS-Modules) stylesheet imports,
// e.g. `import '../styles/globals.css'` in src/app/layout.tsx.
// Next.js's own shipped types only cover *.module.css / .sass / .scss,
// so plain side-effect CSS imports need this declared explicitly.
declare module '*.css'
