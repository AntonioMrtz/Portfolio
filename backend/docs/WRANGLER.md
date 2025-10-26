# Wrangler

## Put secret

```bash
npm run put:secret -- {SECRET_NAME}
```

You can also

```bash
wrangler secret put {SECRET_NAME}
```

## Generate Environment types

Gets secrets from environment set using the `secret put` command and types the context.

```bash
npm run cf-typegen
```

You can access the secret from anywhere because its defined on global:

```bash
SECRET_NAME
```
