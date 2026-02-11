# IVèS Test Technique

Create
```
curl -X POST http://localhost:3000/v1/task \
  -H "Content-Type: application/json" \
  -d '{"description":"qwe"}'
```

Get
```
curl http://localhost:3000/v1/task/...
```

Delete
```
curl -X DELETE http://localhost:3000/v1/task/...
```