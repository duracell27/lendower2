"use client";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { searchUsers } from "@/actions/SearchUsers";


const AddMemberToGroup = () => {
  const [inputValue, setInputValue] = useState("");
  const [findedUsers, setFindedUsers] = useState([]);
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);

  useEffect(() => {
    if (inputValue.length > 0) {
      // console.log('iam working')
      searchUsers(inputValue).then((res) => {
        // console.log('resp client',res)
        setFindedUsers(res);
      });
    }
  }, [inputValue]);
  //   console.log(findedUsers)
  //    console.log('users', await searchUsers(inputValue))

  return (
    <Collapsible
      open={collapsibleOpen}
      onOpenChange={() => setCollapsibleOpen((prev) => !prev)}
    >
      <CollapsibleTrigger className="w-full">
        <div className="bg-green-900 rounded-full text-center p-1 mt-3">
          <FontAwesomeIcon
            icon={collapsibleOpen ? faXmark : faPlus}
            className="text-white font-bold"
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="bg-green-900 rounded-xl p-1 mt-3">
          <form action="">
            <label htmlFor="searchuser">
              <p className="text-white py-2 text-center">Почніть вводити ім`я</p>
              <Input
                id="searchuser"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </label>
            <div className="mt-3">
            {findedUsers.map((user, index) => (
              <div
                onClick={() => setInputValue(user.name)}
                className="bg-green-700 flex gap-2 rounded-full p-1 text-white pr-3 my-1"
                key={index}
              >
                <Image
                  className="rounded-full"
                  src={user.image}
                  alt="userImage"
                  width={24}
                  height={24}
                />
                <span>{user.name}</span>
              </div>
            ))}</div>
            <Button className='w-full mt-3'>Додати</Button>
          </form>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default AddMemberToGroup;
