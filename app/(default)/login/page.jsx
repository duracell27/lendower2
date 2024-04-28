
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginButtonGoogle from "@/components/buttons/LoginButtonGoogle";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/account/friends')
  }
  return (
    <div className="bg-green-700 min-h-screen flex flex-col">
      <h1 className="text-4xl text-white font-bold text-center py-6">Вхід</h1>
      <div className="bg-green-800 rounded-xl shadow-xl shadow-black/30 p-10 flex flex-col gap-5 mx-auto">
        <p className="text-white/50 text-center">доступні способи:</p>
        <LoginButtonGoogle/>
      </div>
    </div>
  );
};

export default LoginPage;
