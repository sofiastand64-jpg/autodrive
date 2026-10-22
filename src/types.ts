import type { ImageSourcePropType } from 'react-native';

export interface Car {
  id: string;
  name: string;
  year: number;
  price: number;
  image: ImageSourcePropType;
  tag: string;
  engine: string;
  power: number;
  transmission: string;
  capacity: string;
}

export type RootStackParamList = {
  Home: undefined;
  CarDetail: { car: Car };
  Order: { car: Car };
  Profile: undefined; // <-- Добавили
  Contacts: undefined;
  Favorites: undefined; 
};

