"use client";

import { signIn } from "next-auth/react";

export default async function SignIn() {
  return (
    <section className="h-screen flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold leading-normal uppercase text-center mt-0 mb-5">
          Sign In
        </h1>
        <div className="px-6 sm:px-0 max-w-sm">
          <button
            onClick={async () =>
              await signIn("google", {
                callbackUrl: `${window.location.origin}`,
                profileUrl: "/api/auth/google/profile",
              })
            }
            type="button"
            className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign up with Google<div></div>
          </button>
          <button
            onClick={async () =>
              await signIn("facebook", {
                callbackUrl: `${window.location.origin}`,
              })
            }
            type="button"
            className="text-white w-full bg-[#1877F2] hover:bg-[#1877F2]/90 focus:ring-4 focus:outline-none focus:ring-[#1877F2]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center justify-center mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66H202.34V128c0-26.17 12.82-51.15 53.4-51.15H304V7.46C296.94 6.4 277.68 0 258.9 0 153.08 0 82.35 56.33 82.35 159.31v85.03H13.6v92.66h68.75V512h85.52V288z"
              ></path>
            </svg>
            Sign up with Facebook
          </button>
          <button
            onClick={async () =>
              await signIn("github", {
                callbackUrl: `${window.location.origin}`,
              })
            }
            type="button"
            className="text-white w-full bg-[#333] hover:bg-[#333]/90 focus:ring-4 focus:outline-none focus:ring-[#333]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6s-5.2-1.6-5.2-3.6 2.3-3.6 5.2-3.6 5.2 1.6 5.2 3.6zm-31.6-6.5c-.7 1.4 0 3 1.5 3.8s3.3.3 4-.6 0-3-1.5-3.8-3.3-.3-4 .6zm44.8-1.1c-2.9.8-4.1 3.1-2.6 5.1s5.5 2.2 8.4 1.2 4.1-3.1 2.6-5.1-5.5-2.2-8.4-1.2zm44.8-9.4c-1.1 1.5-.1 3.5 2.1 4.5s4.9.6 6-.9.1-3.5-2.1-4.5-4.9-.6-6 .9zm-38.6-2.6c-1.1 1.5-.1 3.5 2.1 4.5s4.9.6 6-.9.1-3.5-2.1-4.5-4.9-.6-6 .9zm104.3-2.2c-2.9.8-4.1 3.1-2.6 5.1s5.5 2.2 8.4 1.2 4.1-3.1 2.6-5.1-5.5-2.2-8.4-1.2zm-28.5-5.2c-1.1 1.5-.1 3.5 2.1 4.5s4.9.6 6-.9.1-3.5-2.1-4.5-4.9-.6-6 .9zm26.3 5.7c0 2 2.3 3.6 5.2 3.6s5.2-1.6 5.2-3.6-2.3-3.6-5.2-3.6-5.2 1.6-5.2 3.6zm-10.4-7.7c-1.7.9-2.5 3.3-1.7 5.4s3.1 3.2 4.8 2.3 2.5-3.3 1.7-5.4-3.1-3.1-4.8-2.3zM244.8 8C108.7 8 0 116.7 0 252.8c0 108.9 70.7 201.6 168.8 234.3 12.3 2.3 16.8-5.3 16.8-11.7 0-5.7-.2-24.8-.3-45.1-62.8 13.6-76-30.3-76-30.3-11.2-28.6-27.4-36.3-27.4-36.3-22.4-15.3 1.7-15 1.7-15 24.8 1.8 37.9 25.5 37.9 25.5 22 37.7 57.8 26.8 72 20.5 2.2-15.9 8.6-26.8 15.7-33-50.1-5.7-102.8-25-102.8-111.2 0-24.6 8.8-44.7 23.2-60.4-2.3-5.7-10.1-28.6 2.2-59.6 0 0 19-6.1 62.3 23.1 18-5 37.3-7.4 56.5-7.5 19.1.1 38.5 2.5 56.5 7.5 43.2-29.2 62.2-23.1 62.2-23.1 12.3 31 4.5 53.9 2.2 59.6 14.4 15.7 23.2 35.8 23.2 60.4 0 86.5-52.8 105.4-103 111 8.9 7.6 16.9 22.6 16.9 45.6 0 32.9-.3 59.5-.3 67.6 0 6.5 4.5 14.1 16.9 11.7C425.3 454.4 496 361.7 496 252.8 496 116.7 387.3 8 244.8 8z"
              ></path>
            </svg>
            Sign up with GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
