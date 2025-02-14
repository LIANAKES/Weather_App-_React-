

export interface HistoryProps {
  history: Weather[];
  onDelete: (id: number) => void;
  onClearHistory: () => void;
}

export interface Weather {
  id: string;
  name: string;
  description: string;
  icon: string;
}
