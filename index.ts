import 'dotenv/config';
import express from "express";
import cors from "cors";
import router from './src/router/touter';

const app = express(); 

// ใช้ cors ก่อนใช้ router
app.use(cors());

// ใช้ express.json() เพื่อให้สามารถอ่าน JSON body ได้
app.use(express.json());

// ตั้งค่า router
app.use('/api', router);

const port = process.env.PORT || 3000; // กำหนดพอร์ต

app.listen(port, () => console.log(`Server is running on port ${port}`));
