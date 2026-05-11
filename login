# cURL command to log in as a registered user

# Command:
# curl -i -H "Content-Type: application/json" -d "{\"username\":\"testuser123\",\"password\":\"Password1!\"}" http://localhost:5001/user/login

# Output:
# HTTP/1.1 200 OK
# X-Powered-By: Express
# Content-Type: application/json; charset=utf-8
# Content-Length: 231
# ETag: W/"e7-GpDnVm+kh2wM+9u2EMAkbgIRosE"
# Set-Cookie: connect.sid=s%3AxisvstEK7p82K-mtFIi54NYV2qHOBVc4.Hh%2Fae%2FAbEI4QxYe0BAE5QW4lQE7MZqE2UxPvW4pQzg0; Path=/; Expires=Mon, 11 May 2026 23:23:00 GMT; HttpOnly
# Date: Mon, 11 May 2026 22:23:00 GMT
# Connection: keep-alive
# Keep-Alive: timeout=5
# 
# {"message":"User successfully logged in","accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdHVzZXIxMjMifSwiaWF0IjoxNzc4NTM4MTgwLCJleHAiOjE3Nzg1NDE3ODB9.SmUw8PaWjNJyZ8PiI8uHuHiTO4V4hIiTX5tj7jjQTJ8"}