import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <main className="flex min-h-screen bg-gray-400 flex-col items-center justify-between p-24">
        <div>
          <h1 className="text-3xl font-bold leading-normal uppercase text-center mt-0 mb-5">
            Home page
          </h1>
          <div className="flex flex-col gap-2">
            <Link
              href="/auth/sign-in"
              className="text-xl px-8 py-5 bg-slate-700 rounded-md inline-block  text-center"
            >
              Sign in to Google Login
            </Link>
            <Link
              href="/auth/sign-in"
              className="text-xl px-8 py-5 bg-slate-700 rounded-md inline-block  text-center"
            >
              Sign in to Github Login
            </Link>
            <Link
              href="/auth/sign-in"
              className="text-xl px-8 py-5 bg-slate-700 rounded-md inline-block  text-center"
            >
              Sign in to Facebook Login
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
