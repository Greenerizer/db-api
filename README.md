### Built With

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
<br><br>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Run this on your terminal.
* npm
  ```sh
  npm init
  ```
  
* express
  ```sh
  npm install express
  ```
  
* nodemon
  ```sh
  npm install --save-dev nodemon
  ```
  
* cors
  ```sh
  npm install cors
  ```
  
* dotenv
  ```sh
  npm install dotenv
  ```
  
* body-parser
  ```sh
  npm install body-parser
  ```
  
* mysql
  ```sh
  npm install mysql
  
  ```
  
## OR
* Using docker
  ```sh
  docker build
  ```
  
<br>

------------

## Credentials
Change your database credentials at <b>/models/dbconnection.js

<br>
	
## Port Setting
Change your desire port number at <b>.env

------------
<br>

## Routes

### Accessing database
### Trash
- URL
	- api/db/sampah
- Method
	- GET
- Response
	-	{
    	"idsampah": 1,
    	"jenis_sampah":"cardboard",
    	"deskripsi_sampah":" Karton adalah ..."
    	}

### Rewards
- URL
	- api/db/rewards
- Method
	- GET
- Response
	-    {
    "idreward": 1,
    "namareward":"Pulsa 1.000",
    "deskripsi":"Tukar pulsa 1.000 dengan menggunakan poin 1.000",
    "urlgambar":"https://storage.googleapis.com/capstone-c23-ps303-user_image_upload/Rewards/1000.png"
    }

### Location
- URL
	- api/db/lokasi
- Method
	- GET
- Response
	-	{
	"idlokasi":1,
	"namabanksampah":"Bank Sampah putri kabunan",
	"latitude":"-2.401183",
	"longitude":"116.543652"
	}
<br>
