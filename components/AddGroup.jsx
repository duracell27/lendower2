'use client'
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

import toast from "react-hot-toast";
import { createGroup } from "@/actions/AddGroup";

const AddGroup = () => {

  const addGroupHandler = async (formData) => {
    const result = await createGroup(formData);
    if (result) {
      toast.success("Група створена");
    } else {
      toast.error("Не вдалось створити групу");
    }
  };

  return (
    <Collapsible className="flex flex-col justify-center">
      <CollapsibleTrigger>
        <div className="bg-green-800 rounded-full text-white text-xl p-3">
          Створити групу
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-green-800 rounded-full text-xl p-3 px-10 mt-3">
        <form action={addGroupHandler}>
          <label
            htmlFor="groupName"
            className="flex gap-2 flex-col items-center"
          >
            <div className="text-xl text-nowrap text-white">Назва групи: </div>
            <div className="flex items-center gap-3">
              <Input id="groupName" name="groupName" />
            </div>
          </label>
          <Button type="submit">Створити</Button>
        </form>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default AddGroup;
