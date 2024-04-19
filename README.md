# Monorepo for Restaurants List App

This monorepo contains the codebase for a Restaurants List application developed as part of a technical assessment. The project consists of a RESTful API built with Node.js for managing restaurant data, and a Next.js frontend application for displaying and interacting with the restaurant information.

## Technologies Used

**General:**

- commitlint/cli: Command-line interface for commitlint, which checks if your commit messages meet the conventional commit format.
- commitlint/config-conventional: Configuration for commitlint that defines the conventional commit format rules.
- husky: Git hooks manager that allows you to run scripts at various points in the Git workflow. It's commonly used to enforce commit message conventions and run tests before allowing commits.

**[Server:](server/README.md)**

- Express: Web application framework for Node.js.
- Axios: Promise-based HTTP client for making HTTP requests from the frontend.
- Bcrypt: Library for hashing passwords.
- Body-parser: Middleware for parsing incoming request bodies.
- Cookie-parser: Middleware for parsing cookies.
- Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.
- Dotenv: Module for loading environment variables from a .env file.
- Jsonwebtoken: Library for generating and verifying JSON Web Tokens (JWT).
- Morgan: HTTP request logger middleware for Node.js.
- Multer: Middleware for handling multipart/form-data, primarily used for file uploads.
- Nodemon: Utility for automatically restarting the Node.js application when file changes are detected (development dependency).

**[Client:](client/README.md)**

- Next.js: React framework for building server-side rendered (SSR) and statically generated web applications.
- Leaflet: Open-source JavaScript library for interactive maps.
- Autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes automatically.
- Eslint: Pluggable linting utility for JavaScript and JSX.
- Eslint-config-next: Eslint configuration for Next.js projects.
- Postcss: Tool for transforming CSS with JavaScript plugins.
- Tailwindcss: Utility-first CSS framework for rapidly building custom designs.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/PMFrancisco)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/franciscopm/)
