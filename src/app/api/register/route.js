import bcrypt from 'bcrypt'
import prisma from '@/database/prismaConnect';


export async function POST(req) {
  try {
    const { username, email, password: pass, recoveryCode } = await req.json();

    const isExisting = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isExisting) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(pass, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        recoveryCode,
      },
    });

    const { password, ...user } = newUser;

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
