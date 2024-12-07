                                                    // ॥ श्री गणेशाय नमः ॥ 



import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async(req) => {
    const { userID, prompt, tag } = await req.json();
    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userID,
            prompt: prompt,
            tag: tag,
        })
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {status: 201});
        // return res.status(201).json({
        //     success: true,
        //     message: "New Prompt created successfully",
        //     newPrompt,
        // })

    } catch (error) {
        // return res.status(500).json({
        //     success: false,
        //     message: "Failed to create a new Prompt",
        //     error,
        // })
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}