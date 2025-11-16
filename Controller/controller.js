import { createEmbedding } from "../config/createEmbedding.js";


export const embeddingText = async (req, res) => {
    try {
        const embeddingResponse = await createEmbedding("Wellcome!");
        res.status(200).json({ embedding: embeddingResponse });
    } catch (error) {
        console.error("Error in embeddingText controller:", error);
        res.status(500).json({ error: "Failed to create embedding" });
    }
}