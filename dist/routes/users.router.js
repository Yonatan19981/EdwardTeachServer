"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
// External Dependencies
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
// Global Config
exports.usersRouter = express_1.default.Router();
exports.usersRouter.use(express_1.default.json());
// GET
exports.usersRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = (yield database_service_1.collections.users.find({}).toArray());
        res.status(200).send(users);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.usersRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const user = (yield database_service_1.collections.users.findOne(query));
        if (user) {
            res.status(200).send(user);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
}));
exports.usersRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const user = (yield database_service_1.collections.users.findOne(query));
        if (user) {
            res.status(200).send(user);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
}));
// POST
exports.usersRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        const result = yield database_service_1.collections.users.insertOne(newUser);
        result
            ? res.status(201).send(`Successfully created a new user with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new user.");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
}));
// PUT
exports.usersRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
    try {
        const updatedUser = req.body;
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_service_1.collections.users.updateOne(query, { $set: updatedUser });
        result
            ? res.status(200).send(`Successfully updated user with id ${id}`)
            : res.status(304).send(`User with id: ${id} not updated`);
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
// DELETE
exports.usersRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const id = (_d = req === null || req === void 0 ? void 0 : req.params) === null || _d === void 0 ? void 0 : _d.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield database_service_1.collections.users.deleteOne(query);
        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed user with id ${id}`);
        }
        else if (!result) {
            res.status(400).send(`Failed to remove user with id ${id}`);
        }
        else if (!result.deletedCount) {
            res.status(404).send(`User with id ${id} does not exist`);
        }
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
//# sourceMappingURL=users.router.js.map