import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na rysunku obok przedstawiono geometryczną interpretację jednego z niżej zapisanych układów
        równań. Wskaż ten układ, którego geometryczną interpretację przedstawiono na rysunku.
      </div>

      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-11_14-02-50.png"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <div className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong>
            <BlockMath math="\begin{cases} y = x + 1 \\ y = -2x + 4 \end{cases}" />
          </div>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <div className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong>
            <BlockMath math="\begin{cases} y = x - 1 \\ y = 2x + 4 \end{cases}" />
          </div>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <div className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong>
            <BlockMath math="\begin{cases} y = x - 1 \\ y = -2x + 4 \end{cases}" />
          </div>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <div className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong>
            <BlockMath math="\begin{cases} y = x + 1 \\ y = 2x + 4 \end{cases}" />
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza równań</h2>
      <p className="mb-2">
        Aby określić, który układ równań odpowiada rysunkowi, należy przeanalizować nachylenie i
        punkty przecięcia prostych z osiami.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Porównanie z rysunkiem</h2>
      <p className="mb-2">
        Na rysunku widzimy dwie proste: jedna ma nachylenie dodatnie i przecina oś{' '}
        <InlineMath math="y" /> w punkcie <InlineMath math="1" />, a druga ma nachylenie ujemne i
        przecina oś <InlineMath math="y" /> w punkcie <InlineMath math="4" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wybór właściwego układu</h2>
      <p className="mb-2">Układ równań, który spełnia te warunki, to:</p>
      <BlockMath math="\begin{cases} y = x + 1 \\ y = -2x + 4 \end{cases}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Geometryczną interpretację przedstawiono dla układu równań <strong>A</strong>.
      </p>
    </div>
  );
};

export default Solution;
