"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";

function Header() {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: true,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: true,
    },
  ];
  return (
    <div>
      <header className="flex items-center h-16 w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" aria-label="Toggle Navigation Menu">
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="mr-6 hidden lg:flex" href="#">
              <SheetTitle>JOBSCO</SheetTitle>
            </Link>
            <div className="grid gap-2 py-6">
              {menuItems.map((menuItem) =>
                menuItem.show ? (
                  <Link
                    className="flex items-center w-full text-lg font-semibold py-2"
                    key={menuItem.label}
                    href={menuItem.path}
                  >
                    {menuItem.label}
                  </Link>
                ) : null
              )}
            </div>
          </SheetContent>
        </Sheet>

        <Link className="mr-6 hidden lg:flex" href="#">
          JOBSCO
        </Link>

        <nav className="ml-auto hidden lg:flex gap-8">
          {menuItems.map((menuItem) =>
            menuItem.show ? (
              <Link
                key={menuItem.label}
                href={menuItem.path}
                className="text-sm font-medium h-9 w-max group inline-flex items-center rounded-md bg-white gap-2 px-4 py-4"
              >
                {menuItem.label}
              </Link>
            ) : null
          )}

          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>
    </div>
  );
}

export default Header;
