const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, 'myfile.json');
const data = fs.readFileSync(filePath);
var superHeroes = JSON.parse(data.toString());
console.log(superHeroes);


http.createServer(function (request, response) {
    switch (request.method) {
        case "POST":
            console.log(request.method);
            console.log(request.headers);
            console.log(request.url);

            let data = "";
            request.on("data", function (chunk) {
                data += chunk.toString();
            });
            request.on("end", function () {
                console.log(data);
                fs.writeFile(request.url.substr(1), data, function (error) {
                    if (error) throw new Error("Ошибка!"); // если возникла ошибка
                });
                response.write("reseived");
                response.end();
            });
            break;
        case "GET":
            console.log(`Запрошенный адрес: ${request.url}`);
            if (request.url.startsWith("/public/")) {

                // получаем путь после слеша
                var filePath = request.url.substr(1);
                fs.readFile(filePath, function (error, data) {

                    if (error) {
                        response.statusCode = 404;
                        response.end("Resourse not found!");
                    }
                    else {
                        response.setHeader("Content-Type", "text/html");
                        response.end(data);
                    }
                })
            }
            else {
                // во всех остальных случаях отправляем строку hello world!
                response.end("Hello World!");
            }
            break;
    }
}).listen(3000);
