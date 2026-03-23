const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const file = req.url === "/" ? "index.html" : req.url.slice(1)
    fs.readFile(file, (err, data) => {
        res.end(data)
    })
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
});
