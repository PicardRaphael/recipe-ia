import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Link className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out"href='/vercel-ai'>
          Générez des recettes rapidement avec la bibliothèque Versal AI.
        </Link>
        <Link className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out" href='/synchronous'>
          Requêtes synchrones pour des réponses structurées complètes.
        </Link>
        <Link className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out" href='/streaming'>
          Flux de données pour une expérience en temps réel
        </Link>
      </div>
    </main>
  );
}