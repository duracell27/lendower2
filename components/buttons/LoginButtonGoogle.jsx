'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {signIn} from 'next-auth/react'

const LoginButtonGoogle = () => {
  return (
    <Button onClick={() => signIn('google')} className="flex gap-3 items-center p-4 px-16">
      <FontAwesomeIcon className="w-5 h-5" icon={faGoogle} />
      <span className="text-md">Вхід через google</span>
    </Button>
  );
};

export default LoginButtonGoogle;
