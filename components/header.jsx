import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./user-menu";
import { checkUser } from "@/lib/checkUser";
import UserLoading from "./user-loading";

const Header = async () => {
  await checkUser();
  return (
    <header className=" container mx-auto ">
      <nav className="flex justify-between items-center px-4 py-6">
        <Link href={"/"}>
          <Image
            src={"/logo.jpg"}
            alt="Birge logo"
            width={70}
            height={30}
            className=" object-contain"
          />
        </Link>
        <div className="flex justify-center gap-4">
          <Link href={"/project/create"}>
            <Button variant="destructive" className={"flex items-center gap-2"}>
              <PenBox size={18} />
              <span>Create Project</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>

      <UserLoading />
    </header>
  );
};

export default Header;
