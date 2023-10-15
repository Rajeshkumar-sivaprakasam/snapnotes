"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import TipTapMenuEditor from "./TipTapMenuBar";
import { Button } from "./button";
import TipTapMenuBar from "./TipTapMenuBar";
import { useDebounce } from "@/lib/useDebounce";
type Props = {};

const TipTapEditor = (props: Props) => {
  const [editorState, setEditorState] = React.useState("");

  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit],
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });
  // debounce to optimized api call
  const debouncedEditorState = useDebounce(editorState, 500);
  React.useEffect(() => {}, [debouncedEditorState]);
  return (
    <>
      <div className="flex">
        {editor && <TipTapMenuBar editor={editor} />}
        <Button>Saved</Button>
      </div>
      <div className="prose">
        {/* not understanding this prose */}
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default TipTapEditor;
