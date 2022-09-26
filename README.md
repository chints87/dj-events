### Developing CRUD application with Next.JS and Strapi

### Installation
Clone the Github repository from the following steps:
```
$git@github.com:chints87/ecommerce.git *name of folder*
$cd *name of folder*
```

1) Refer to [NextJS starter repository](https://github.com/chints87/Next-JS-starter-file.git) for initial setup.

2) Create a config folder and create an index.js file to refer the absolute path to fetch data from API.
```
export const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000';
