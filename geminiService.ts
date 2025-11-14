
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage, JournalEntry } from "../types";
import { SYSTEM_INSTRUCTION, INSIGHTS_PROMPT } from "../constants";

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAi = (): GoogleGenAI => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
};

const getChat = (history: ChatMessage[]): Chat => {
    if (!chat) {
        const genAI = getAi();
        const modelHistory = history.map(msg => ({
            role: msg.role,
            parts: [{ text: msg.text }]
        }));
        
        chat = genAI.chats.create({
            model: 'gemini-2.5-flash',
            history: modelHistory,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            },
        });
    }
    return chat;
};


export const getChatResponse = async (history: ChatMessage[], message: string): Promise<string> => {
    try {
        const chatInstance = getChat(history);
        const response: GenerateContentResponse = await chatInstance.sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Error getting chat response:", error);
        return "Sorry, I'm having trouble connecting right now. Please try again later.";
    }
};

export const getJournalSummary = async (entries: JournalEntry[]): Promise<string> => {
    if (entries.length === 0) {
        return "Not enough journal entries to generate a summary. Write a few entries first!";
    }

    const genAI = getAi();
    const entriesText = entries
        .map(e => `Date: ${new Date(e.date).toLocaleDateString()}\nMood: ${e.mood}\nEntry: ${e.text}\n`)
        .join('---\n');
    
    const fullPrompt = `${INSIGHTS_PROMPT}${entriesText}`;

    try {
        const response = await genAI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: fullPrompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error getting journal summary:", error);
        return "Sorry, I couldn't generate a summary at this time. Please check your connection or API key.";
    }
};
