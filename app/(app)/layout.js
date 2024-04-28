import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Link from "next/link";
import { headers } from "next/headers";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Land Ower",
  description: "Ділись і розраховуй свої витрати",
};

export default function AppLayout({ children }) {
  const headersList = headers()
  const activeUrl = headersList.get("referer")
  console.log('URL', activeUrl)
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        <Header />
        <main className="flex flex-col gap-5 bg-green-700 p-4">
          <nav className="flex gap-5 justify-center items-center bg-green-800 rounded-xl py-4">
            <Link className={`text-xl text-white p-2 px-6 cursor-pointer rounded-full shadow shadow-black/30 bg-green-900`} href="/account/friends">Друзі</Link>
            <Link className={`text-xl text-white p-2 px-6 cursor-pointer rounded-full shadow shadow-black/30 bg-green-900`} href="/account/groups">Групи</Link>
          </nav>
          <div className="">{children}</div>
        </main>
        
      </body>
    </html>
  );
}
