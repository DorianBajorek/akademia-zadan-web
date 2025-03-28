import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Wskaż rysunek, na którym jest przedstawiony zbiór wszystkich rozwiązań nierówności <InlineMath math="2 - 3x \geq 4" />.
      </div>
      <div className="mb-6 flex justify-center">
        <img 
            src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_23-33-18.png" 
            alt="Wykres funkcji wykładniczej" 
            className="rounded-lg" 
            width={450} 
            height={450}  
        />
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> Rysunek A</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> Rysunek B</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> Rysunek C</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> Rysunek D</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozwiązanie nierówności</h2>
      <p className="mb-2">
        Rozwiążmy nierówność krok po kroku:
      </p>
      <BlockMath math="2 - 3x \geq 4" />
      <BlockMath math="-3x \geq 4 - 2" />
      <BlockMath math="-3x \geq 2" />
      <p className="mb-2">
        Przy dzieleniu przez liczbę ujemną zmieniamy znak nierówności:
      </p>
      <BlockMath math="x \leq -\frac{2}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Interpretacja rozwiązania</h2>
      <p className="mb-2">
        Rozwiązaniem nierówności są wszystkie liczby rzeczywiste mniejsze lub równe <InlineMath math="-\frac{2}{3}" />. Na osi liczbowej odpowiada to:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li>Zaznaczeniu punktu <InlineMath math="-\frac{2}{3}" /></li>
        <li>Pogrubionej linii ciągnącej się w lewo od tego punktu</li>
        <li>Zamalowanemu kółku w punkcie <InlineMath math="-\frac{2}{3}" /> (bo nierówność jest nieostra)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Identyfikacja poprawnego rysunku</h2>
      <p className="mb-2">
        Spośród dostępnych opcji, taki przedział jest przedstawiony na <strong>rysunku D</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Poprawny rysunek znajduje się w odpowiedzi <strong>D</strong>.
      </p>
    </div>
  );
};

export default Solution;