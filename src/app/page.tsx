import TypeWriterTitle from "@/components/ui/TypeWriterTitle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 grainy">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center">
          AI <span className="font-bold text-green-600">notes taking</span>{" "}
          assistant.
        </h1>
        <div className="mt-4"></div>
        <h1 className="font-semibold text-center text-slate-600 text-3xl">
          <TypeWriterTitle />
        </h1>
      </div>
    </div>
  );
}
