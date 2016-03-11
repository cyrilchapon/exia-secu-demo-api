# Exia security demo - backend

## Contributing

This project was generated with [Sails](http://sailsjs.org)

One can contribute following [those guidelines](http://stackoverflow.com/questions/4384776/how-do-i-contribute-to-others-code-in-github)

Here's the [roadmap](ROADMAP.md)

In english

## Installation

- Install node.js
- [Install sails](http://sailsjs.org/get-started#?installation) locally
- Clone (or fork and clone) projet
- [`npm install`](https://docs.npmjs.com/cli/install)
- You're up & ready to rock

## APIs

The service exposes following APIs

- **User** :

  - **`GET /user/{id}`**
    
    **Access**: Open with auth token
    
    **Returns**: `200` or `403` or `404`
    
    **Response**:
    
    ```
    {
      id: 12,
      email: 'w.white@polloshermanos.us',
      surname: 'Walter',
      lastname: 'WHITE',
      createdAt: '2016-03-10T16:51:47.008Z',
      updatedAt: '2016-03-10T16:51:47.008Z'
    }
    ```
  
  - **`POST /user`**
    
    **Access**: Open with auth token
    
    ```
    {
      email: 'w.white@polloshermanos.us',
      surname: 'Walter',
      lastname: 'WHITE',
      password: '<3skyler'
    }
    ```
    
    **Returns**: `201` or `403` or `400`
    
    **Reponse**: created user, just as with a `GET`
  
  - **`PUT /user/{id}`**
    
    **Access**: Open with auth token
    
    ```
    {
      email: 'w.white@polloshermanos.us',
      surname: 'Walter',
      lastname: 'WHITE',
      password: 'theonewhoknocks'
    }
    ```
    
    **only required fields*
    
    **Returns**: `200` or `403` or `404` or `400`
    
    **Response**: updated user, just as with a `GET`
  
  - **`DELETE /user/{id}`**
    
    **Access**: Open with auth token
    
    **Returns**: `200` or `403` or `404`
    
    **Response**: deleted user is also returned just as with a `GET`

- **Auth**
  
  - **`POST /auth/signin`**
    
    **Access**: Open
    
    **Request**:
    
    ```
    {
      email: 'w.white@polloshermanos.us',
      password: 'theonewhoknocks'
    }
    ```
    
    **Returns**: `200` or `400` or `404`
    
    **Response**:
    
    ```
    {
      token: 'OiJzaHFkb3cifQ.255bI2f5F_GGrwc9avZP'
      user: {
        id: 12,
        email: 'w.white@polloshermanos.us',
        surname: 'Walter',
        lastname: 'WHITE',
        createdAt: '2016-03-10T16:51:47.008Z',
        updatedAt: '2016-03-10T16:51:47.008Z'
      }
    }
    ```
