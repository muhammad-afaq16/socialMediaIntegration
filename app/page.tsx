import Header from "@/components/Header";
import HomePage from "../components/HomePage";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Home() {
  
  return (
    <>
      <Header/>
      <HomePage />
    </>
  );
}
