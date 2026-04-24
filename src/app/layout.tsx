import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Qaswara | Muslim Fitness Coach - Cuerpo Fuerte, Fe Firme",
  description:
    "Transforma tu cuerpo y tu Iman. Pierde barriga, gana músculo y construye disciplina — sin comprometer tus valores. Programa AL-ASHIDDA para hombres muslims.",
  keywords: [
    "fitness muslim",
    "gimnasio halal",
    "perder grasa",
    "ganar músculo",
    "hombres muslims",
    "AL-ASHIDDA",
    "Al Qaswara",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
