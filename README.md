# Exia security demo - backend

[![Join the chat at https://gitter.im/cyrilchapon/exia-secu-demo-api](https://badges.gitter.im/cyrilchapon/exia-secu-demo-api.svg)](https://gitter.im/cyrilchapon/exia-secu-demo-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Code Climate](https://codeclimate.com/github/cyrilchapon/exia-secu-demo-api/badges/gpa.svg)](https://codeclimate.com/github/cyrilchapon/exia-secu-demo-api)

This project is a backend, RESTful API server. It's intended to be coupled with [a frontend application](https://github.com/cyrilchapon/exia-secu-demo-web). The whole project is a security leak demonstration for [Grand Nord Digital Forum](http://www.grand-nord-digital-forum.com/): we're playing a "token theft" showing the matter of data encryption when it comes to HTTP.

## Contributing

This project was generated with [Sails](http://sailsjs.org)

One can contribute following [those guidelines](http://stackoverflow.com/questions/4384776/how-do-i-contribute-to-others-code-in-github)

Here's the [roadmap](ROADMAP.md)

API documention uses [apiary](https://apiary.io). Every single API change MUST be reflected inside [API blueprint documentation](apiary.apib)

In english

## Installation

- Install node.js
- [Install sails](http://sailsjs.org/get-started#?installation) locally
- Clone (or fork and clone) projet
- [`npm install`](https://docs.npmjs.com/cli/install) inside projet folder
- You're up & ready to rock =)

## APIs

### RESTful endpoints

See [API doc at apiary.io](http://docs.exiasecudemo.apiary.io)

### Authentication

Auth is performed [jwt](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) style.

![jwt auth flow](http://blog.brainattica.com/content/images/2015/11/jwt_flow.png)

**sequence in the image is just an illustration, not reflecting our actual api implementation here*

**Steps**:
- Authenticate with email/password couple on **`/auth/signin` endpoint**
- Parse JSON response and find you're granted token using **`token` property** on the response ( `{token: '...'}, ...` )
- Set **`token` HTTP header** (with received token value) on each further request, thus authenticating with this token in the process
- (if you get a `403` on a further request, the token have been invalidated: user deleted, token expired => re-authenticate yourself)
