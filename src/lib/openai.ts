import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);
console.log("🚀 ~ file: openai.ts:7 ~ openai:", openai);
console.log("🚀 ~ file: openai.ts:7 ~ openai:", process.env.OPENAI_API_KEY);

export async function generateImagePrompt(name: string) {
  // math
  console.log("name", name);
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an creative and helpful AI assistance capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALLE API to generate a thumbnail. The description should be minimalistic and flat styled",
        },
        {
          role: "user",
          content: `Please generate a thumbnail description for my notebook titles ${name}`,
        },
      ],
    });
    const data = await response.json();
    console.log("🚀 ~ file: openai.ts:29 ~ generateImagePrompt ~ data:", data);
    const image_description = data.choices[0].message.content;
    return image_description as string;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function generateImage(image_descripition: string) {
  try {
    const response = await openai.createImage({
      prompt: image_descripition,
      n: 1,
      size: "256x256",
    });
    const data = await response.json();
    const image_url = data.data[0].url;
    return image_url as string;
  } catch (error) {
    console.log("🚀 ~ file: openai.ts:49 ~ generateImage ~ error:", error);
  }
}
