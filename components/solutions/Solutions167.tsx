import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku przedstawiono bryłę zbudowaną z walca i półkuli. Wysokość walca jest równa{' '}
        <InlineMath math="r" /> i jest taka sama jak promień półkuli oraz taka sama jak promień
        podstawy walca. Objętość tej bryły jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{5}{3}\pi r^3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{4}{3}\pi r^3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{2}{3}\pi r^3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{1}{3}\pi r^3" />
          </p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_20-06-34.png"
          alt="Walec i półkula"
          className="rounded-lg"
          width={350}
          height={350}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie objętości walca</h2>
      <p className="mb-2">Objętość walca obliczamy ze wzoru:</p>
      <BlockMath math="V_{\text{walca}} = \pi r^2 h" />
      <p className="mb-2">Podstawiając dane:</p>
      <BlockMath math="V_{\text{walca}} = \pi r^2 \cdot r = \pi r^3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie objętości półkuli</h2>
      <p className="mb-2">Objętość całej kuli wynosi:</p>
      <BlockMath math="V_{\text{kuli}} = \frac{4}{3}\pi r^3" />
      <p className="mb-2">Zatem objętość półkuli to:</p>
      <BlockMath math="V_{\text{półkuli}} = \frac{1}{2} \cdot \frac{4}{3}\pi r^3 = \frac{2}{3}\pi r^3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie całkowitej objętości</h2>
      <p className="mb-2">Sumujemy objętości obu części bryły:</p>
      <BlockMath math="V_{\text{całkowita}} = V_{\text{walca}} + V_{\text{półkuli}} = \pi r^3 + \frac{2}{3}\pi r^3 = \frac{5}{3}\pi r^3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Objętość bryły wynosi <InlineMath math="\frac{5}{3}\pi r^3" /> (odpowiedź <strong>A</strong>
        ).
      </p>
    </div>
  );
};

export default Solution;
