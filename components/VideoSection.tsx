interface VideoSectionProps {
  youtubeId: string;
}

const VideoSection = ({ youtubeId }: VideoSectionProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="text-center mb-5">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">📚 Wprowadzenie teoretyczne</h2>
        <p className="text-gray-600 text-lg">
          Obejrzyj nagranie przed rozpoczęciem rozwiązywania zadań
        </p>
      </div>

      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={'https://www.youtube.com/embed/' + youtubeId}
            title="Wyjaśnienie działań na liczbach rzeczywistych"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
