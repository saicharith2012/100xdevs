# Notes

## Databases
![alt text](image-2.png)

![alt text](image.png)

![alt text](image-1.png)

Backend servers are stateless, the data doesn't persist on them.
The database server is where the data is persisted.  
(Database servers could also be down, but their resiliance could be ensured by maintaining replicas of the data chunks on multiple servers.)  

Even if all the backend servers are down, the application could up whenever new servers are arranged, but if all the database servers are lost, everything is goneeeeeee........  

## MongoDB and NoSQL Databases

![alt text](image-3.png)  

For nested data (like in case of fetching one folder inside another folder inside another folder),
NoSQL databases are better suited than noSQL databases.  

![alt text](image-4.png)

But for most of the cases SQL databases are better suitable.  

![alt text](image-5.png)

schema ---> structure of the database

![alt text](image-6.png)

MongoDB here is schemaless.

![alt text](image-7.png)

MongoDB connection string to connect the cluster in the cloud.

![alt text](image-8.png)

## CRUD

![alt text](image-9.png)

![alt text](image-10.png)
