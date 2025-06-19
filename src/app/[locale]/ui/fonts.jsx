import { Inter_Tight } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
export const inter = Inter_Tight({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "700"] // Asegúrate de que estos pesos existan para Inter Tight
});

export const roboto = Roboto_Mono({ 
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "700"] // Asegúrate de que estos pesos existan para Inter Tight
  });