# 📘 Node.js Learning Topics

A structured list of topics to learn Node.js effectively.

---

## 🌱 Basics

- [ ] What is Node.js?
- [ ] Node.js Architecture (Event Loop, Single-threaded, Non-blocking I/O)
- [ ] Installing Node.js and NPM
- [ ] Running a Simple Script (`node app.js`)
- [ ] REPL (Read-Eval-Print Loop)

---

## 📁 Core Modules

- [ ] `fs` – File System
- [ ] `http` – HTTP Server
- [ ] `path` – Path Handling
- [ ] `events` – Event Emitter
- [ ] `os` – Operating System Info
- [ ] `stream` – Streams API
- [ ] `util` – Utilities
- [ ] `crypto` – Encryption/Decryption

---

## 📦 NPM & Package Management

- [ ] Understanding `package.json`
- [ ] Semantic Versioning
- [ ] Installing Dependencies (`npm i`)
- [ ] Local vs Global Packages
- [ ] Scripts (`npm run`)
- [ ] `npx` usage

---

## 📂 Modules and Imports

- [ ] CommonJS (`require`)
- [ ] ES Modules (`import/export`)
- [ ] Creating and Exporting Your Own Modules
- [ ] Built-in vs Third-party modules

---

## 🌐 HTTP & Web Servers

- [ ] Creating a Basic HTTP Server
- [ ] Handling Requests and Responses
- [ ] Working with Query Parameters
- [ ] URL Routing Manually

---

## ⚙️ Express.js Framework

- [ ] Installing and Setting Up Express
- [ ] Route Handling (`GET`, `POST`, etc.)
- [ ] Middleware Functions
- [ ] Error Handling
- [ ] Serving Static Files
- [ ] Creating REST APIs

---

## 🗄️ Working with Databases

- [ ] Connecting to MongoDB (Mongoose)
- [ ] Connecting to MySQL / PostgreSQL
- [ ] Performing CRUD Operations
- [ ] Using ORMs (Sequelize, TypeORM)

---

## 🛡️ Security & Validation

- [ ] Environment Variables with `dotenv`
- [ ] Input Validation with `Joi` or `express-validator`
- [ ] Authentication (JWT, Sessions)
- [ ] Hashing Passwords (`bcrypt`)
- [ ] Rate Limiting & Helmet

---

## 🧪 Testing & Debugging

- [ ] Console Debugging
- [ ] Using `debug` Module
- [ ] Unit Testing with `Mocha`, `Jest`
- [ ] API Testing with `Supertest`, `Postman`

---

## ⚙️ Advanced Topics

- [ ] Async/Await, Promises
- [ ] Event Emitters and Custom Events
- [ ] Streams and Buffers
- [ ] Clustering and Worker Threads
- [ ] Child Processes
- [ ] Building and Publishing NPM Packages

---

## 🚀 Deployment

- [ ] Preparing App for Production
- [ ] Using `pm2` for Process Management
- [ ] Hosting on Platforms (Heroku, Render, Vercel, VPS)
- [ ] Reverse Proxy with Nginx
- [ ] Dockerizing a Node.js App



# 📦 npm Command Reference

A quick reference guide for common npm commands used in JavaScript and Node.js development.

---

## 🔧 Basic Setup

| Command                        | Description                                      |
|-------------------------------|--------------------------------------------------|
| `npm init`                    | Create a `package.json` file interactively       |
| `npm init -y`                 | Generate `package.json` with default values      |
| `npm install` / `npm i`       | Install all project dependencies                 |
| `npm install <package>`       | Install a package and add to dependencies        |
| `npm uninstall <package>`     | Remove a package from `node_modules` and `package.json` |

---

## 📦 Package Management

| Command                                 | Description                                      |
|----------------------------------------|--------------------------------------------------|
| `npm install --save`                   | Add to `dependencies` (default for prod)         |
| `npm install --save-dev`               | Add to `devDependencies`                         |
| `npm install -g <package>`             | Install a package globally                       |
| `npm update`                           | Update all installed packages                    |
| `npm outdated`                         | Check for outdated packages                      |

---

## 🚀 Script Execution

| Command                | Description                        |
|------------------------|------------------------------------|
| `npm run <script>`     | Run a custom script from `package.json` |
| `npm start`            | Run the `start` script              |
| `npm test`             | Run the `test` script               |
| `npm run build`        | Run the `build` script              |

---

## 🧪 Testing & Auditing

| Command              | Description                              |
|----------------------|------------------------------------------|
| `npm audit`          | Scan for security vulnerabilities         |
| `npm audit fix`      | Automatically fix minor vulnerabilities   |
| `npm test`           | Run test scripts                          |

---

## 📂 Listing & Info

| Command               | Description                             |
|-----------------------|-----------------------------------------|
| `npm list`            | List local packages                     |
| `npm list -g`         | List global packages                    |
| `npm view <package>`  | Show details about a package            |

---

## 🧹 Maintenance

| Command                       | Description                         |
|-------------------------------|-------------------------------------|
| `npm prune`                   | Remove unused packages              |
| `npm cache clean --force`     | Force-clear npm cache               |

---

## 🔗 Helpful Links

- [npm Docs](https://docs.npmjs.com/)
- [npm Packages](https://www.npmjs.com/)
