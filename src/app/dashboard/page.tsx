import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import CreateNoteDialogue from "@/components/ui/CreateNoteDialogue";
type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <>
      <div className="grainy max-h-screen">
        <div className="max-w-7xl mx-auto p-10">
          <div className="h-14"></div>
          <div className="flex justify-center items-center md:flex-row flex-col">
            <div className="flex items-center">
              <Link href={"/"}>
                <Button className="bg-green-600" size="sm">
                  <ArrowLeft className="mr-1 w-3 h-3" />
                  Back
                </Button>
              </Link>
              <div className="w-4"></div>
              <div className="text-3xl font-bold text-gray-900">My Notes</div>
              <div className="w-4"></div>
              <UserButton />
            </div>
          </div>
        </div>

        <div className="h-8"></div>
        <Separator />
        <div className="h-8"></div>
        {/* List of all notes */}
        {/* todo: conditionally render by data exisit */}
        <div className="text-center">
          <div className="text-xl text-gray-500 ">
            You have no notes to render
          </div>
        </div>

        {/* display all notes here */}
        <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1">
          <CreateNoteDialogue />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
