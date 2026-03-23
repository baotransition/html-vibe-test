const http = require("http")
const fs = require("fs")

const fruits = ["apple", "banana", "orange", "grape", "mango"];

const server = http.createServer((req, res) => {
    if (req.url === "/api/fruits" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(fruits))
    }
    const file = req.url === "/" ? "index.html" : req.url.slice(1)
    fs.readFile(file, (err, data) => {
        res.end(data)
    })
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
});
