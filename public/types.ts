
export interface ServiceCardData {
  id: string;
  number: string;
  title: string;
  items: string[];
}

export interface CardAnimationProps {
  progress: any; // MotionValue<number>
  index: number;
  total: number;
  data: ServiceCardData;
}



export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  bgColor: string;
  accentColor: string;
  url : string;
}
