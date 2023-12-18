(1) Root Level:

--package.json: This file contains metadata about your project and its dependencies. It includes information 
such as project name, version, dependencies, and scripts for tasks like starting the server or running tests.

--.env: This file is used to store environment variables. These variables can include sensitive information 
such as API keys, database credentials, etc. They are loaded into your Node.js application using a library 
like dotenv.

--Other files (README, git, lint, prettier, etc.): These files are typically used for documentation (README), 
version control (git), code linting (lint), and code formatting (prettier). They help maintain code quality 
and provide information about the project.


(2) --src (Source Code):
  |
  |--index.js: This file is likely the entry point of your application. It may contain code for setting up the server, 
  |  connecting to the database, and starting the application.
  |
  |--app: This directory seems to contain configuration files related to your application, such as settings for cookies, 
  |  URL encoding, etc.
  |--constants: This directory may store constant values used throughout your application, such as enums and database names.


(3) --Other Directories:
  |--DB: This directory could contain database-related files or scripts.
  |--Models: This directory likely holds data models or schemas for your application. These models define the structure 
  |   of your data and how it relates to other data.
  |--Controllers: The controllers directory is likely to contain the logic for handling different HTTP requests. 
  |  Each controller is responsible for a specific set of functionalities.
  |--Routes: This directory may store the route definitions for your application. It defines how different HTTP 
  |  endpoints map to specific controllers.
  |--Middlewares: Middlewares are functions that have access to the request and response objects. They can modify 
  |  the request, perform authentication, or execute other actions before reaching the route handler.
  |--Utils: Utilities or helper functions that are used throughout your application can be placed in this directory.
  |--More (depends): This directory could contain additional modules or components that your application depends on.

  ===================================================================================================================================

            [ORM & ODM]

ORM (Object-Relational Mapping) and ODM (Object-Document Mapping) are both programming techniques that allow 
developers to interact with databases using an object-oriented paradigm instead of traditional SQL queries. 
They are used to bridge the gap between the relational or document-oriented nature of databases and the 
object-oriented nature of programming languages.
--------------------------------------------------------------------------
ORM (Object-Relational Mapping):
ORM is primarily associated with relational databases. It provides a mechanism for converting data between 
incompatible type systems in object-oriented programming languages. 

In the context of databases:
Objects: Represent entities in the application code.
Relational Database: Represents data in tables with rows and columns.
ORM frameworks, such as Hibernate (for Java), Sequelize (for Node.js), or Entity Framework (for .NET), 
handle the translation between objects in the code and rows in the database. Instead of writing raw SQL 
queries, developers can interact with the database using programming language constructs.

Key Concepts:

Entities: Correspond to tables in the database.
Attributes: Represent columns in a table.
Relationships: Define associations between entities.
--------------------------------------------------------------------------
ODM (Object-Document Mapping):
ODM is associated with NoSQL databases, especially document-oriented databases like MongoDB. It performs a similar 
role to ORM but is tailored for the non-relational, schema-less nature of document databases.

Objects: Represent documents or records in the application code.
Document Database: Stores data in flexible, JSON-like documents.
ODM frameworks, such as Mongoose (for Node.js with MongoDB) or Morphia (for Java with MongoDB), provide a way to define 
schemas, model relationships, and perform CRUD (Create, Read, Update, Delete) operations on documents without directly 
dealing with MongoDB queries.

Key Concepts:

Documents: Correspond to records in the database.
Fields: Represent properties within a document.
Collections: Analogous to tables in relational databases.

  ===================================================================================================================================

