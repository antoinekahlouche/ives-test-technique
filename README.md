# IVèS Test Technique

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
