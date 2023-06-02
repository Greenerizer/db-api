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
<br>

### Rewards
- URL
	- api/db/rewards
- Method
	- GET
- Response
	-    {
    "idreward": 1,
    "namareward":"pulsa",
    "deskripsi":"pulsa adalah ...",
    "urlgambar":"https://www.youngontop.com/wp-content/uploads/2019/03/spongebob.jpg"
    }
