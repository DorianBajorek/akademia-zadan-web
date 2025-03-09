import Link from 'next/link';
import Image from 'next/image';

const Nav: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Usunięcie <a> tagu, bezpośrednio w Link */}
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          </Link>
          {/* Usunięcie <a> tagu, bezpośrednio w Link */}
          <Link href="/">
            <h1 className="text-2xl font-semibold text-gray-800">Akademia Zadań</h1>
          </Link>
        </div>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="/daily-task" className="text-gray-700 hover:text-blue-500">
            Daily Zadania
          </Link>
          <Link href="/barometer-exam-selector" className="text-gray-700 hover:text-blue-500">
            Barometr
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
