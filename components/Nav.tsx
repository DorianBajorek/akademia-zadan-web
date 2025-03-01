import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Akademia Zadań</h1>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="/daily-exam-selector" className="text-gray-700 hover:text-blue-500">
            Daily Zadania
          </Link>
          <Link href="/barometer-exam-selector" className="text-gray-700 hover:text-blue-500">
            Barometr
          </Link>
          <Link href="/solutions" className="text-gray-700 hover:text-blue-500">
            Rozwiązania
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
