This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Current deployed url for you to test [HERE LINK](https://alma-fe-4ufq.vercel.app/)

## ALMA Take-home test repository

This is a frontend application built with Next.js

## Features
- Integration with API endpoints (I created small BE for this test)
- Easy setup with readable structure
- Used sass, css and css-in-js for styling but I prefer using ready to use libraries like tailwind and antd for forms and tables

## PAGES

| Pages  | Endpoint      | Description           |
|--------|---------------|-----------------------|
| 1      | /             | Lead form             |
| 2      | /dashboard    | Private Dashboard     |
| 3      | /login        | Login for internal ui |

## Requirements
Node.js >= 20.x
npm or yarn
Prisma CLI installed globally (optional)

## Main structures:
Followed best practices of Next.js 14

- src

```sh
/src
  │
  ├── public
  │   └── next.svg         # SVG files here
  │
  ├── src
  │   ├── assets           # Images, Styles, Icons
  │   └── app
  │       ├── internal     # Implemented middleware for securing private, internal pages
  │       └── public       # Public pages like login, leadform exists here
  │
  │   ├── components       # Common components (Sidebar, Header), UI (widget like small components like button, spinner ...)
  │   └── helpers
  │       ├── baseQuery           # BaseQuery for api call without auth
  │       └── baseQueryWithAuth   # BaseQuery for api call with re-auth and redirection
  │   └── store
  │       ├── commonApi     # CommonApi slices for public api call
  │       └── internalApi   # InternalApi slices for authorized api call with JWT token
  │   └── views
  │       ├── internal     # internal views for pages
  │       └── public       # public views for pages
  │
  └── README.md

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
