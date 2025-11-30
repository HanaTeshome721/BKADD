import dotenv from  'dotenv'
dotenv.config()


export const NODE_ENV= process.env.NODE_ENV || 'development'

export const PORT = process.env.PORT || 3000

export const DB_CONNECTION_STRING= process.env.DB_CONNECTION_STRING || ''