# ROADMAP

## Main features

### Add "customer" resource
We need to implement a new protected resource : **customer**

```
customer : {
  id: 1,
  name: 'the customer'
}
```

- Attributes

| name | type | required |
|---|---|---|
| `id` | depend on database | yes |
| `name` | string | yes |

NB: `id` is implicit. See [how to define a model](https://github.com/balderdashy/waterline-docs/blob/4f60d5d3fcdab19262b5c5dbcacbe74aac541b7b/models/models.md#how-to-define-a-model)

- Access

We need full route (*model* and *controller*). See [sails generate api](http://sailsjs.org/documentation/reference/command-line-interface/sails-generate#?sails-generate-api-foo)

The ressource must be protected by `tokenAuth` policy. It should be [default behavior](https://github.com/cyrilchapon/exia-secu-demo-api/blob/44afa9d2e1a4ec6786fee8e9122d87ca4c581d42/config/policies.js#L29) though.

## Auxiliary features

