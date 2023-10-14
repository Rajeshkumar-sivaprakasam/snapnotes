import TypeWriterTitle from "@/components/ui/TypeWriterTitle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        <div className="mt-8"></div>
        <Link href={"/dashboard"} className="flex justify-center">
          <Button className="bg-green-600">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
