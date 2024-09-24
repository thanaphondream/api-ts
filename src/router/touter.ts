import express from "express"
import { usernamesave } from "../connetAll/username"
const router = express.Router()

router.post('/username', usernamesave)

export default router