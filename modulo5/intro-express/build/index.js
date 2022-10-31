"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
app.get("/status", (req, res) => {
    res.send("Hello from Express");
});
const users = [
    {
        id: 35,
        name: "Luiz Rafhael",
        phone: "5689-4533",
        email: "luiz@hotmail.com",
        website: "luiz.net",
    },
    {
        id: 26,
        name: "Ariane",
        phone: "5649-4535",
        email: "ari@hotmail.com",
        website: "ari.net",
    }
];
app.get("/users", (req, res) => {
    res.send(users);
});
const posts = [
    {
        id: 1,
        title: "Cruzeiro x Vasco",
        body: "Jogo de ascesso do Cruzeiro",
        userId: 60.400,
    },
    {
        id: 2,
        title: "Cruzeiro x Ponte Preta",
        body: "Jogo do titulo do Cruzeiro",
        userId: 67.800,
    },
    {
        id: 3,
        title: "Cruzeiro x CSA",
        body: "Jogo da entrega do trofeu de campeão",
        userId: 71.850,
    }
];
app.get("/posts", (req, res) => {
    res.send(posts);
});
app.get("/users/post/:id", (req, res) => {
    const userId = Number(req.params.id);
    const result = posts.filter(posts => {
        if (posts.userId === userId) {
            return true;
        }
        else {
            return false;
        }
    });
    res.send(result);
});
//# sourceMappingURL=index.js.map