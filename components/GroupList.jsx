import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Group } from "@/models/Group";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const GroupList = async () => {
  moment.updateLocale("en", {
    monthsShort: {
      format: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split(
        "_"
      ),
      standalone:
        "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
    },
  });
  mongoose.connect(process.env.MONGODB_URI);
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const userId = session?.user?.id;
  const groups = await Group.find({ members: userId });

  return (
    <div>
      {!groups.length && (
        <div className="text-xl text-center bg-green-800 rounded-full p-3 text-white font-bold">
          У вас немає жодної групи
        </div>
      )}
      {groups.map((group, index) => (
        <Link
          href={`/account/groups/${group._id}`}
          key={index}
          className="bg-green-800 rounded-full p-3 text-white flex gap-5 mb-5 items-center cursor-pointer"
        >
          <div className="flex items-center gap-2 font-bold text-white/50">
            <div className="">
              <span className="font-bold text-4xl">
                {moment(group.createdAt).format("DD")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="">{moment(group.createdAt).format("MMM")}</span>
              <span className="">{moment(group.createdAt).format("YYYY")}</span>
            </div>
          </div>
          <div className="bg-green-600 rounded-full flex justify-center items-center w-12 h-12">
            {group.image && (
              <Image src={group.image} alt="groupLogo" width={48} height={48} />
            )}
            {!group.image && <FontAwesomeIcon icon={faUserGroup} />}
          </div>
          <p className="grow font-bold text-2xl">{group.name}</p>
          <div className="flex gap-2 items-center mr-2">
            <span>Учасників: </span>
            <span className="text-2xl font-bold text-white/50">
              {group.members.length}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GroupList;
