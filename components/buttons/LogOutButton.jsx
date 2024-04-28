'use client'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

const LogOutButton = () => {
    
  return (
    <Button onClick={()=>signOut({ callbackUrl: '/' })} className="rounded-full p-3">
      <FontAwesomeIcon icon={faRightFromBracket} className="w-4 h-4" />
    </Button>
  );
};

export default LogOutButton;
