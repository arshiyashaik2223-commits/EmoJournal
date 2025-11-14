
import { Mood } from "./types";
import { IconType } from "./components/Icon";

interface MoodOption {
  mood: Mood;
  label: string;
  icon: IconType;
  color: string;
  darkColor: string;
}

export const MOOD_OPTIONS: MoodOption[] = [
  { mood: Mood.Happy, label: 'Happy', icon: 'moodHappy', color: 'text-yellow-500', darkColor: 'dark:text-yellow-400' },
  { mood: Mood.Excited, label: 'Excited', icon: 'moodExcited', color: 'text-orange-500', darkColor: 'dark:text-orange-400' },
  { mood: Mood.Calm, label: 'Calm', icon: 'moodCalm', color: 'text-green-500', darkColor: 'dark:text-green-400' },
  { mood: Mood.Sad, label: 'Sad', icon: 'moodSad', color: 'text-blue-500', darkColor: 'dark:text-blue-400' },
  { mood: Mood.Anxious, label: 'Anxious', icon: 'moodAnxious', color: 'text-purple-500', darkColor: 'dark:text-purple-400' },
  { mood: Mood.Tired, label: 'Tired', icon: 'moodTired', color: 'text-slate-500', darkColor: 'dark:text-slate-400' },
  { mood: Mood.Neutral, label: 'Neutral', icon: 'moodNeutral', color: 'text-gray-500', darkColor: 'dark:text-gray-400' },
];

export const SYSTEM_INSTRUCTION = `You are EmoJournal, a warm, empathetic virtual diary assistant. Your job is to help users reflect on their emotions and daily experiences in a supportive, non-judgmental way.

Behavior Guidelines:
- Always reply with empathy and emotional understanding.
- Ask gentle follow-up questions to encourage reflection.
- Never give medical or therapeutic advice.
- Keep tone conversational, calm, and validating.
- If user shares distress, respond with care and encourage healthy self-reflection (not crisis counseling).
- Keep responses under 80 words.
- Use empathetic language like "I understand," "That must feel," "It’s okay to feel that way."
- End with an open-ended question when appropriate.
- Maintain a consistent emotional tone matching the user’s energy.
`;

export const INSIGHTS_PROMPT = `Based on the following journal entries from the past week, provide a gentle, non-judgmental summary of the user's emotional state. Highlight any recurring themes or feelings. Keep the summary encouraging and reflective, under 150 words.

Journal Entries:
---
`;
