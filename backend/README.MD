- install prisma
  ```npm install @prisma/client
npm install prisma --save-dev```
- initialize prisma
  ```npx prisma init```

- install dependencies
  ```npm install pg
npm install @prisma/adapter-pg
```
- convert models into postgresql database tables:
```npx prisma migrate dev --name init
```
- to seed database with data from prisma/seed.js
  ```npx prisma db seed -- --preview-feature
  ```

  2. Google Maps API 
      - enable google maps geocoding api
      - enable google maps javascript api
      - generate key 
      - add key to .env 
  
  3. Install PostGIS for adding nearby search 
     1. run following command in Postgresql database - add support for geographic queries 
    ```sql
        CREATE EXTENSION IF NOT EXISTS postgis;
        ```
    2. Modify your prisma/schema.prisma to store latitude and longitude as PostGIS point data: