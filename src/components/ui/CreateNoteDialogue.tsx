"use client";
import { Plus } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
type Props = {};

const CreateNoteDialogue = (props: Props) => {
  const [input, setInput] = React.useState("");
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex border-dashed border-2 border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:translate-y-1 p-4 flex-row">
          <Plus className="w-6 h-6 text-green-600 " strokeWidth={2} />
          <h2 className="font-semibold text-gray-600 sm:mt-2">New Note Book</h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Note Book</DialogTitle>
          <DialogDescription>
            You can create a new note by clicking this button
          </DialogDescription>
        </DialogHeader>
        <form>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="name..."
          />
          <div className="h-4"></div>
          <div className="flex items-center gap-2">
            <Button type="reset" variant={"secondary"}>
              {" "}
              cancel
            </Button>
            <Button type="submit" className="bg-green-600">
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialogue;
