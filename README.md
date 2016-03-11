# Exia security demo - backend

[![Join the chat at https://gitter.im/cyrilchapon/exia-secu-demo-api](https://badges.gitter.im/cyrilchapon/exia-secu-demo-api.svg)](https://gitter.im/cyrilchapon/exia-secu-demo-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
      lastname: 'WHITE',
      createdAt: '2016-03-10T16:51:47.008Z',
      updatedAt: '2016-03-10T16:51:47.008Z'
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
    
    Returns: `200` or `400` or `404`
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
