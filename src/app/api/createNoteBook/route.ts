import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { generateImage, generateImagePrompt } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// to increase speed in versal
export const runtime = "edge";

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("Unauthorized", {
      status: 401,
    });
  }
  const body = await req.json();
  const { name } = body;
  const image_description = await generateImagePrompt(name);
  if (!image_description) {
    return new NextResponse("Image description genaration is failed!", {
      status: 500,
    });
  }
  const image_url = await generateImage(image_description);
  if (!image_url) {
    return new NextResponse("Image url genaration is failed!", {
      status: 500,
    });
  }
  // insert data

  const notes_id = await db
    .insert($notes)
    .values({
      name,
      userId,
      imageUrl: image_url,
    })
    .returning({
      insertedId: $notes.id,
    });
  return NextResponse.json({
    note_id: notes_id[0].insertedId,
  });
}
