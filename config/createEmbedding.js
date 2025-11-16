import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export const createEmbedding = async (text) => {

    try {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: text,
        });

        return embeddingResponse;
        
    } catch (error) {
        console.error("Error creating embedding:", error);
        throw error;
    }

    
}

