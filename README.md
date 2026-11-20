- [My CV](#my-cv)
- [Development](#development)
- [File structure](#file-structure)
- [Scripts](#scripts)
- [Environment variables](#environment-variables)

# My CV

Next.js application

Main technologies - React, Typescript, TailwindCSS.

You can learn more in the [Next.js documentation](https://nextjs.org/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Development

1. With Node.js 22.22.1 or later, install dependencies from the project root:
   ```sh
   npm ci
   ```
2. Start development server:
   ```sh
   npm run dev
   ```
3. Build app:
   ```sh
   npm run  build
   ```

## File structure


```
./
├── api-lib/ - code related to Next.js API
├── pages/
├── public/
├── src/
│   ├── assets/
│   ├── config/
│   ├── features/ - files divided by feature (e.g. auth, home, profile...)
|   │   ├── ...
|   │   └── {feature}
|   │       ├── (api/)?
|   │       ├── (components/)?
|   │       ├── (hooks/)?
|   │       ├── (ts/)?
|   │       ├── (utils/)?
|   │       └── ... 
│   ├── hooks/ - shared hooks
│   ├── shared/ - shared components
│   ├── styles/
│   ├── types/ - all shared typescript types
│   ├── utils/
│   └── ...
├── ... - _other configuration files_.
├── package.json
├── package-lock.json
└── README.md
```

The root of project contains common configuration file like _.gitignore_, _.eslintrc.json_.

## Scripts

| Script       | Description                      |
|--------------|----------------------------------|
| `dev`        | start server in development mode |
| `build`      | build app                        |
| `analyze`    | run bundle analyzer              |
| `start`      | started built app                |
| `type-check` | run typescript types checking    |
| `format`     | run prettier                     |
| `lint`       | run eslint                       |
| `prepare`    | husky install                    |



## Environment variables

Set `DATABASE_URL` in `.env.local` to a reachable MongoDB database containing a CV document with `type: "current"`. The app loads the CV when a visitor requests the page. The build and version API can run without a database connection.

| VAR                 | Description         |
|---------------------|---------------------|
| `DATABASE_URL`      | mongodb url         |
| `NEXT_PUBLIC_GA_ID` | google analytics id |
