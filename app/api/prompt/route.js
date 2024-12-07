                                                    // ॥ श्री गणेशाय नमः ॥ 



import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
    try {
        connectToDB();
        const prompts = await Prompt.find({}).populate("creator");
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all Prompts", { status: 500 });
    }
}