// import dbConnect from '@/database/dbConnect.js'
import bcrypt from 'bcrypt'
// import User from '@/models/User'
// import openDb from "@/database/sqliteDatabase";
// import setup from '@/database/setupDatabase';
import prisma from '@/database/prismaConnect';
// const sqlite3 = require("sqlite3");
// const fs = require("fs");


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




// export async function POST(req){
//     try {
//         await dbConnect.connect()

//         const {username, email, password: pass, recoveryCode } = await req.json()
//         console.log(req.json())
//         const isExisting = await User.findOne({email})

//         if(isExisting){
//             throw new Error("User already exists")
//         }

//         const hashedPassword = await bcrypt.hash(pass, 10)

//         const newUser = await User.create({username, email, password: hashedPassword, recoveryCode})

//         const {password, ...user} = newUser._doc

//         return new Response(JSON.stringify(user), {status: 201})
//     } catch (error) {
//         return new Response(JSON.stringify(error.message), {status: 500})
//     }
// }

// async function checkDatabaseAndSetup() {
//     const dbExists = fs.existsSync("./src/database/User.db");
//     if (!dbExists) {
//       await setup();
//     }
//   }

// export async function POST(req) {
//     try { 
//           checkDatabaseAndSetup();
//       const db = await openDb()
//       const { username, email, password: pass, recoveryCode } = await req.json()
  
//       const isExisting = await db.get('SELECT * FROM User WHERE email = ?', email)
  
//       if (isExisting) {
//         throw new Error('User already exists')
//       }
  
//       const hashedPassword = await bcrypt.hash(pass, 10)
  
//       const newUser = await db.run(
//         'INSERT INTO User (username, email, password, recoveryCode) VALUES (?, ?, ?, ?)',
//         [username, email, hashedPassword, recoveryCode]
//       )
  
//       const user = {
//         username,
//         email,
//         recoveryCode,
//       }
  
//       return new Response(JSON.stringify(user), { status: 201 })
//     } catch (error) {
//       return new Response(JSON.stringify(error.message), { status: 500 })
//     }
//   }