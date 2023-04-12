# Endpoints:

- Login: POST http://localhost:5000/api/users/login
  Entrada : {
    "username" : "tomy",
    "password" : "tomy"
  }
  Salida: {
    "userId": "810f8e0a-c7bb-11ed-afa1-0242ac120002",
    "username": "tomy",
    "password": "tomy",
    "email": "tomy@babel.com",
    "deposit": "500.00000"
  }
  
 - Get Users: GET http://localhost:5000/api/users/all
  Salida: Array de Objetos usuario
  
 - Create User : POST http://localhost:5000/api/users/add
 Entrada : {
    "username" : "Pablo",
    "password" : "sdasdaasdsad",
    "email" : "email",
    "fullName" : "Pablo Diaz",
    "birthDate" : "2025",
    "deposit" : 5898
  }
  Salida : Id del usuario

- Update user crypto: PUT http://localhost:5000/api/user-crypto/update
  Entrada: {
    "userId" : "810f918e-c7bb-11ed-afa1-0242ac120002",
    "cryptoId" :  "810f93b4-c7bb-11ed-afa1-0242ac120002",
    "amount" : 100
  }

  Salida: Id del usuario

- Create user crypto: POST http://localhost:5000/api/user-crypto/add
  Entrada: {
    "userId" : "810f918e-c7bb-11ed-afa1-0242ac120dw002",
    "cryptoId" :  "810f93b4-cwdw7bb-11ed-afa1-0242ac120002",
    "amount" : 0.2
  }
  Salida: Id del usuario

- Get cryptos by user: GET http://localhost:5000/api/user-crypto/get/810f8e0a-c7bb-11ed-afa1-0242ac120002
 Salida: array de CryptoUsers
 
 # Diagrama Base de datos
 
 ![image](https://user-images.githubusercontent.com/38212529/231605349-bf3da190-f504-4ba9-97c7-c594d9a46c4a.png)

  
  
