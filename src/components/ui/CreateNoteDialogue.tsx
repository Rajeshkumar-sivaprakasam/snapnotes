"use client";
import { Loader2, Plus } from "lucide-react";
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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
type Props = {};

const CreateNoteDialogue = (props: Props) => {
  const router = useRouter();
  const [input, setInput] = React.useState("");
  const createNoteBook = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/createNoteBook", {
        name: input,
      });
      return response.data;
    },
  });

  const uploadToFirebase = useMutation({
    mutationFn: async (noteId: string) => {
      const response = await axios.post("/api/uploadToFirebase", {
        noteId,
      });
      return response.data;
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      window.alert("Please enter a name for your notebook!");
      return;
    }

    createNoteBook.mutate(undefined, {
      onSuccess: ({ note_id }) => {
        console.log("Created_note with id:", note_id);
        // hit another endpoint to uplod the temp dalle url to permanent firebase url
        uploadToFirebase.mutate(note_id);
        router.push(`/notes/${note_id}`);
      },
      onError: (err) => {
        console.log("your notes creation is failed", err);
        window.alert("Failed to create note!");
      },
    });
  };
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
        <form onSubmit={handleSubmit}>
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
            <Button
              type="submit"
              className="bg-green-600"
              disabled={createNoteBook.isLoading}
            >
              {createNoteBook.isLoading && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )}
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialogue;
