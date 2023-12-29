export interface Crop {
    id: number;
    thumbnails: { id: number; image: string; detail: string }[];
    crop_name: string;
    index: number;
    service_cost: number | null;
    payment_link: string;
  }
  