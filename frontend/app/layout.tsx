import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Certifique-se de ter o Tailwind aqui
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quantum Break',
  description: 'Laboratório de algoritmos quânticos e criptografia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-950 text-gray-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}