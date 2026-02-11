# IVèS Test Technique

## Commandes utiles

Create

```
curl -X POST http://localhost:3000/v1/task \
  -H "Content-Type: application/json" \
  -d '{"description":"initial description"}'
```

Get

```
curl http://localhost:3000/v1/task/...
```

Update

```
curl -X PATCH http://localhost:3000/v1/task/... \
  -H "Content-Type: application/json" \
  -d '{"description":"updated description"}'
```

Delete

```
curl -X DELETE http://localhost:3000/v1/task/...
```

Authorize

```
curl "http://localhost:3000/v1/authorize?client_id=my-app&redirect_uri=http://localhost:3000/callback&response_type=code"
```

## Aller plus loin

- Mettre les constantes dans un fichier .env (JWT_SECRET et PORT)
- Ecrire des tests
- Finir l'énoncé
