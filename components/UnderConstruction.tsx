import Link from 'next/link';

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Strona w budowie 🚧</h1>
      <p className="text-lg text-gray-600 mb-6">
        Pracujemy nad tym, aby ta strona była dostępna jak najszybciej.
        Wróć do nas później!
      </p>
      <Link href="/">
        <div className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300">
          Wróć na stronę główną
        </div>
      </Link>
    </div>
  );
};

export default UnderConstruction;
