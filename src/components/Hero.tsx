import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fab9f049a6df2b7096f6e1a6ed6c4ed"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-tavrida-blue/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-merriweather font-bold mb-6 animate-fade-in">
          ТавридаДом
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in opacity-90">
          Современный комфорт в сердце древней Тавриды
        </p>
        <Button
          size="lg"
          className="bg-tavrida-gold hover:bg-tavrida-gold/90 text-white px-8 py-4 text-lg animate-scale-in"
        >
          <Icon name="Search" className="w-5 h-5 mr-2" />
          Выбрать квартиру
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-80">Листайте вниз</span>
          <Icon name="ChevronDown" className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
