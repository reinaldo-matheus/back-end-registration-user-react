import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();

app.use(express.json());
const users = [];

app.get("/usuarios", (req, res) => {
    res.status(200).json(users)
});

app.post("/usuarios", (req, res) => {
    prisma.user.create({
        
    })
    res.status(200).json(users)
});

app.listen(3000); 

// nome do banco MONGODB: reinaldomatheusdeveloper
// senha:BFCfCLa9miXnRIf8
