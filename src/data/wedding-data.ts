import weddingDataJson from './wedding-data.json';

export interface Event {
  id: string;
  title: string;
  date: string;
  hour: string;
  direction: string;
  transport: string;
  icon: string;
  buttonText: string;
  mapUrl: string;
  qr: string;
  position?: "bottom" | 'top';
}

export interface WeddingData {
  wedding: {
    date: string;
    calendarUrl: string;
  };
  timer: {
    title: string;
    buttonText: string;
  };
  agree: {
    description: string;
  };
  quote: {
    text: string;
    author: string;
  };
  events: Event[];
}

const weddingData: WeddingData = weddingDataJson as WeddingData;

export default weddingData;
