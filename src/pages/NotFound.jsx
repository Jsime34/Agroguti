import { Link } from 'react-router-dom';

export default function NotFound({ t }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-[#28623f] font-montserrat mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">
          {t('notfound_text') || 'La página que buscas no existe.'}
        </p>
        <Link
          to="/"
          className="inline-block bg-[#28623f] hover:bg-[#1e4a30] text-white px-8 py-3 rounded-full font-bold transition-all shadow-md active:scale-95 uppercase tracking-wider text-sm"
        >
          {t('nav_inicio')}
        </Link>
      </div>
    </main>
  );
}
