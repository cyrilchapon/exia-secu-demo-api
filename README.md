# Exia security demo - backend

## Contributing

This project was generated with [Sails](http://sailsjs.org)

One can contribute following [those guidelines](http://stackoverflow.com/questions/4384776/how-do-i-contribute-to-others-code-in-github)

Here's the [roadmap](ROADMAP.md)

In english

## APIs

The service exposes following APIs

- **User** :

  - **`GET /user/{id}`**
    
    Access: Open with auth token
    
    Returns: `200` or `403` or `404`
    ```
    {
      id: 12,
      email: 'w.white@polloshermanos.us',
      surname: 'Walter',
      lastname: 'WHITE'
    }
    ```
  
  - **`POST /user`**
    
    Access: Open with auth token
    
    ```
    {
      email: 'w.white@polloshermanos.us',
      surname: 'Walter',
      lastname: 'WHITE',
      password: '<3skyler'
    }
    ```
    
    Returns: `201` or `403` or `400`
    
    **created user is also returned just as with a `GET`*
  
  - **`PUT /user/{id}`**
    
    Access: Open with auth token
    
    ```
    {
      email: 'w.white@polloshermanos.us',
      surname: 'Walter',
      lastname: 'WHITE',
      password: 'theonewhoknocks'
    }
    ```
    
    **only required fields*
    
    Returns: `200` or `403` or `404` or `400`
    
    **updated user is also returned just as with a `GET`*
  
  - **`DELETE /user/{id}`**
    
    Access: Open with auth token
    
    Returns: `200` or `403` or `404`
    
    **deleted user is also returned just as with a `GET`*

- **Auth**
  
  - **`POST /auth/signin`**
    
    Access: Open
    
    ```
    {
      email: 'w.white@polloshermanos.us',
      password: 'theonewhoknocks'
    }
    ```
