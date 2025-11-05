curl -X GET http://localhost:5000/api/blog/all

curl -X POST http://localhost:5000/api/project/new \
  -H "Content-Type: application/json" \
  -d '{"id":0,"name":"abc"}'

curl -X PUT http://localhost:5000/api/blog/edit/1 \
  -H "Content-Type: application/json" \
  -d '{"id":5,"name":"updated name"}'

curl -X DELETE http://localhost:5000/api/project/remove/2
