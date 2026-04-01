# REST Countries

A modern web application that displays detailed information about countries from around the world using the [REST Countries API](https://restcountries.com/). Built with React, TypeScript, and Tailwind CSS for a responsive and engaging user experience.

## Features

- 🌍 Browse information about all countries in the world
- 🔍 Search for countries by name
- 🏷️ Filter countries by region
- 📊 View detailed country statistics including:
  - Population, area, and capital
  - Languages and currencies
  - Borders and time zones
  - Regional information
- 🌓 Dark mode support
- 📱 Fully responsive design
- ⚡ Fast and optimized performance with Vite

## Tech Stack

- **Frontend Framework**: [React 19](https://react.dev)
- **Language**: [TypeScript 5.9](https://www.typescriptlang.org)
- **Build Tool**: [Vite 8](https://vitejs.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Routing**: [React Router 7](https://reactrouter.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Linting**: [ESLint 9](https://eslint.org)

## Project Structure

```
src/
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
├── index.css              # Global styles
├── components/            # Reusable React components
├── pages/                 # Page components for different routes
└── context/               # React Context for state management
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Diyor-Khasanov/REST-countries.git
cd REST-countries
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the Vite development server with HMR (Hot Module Replacement)
- `npm run build` - Build the application for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Configuration Files

- **tsconfig.json** - Base TypeScript configuration
- **tsconfig.app.json** - Application-specific TypeScript settings
- **tsconfig.node.json** - Build tool TypeScript configuration
- **vite.config.ts** - Vite build configuration
- **eslint.config.js** - ESLint rules and configuration

## Development

### Hot Module Replacement (HMR)

The application is configured with Vite's HMR support, allowing you to see changes instantly in the browser without a full page reload during development.

### Code Quality

ESLint is configured to maintain code quality and consistency. Run the linter with:
```bash
npm run lint
```

### TypeScript Support

Full TypeScript support ensures type safety throughout the application. The project uses modern TypeScript features with strict type checking enabled.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will:
1. Compile TypeScript files
2. Bundle and minify the code
3. Generate optimized assets in the `dist/` directory

Preview the production build locally:
```bash
npm run preview
```

## API

This project uses the [REST Countries API](https://restcountries.com/) v3.1 to fetch country data. The API provides comprehensive information about countries without requiring authentication.

## Browser Support

The application is optimized for modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/docs)
- [REST Countries API](https://restcountries.com/)

## Author

[Diyor Khasanov](https://github.com/Diyor-Khasanov)

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/Diyor-Khasanov/REST-countries/issues).