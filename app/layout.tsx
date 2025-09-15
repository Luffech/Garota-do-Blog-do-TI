import "./globals.css";
import Link from "next/link";
import { Inter, Lora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Lufech's Blog",
  description: "Um diário pessoal sobre tecnologia e desenvolvimento.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-[url('/background_blog.png')] bg-fixed bg-center bg-cover">
        <header className="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur shadow-md sticky top-0 z-10">
          <Link href="/" className="font-bold text-lg hover:text-indigo-600 transition-colors">
            Lufech's Blog
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-stone-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-indigo-600 transition-colors">Sobre</Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">
          <div className="paper">{children}</div>
        </main>
        <footer className="text-center p-6 text-sm text-stone-600">
          <p>&copy; {new Date().getFullYear()} Lufech's Blog. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}