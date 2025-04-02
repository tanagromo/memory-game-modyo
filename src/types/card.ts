
export interface Card {
  id: number
  alt_text: string | null;
  content_type: string;
  description: string | null;
  isFlipped: boolean;
  isMatched: boolean;
  name: string;
  title: string;
  type: string;
  url: string;
  uuid: string;
}