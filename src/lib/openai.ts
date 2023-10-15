import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function generateImagePrompt(name: string) {
  // math
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "you are an creative and helpful AI assitance capable of generating interesting thumbnail descriptions for my notes. Your output will be fed into the DALLE API to generate thumbnail. description should be minimalistic and flat styled. ",
        },
        {
          role: "user",
          content: `Please create a thumbnail description for my notebook title ${name}`,
        },
      ],
    });
    const data = await response.json();
    const image_description = data.choices[0].message.content;
    return image_description as string;
  } catch (error) {
    console.log(
      "🚀 ~ file: openai.ts:29 ~ generateImagePrompt ~ error:",
      error
    );
  }
}

export async function generateImage() {}
