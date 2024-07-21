"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  const { data } = useSession();
  const imageUrl = data?.user?.image || "";
  console.log(data);
  return (
    <div>
      <header className="h-60 flex justify-left items-center">
        {data ? (
          <div className="flex flex-col gap-4 ml-4">
            <p>Name: {data.user.name}</p>
            <p>Email: {data.user.email}</p>
            <Image
              className="w-28 h-28 rounded-[50%]"
              width={1000}
              height={1000}
              priority
              src={imageUrl}
              alt="User Image"
            />
          </div>
        ) : (
          <p className="px-6 py-2 ml-3 text-nowrap bg-slate-600 rounded-lg">
            Not logged in
          </p>
        )}
        <div className="text-right w-full mr-4">
          {data !== null && (
            <button
              onClick={() => signOut()}
              className="px-6 py-2 bg-slate-600 rounded-lg"
            >
              Sign out
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
