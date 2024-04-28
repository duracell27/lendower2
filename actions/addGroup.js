'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Group } from "@/models/Group";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function createGroup(formData) {
  mongoose.connect(process.env.MONGODB_URI);
  const session = await getServerSession(authOptions);
  if (session) {
    const userId = session?.user?.id;
    const members = []
    members.push(userId)
    const groupName = formData.get("groupName");
    const resp = await Group.create({ name: groupName, members });
    const ans = JSON.parse(JSON.stringify(resp));
    return ans;
  }
  return false
}
