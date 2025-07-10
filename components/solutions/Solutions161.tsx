import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest okrąg o środku <InlineMath math="S" />. Punkty <InlineMath math="K" />,{' '}
        <InlineMath math="L" /> i <InlineMath math="M" /> leżą na tym okręgu. Na łuku{' '}
        <InlineMath math="KL" /> tego okręgu są oparte kąty <InlineMath math="KSL" /> i{' '}
        <InlineMath math="KML" /> (zobacz rysunek), których miary <InlineMath math="\alpha" /> i{' '}
        <InlineMath math="\beta" /> spełniają warunek{' '}
        <InlineMath math="\alpha + \beta = 111^\circ" />. Wynika stąd, że
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\alpha = 74^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\alpha = 76^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\alpha = 70^\circ" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\alpha = 72^\circ" />
          </p>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <img
          src="https://akademiazadan.pl/media/task_images/Screenshot_from_2025-03-13_20-01-07.png"
          alt="okrąg o środku S"
          className="rounded-lg"
          width={350}
          height={350}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Zastosowanie twierdzenia o kątach środkowych i wpisanych
      </h2>
      <p className="mb-2">
        Zgodnie z twierdzeniem o kącie środkowym i wpisanym opartym na tym samym łuku:
      </p>
      <BlockMath math="\alpha = 2\beta" />
      <p className="mb-2">
        Kąt środkowy <InlineMath math="\alpha" /> jest dwa razy większy od kąta wpisanego{' '}
        <InlineMath math="\beta" /> opartego na tym samym łuku.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Ułożenie i rozwiązanie układu równań
      </h2>
      <p className="mb-2">Mamy układ równań:</p>
      <BlockMath
        math="\begin{cases}
      \alpha + \beta = 111^\circ \\
      \alpha = 2\beta
      \end{cases}"
      />
      <p className="mb-2">Podstawiamy drugie równanie do pierwszego:</p>
      <BlockMath math="2\beta + \beta = 111^\circ" />
      <BlockMath math="3\beta = 111^\circ" />
      <BlockMath math="\beta = 37^\circ" />
      <p className="mb-2">
        Obliczamy <InlineMath math="\alpha" />:
      </p>
      <BlockMath math="\alpha = 2 \times 37^\circ = 74^\circ" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Weryfikacja odpowiedzi</h2>
      <p className="mb-2">Sprawdzamy otrzymany wynik:</p>
      <BlockMath math="74^\circ + 37^\circ = 111^\circ" />
      <p className="mb-2">Co zgadza się z warunkami zadania.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wynika stąd, że <InlineMath math="\alpha = 74^\circ" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
