# Postgres and NoSQL Databases

## Types of Databases

### NoSQL Databases

![alt text](image.png)

![alt text](image-1.png)

In Nodejs backends with MongoDB as database, we enforce a schema on data at the nodejs level using mongoose (to avoid putting wrong fields in the data i.e. safe data storage), but the data inside MongoDB is still schemaless.

![alt text](image-2.png)

### Graph Databases

![alt text](image-3.png)

![alt text](image-4.png)

### Vector Databases

![alt text](image-5.png)

![alt text](image-6.png)

### SQL Databases

- The databases that can be queried using the Structured Query Language (SQL).

![alt text](image-7.png)

![alt text](image-8.png)

## Why not NoSQL?

![alt text](image-9.png)

### What is Schemaless?

Different rows can have different **schema** (keys/types).

![alt text](image-10.png)

![alt text](image-11.png)

![alt text](image-12.png)

![alt text](image-13.png)

## Why SQL?

![alt text](image-14.png)

![alt text](image-15.png)

As the application grows, when the schema of the database needs to be changed, migrations need to be performed.

![alt text](image-16.png)

![alt text](image-17.png)

## Creating a Database

![alt text](image-18.png)

## Using a library that let's you connect and put data in it

![alt text](image-19.png)

## Creating a table and defining it's schema

### Tables in SQL

![alt text](image-20.png)

![alt text](image-21.png)

![alt text](image-23.png)

![alt text](image-24.png)

The below insertion doesn't work since, the data object is violating the predefined schema for the relation in the database. (username field missing.)

![alt text](image-22.png)

> In postgres, when an invalid is record is entered, despite of throwing a warning and not saving the record, the db still increments the "SERIAL" field, such that, there will be jump by one value in that field for the next valid record created.

## Interacting with the database

### 1. INSERT

![alt text](image-25.png)

### 2. UPDATE

![alt text](image-26.png)

### 3. DELETE

![alt text](image-27.png)

### 4. SELECT

![alt text](image-28.png)

## How to do queries from a Node.js app?

![alt text](image-29.png)

![alt text](image-30.png)

## SQL Injections

In SQL Injections, an attacker tries to insert their own SQL query snippet into the query parameters that are being loaded into the query of a request handler. Thus creating a whole new query, that might cause some unexpected changes at the database level. (potentially deleting all the data in the relations upon which the query is being executed on.)

This is highly possible **when the values are being appended to the SQL query string**.

![alt text](image-31.png)

![alt text](image-33.png)

**To avoid SQL injections, the values can be passed as an array of arguments separately** so that, the postgres db will receive the query as is, and the db will be responsible for loading the values into the query while executing it exactly as it arrived. (the db will not change the query no matter how the values are formatted, thus treating them only as string values that need to be entered into the database)

![alt text](image-32.png)

![alt text](image-34.png)