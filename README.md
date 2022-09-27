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

```

### Using [Strapi] (https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html) a Headless CMS service for data storage

1) In order to setup strapi, in the project folder
```
npx create-strapi-app *name of folder*
```

2) Select the quickstart option to complete installation.

3) Once installed, the service starts running and take the browser to a page with localhost:1337 

4) Over here, set up your account as a admin user

To start the application running again use the following commad
```
npm run develop
```

## Create a collection 

1) In the *Plugins* section, go to Content-type-builder.

2) Click *Create a new collection type*.

3) Give the collection name, and corresponding api endpoints will be created. 

4) Add the fields that make up the collection.

5) Once all fields are entered, click *Save* and wait for server to restart.

6) In the *Content-Manager* the collection type should be displayed and entries within it.

7) To add a record, select the *Collection* created and click on *Create new entry* button.

8) Upon adding the field values, click *Save* and then *Publish* to create a record in the collection. 

## Test api endpoint

1) In the *General* section go to *Settings*.

2) In *Users and Permissions*, click on *Roles* and then *Public*.

3) Click on the *Collection* created, and check on **Select all**

4) Open a new tab and type **'localhost:1337/api/*collection*'**, and you should see data recently
   published in the collection.


## Search Component

1) Create a form that takes in user input 

2) Upon submitting the form, the router pushes the application to the search page with
   the respective data obtained from the backend w.r.t the search term. 

   ```
    router.push(`/search?term=${term}`);
   ``` 
## Query parameters for Search (front-end)

1) Create a Search page in the pages folder

2) Ensure the path to be in the format `${API_URL}/api/surveys?[filters][projectArea][$contains]=${term}`, 
   where projectArea is the field in the surveys collection and $contains is an operator

3) The term parameter is extracted from the context object. 
