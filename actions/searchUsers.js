'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Group } from "@/models/Group";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function searchUsers(searchStr) {
    console.log('------------------------------------------')
  mongoose.connect(process.env.MONGODB_URI);
  const session = await getServerSession(authOptions);
  if (session) {

    console.log('search str',searchStr)
    const resp = await User.find({'name' : new RegExp(searchStr, 'i')})
    console.log('response',resp)
    const ans = JSON.parse(JSON.stringify(resp));
    return ans;
  }
  return false
}
