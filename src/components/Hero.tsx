import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
          alt="Современные новостройки ТавридаДом"
          className="w-full h-full object-cover"
        />
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
