import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const usernamesave = async (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password, role } = req.body;
    console.log(username, email, password)
  try {
    // const existingUser = await prisma.user.findUnique({
    //   where: { email: email },
    // });

    // if (existingUser) {
    //   return res.status(400).json({ error: 'User with this email already exists' });
    // }

    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password, 
        role: "USER"
      },
    });

    return res.status(201).json(newUser);
  } catch (err) {
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};
