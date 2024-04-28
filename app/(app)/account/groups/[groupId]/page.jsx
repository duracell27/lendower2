import { Group } from "@/models/Group";
import { User } from "@/models/User";

import mongoose from "mongoose";
import Image from "next/image";
import React from "react";

import AddMemberToGroup from "@/components/AddMemberToGroup";

const GroupPage = async ({ params }) => {
  mongoose.connect(process.env.MONGODB_URI);
  const groupInfo = await Group.findOne({ _id: params.groupId }).populate(
    "members",
    "name image"
  );
  // console.log(groupInfo);
  return (
    <div className="h-screen">
      <h1 className="text-4xl text-white font-bold mb-5">{groupInfo.name}</h1>
      <div className="flex gap-5">
        <div className="bg-green-800 rounded-xl grow p-5">
          <p className="text-xl text-white font-bold mb-3">Витрати</p>
        </div>
        <div className="bg-green-800 rounded-xl p-5">
          <p className="text-xl text-white font-bold mb-3">Учасники:</p>
          {groupInfo.members.map((member, index) => (
            <div
              className="bg-green-900 flex gap-2 rounded-full p-1 text-white pr-3"
              key={index}
            >
              <Image
                className="rounded-full"
                src={member.image}
                alt="userImage"
                width={24}
                height={24}
              />
              <span>{member.name}</span>
            </div>
          ))}
          <div className="">
            <AddMemberToGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
