# Credit Card Validator

A credit card validator that uses React/Vite on client and Node/Express on server.

## Project Structure

Folder structure follows a monolith structure due to the simplicity of the project feature.

Basic structure follows:
```
/project-root
│
├── /client             # folder containing all client code
│   └── /src            # main src code for client side
│
├── /server             # folder containing all api/server code
│   ├── /middleware     # custome middleware functions
│   |── /routes         # all routes for feature
│   ├── /tests          # tests unit/functional
│   └── server.ts       # entry point of api
│
└── README.md           # project readme
```

## Getting Started

1. Install packages
```
npm ci 
```

2. Build application
```
npm run build 
```

3. Start application
```
npm run start 
```

4. Head to [http://localhost:5173/](http://localhost:5173/)