import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
