import dbConnect from '@/database/dbConnect.js'
import bcrypt from 'bcrypt'
import User from '@/models/User'

export async function POST(req){
    try {
        await dbConnect.connect();
      
        // const { email, password: pass, recoveryCode } = await req.json();
        // console.log(req.json());
      
        // let existingUser = await User.findOne({ email });
      
        // if (existingUser) {
        //   // Update password if email exists
        //   existingUser.password = await bcrypt.hash(pass, 10);
        //   existingUser.recoveryCode = recoveryCode;
        //   await existingUser.save();
        // } else {
        //   // Create new user if email doesn't exist
        //   const username = email.substring(0, email.indexOf("@"));
        //   const hashedPassword = await bcrypt.hash(pass, 10);
        //   existingUser = await User.create({
        //     username,
        //     email,
        //     password: hashedPassword,
        //     recoveryCode,
        //   });
        // }
      
        // const { password, ...user } = existingUser._doc;

        
const { email, password: pass, recoveryCode } = await req.json();
console.log(req.json());

let existingUser = await prisma.user.findUnique({
  where: {
    email: email,
  },
});

if (existingUser) {
  // Update password if email exists
  const hashedPassword = await bcrypt.hash(pass, 10);
  existingUser = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      password: hashedPassword,
      recoveryCode: recoveryCode,
    },
  });
} else {
  // Create new user if email doesn't exist
  const username = email.substring(0, email.indexOf("@"));
  const hashedPassword = await bcrypt.hash(pass, 10);
  existingUser = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: hashedPassword,
      recoveryCode: recoveryCode,
    },
  });
}

const { password, ...user } = existingUser;
      
        return new Response(JSON.stringify(user), { status: 201 });
      } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 });
      }
    }      