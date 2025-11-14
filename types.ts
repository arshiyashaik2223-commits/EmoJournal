
export enum Mood {
  Happy = 'Happy',
  Sad = 'Sad',
  Anxious = 'Anxious',
  Calm = 'Calm',
  Neutral = 'Neutral',
  Excited = 'Excited',
  Tired = 'Tired'
}

export interface JournalEntry {
  id: string;
  text: string;
  mood: Mood;
  activities: string[];
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum View {
  Journal = 'Journal',
  Chat = 'Chat',
  Insights = 'Insights',
}
