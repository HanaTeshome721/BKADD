"use strict";
// import dotenv from 'dotenv';
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONNECTION_STRING = exports.JWT_SECRET = void 0;
// Load environment variables from .env file
// dotenv.config();
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
