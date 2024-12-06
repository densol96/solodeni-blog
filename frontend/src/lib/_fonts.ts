import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap", // Use 'swap' for better performance
  fallback: ["Arial", "sans-serif"],
});