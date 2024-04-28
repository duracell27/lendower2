import AddGroup from "@/components/AddGroup";
import GroupList from "@/components/GroupList";
import React from "react";

const GroupsTab = () => {
  return (
    <div className="bg-green-700 h-screen">
      <div className="flex justify-between mb-4">
        <h1 className="text-4xl text-white text-center font-bold p-4">Групи</h1>
        <AddGroup />
      </div>
        <GroupList/>
    </div>
  );
};

export default GroupsTab;
