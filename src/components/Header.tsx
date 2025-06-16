import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tavrida-blue rounded-lg flex items-center justify-center">
              <Icon name="Home" className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-merriweather font-bold text-tavrida-blue">
              ТавридаДом
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-tavrida-gold transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-foreground hover:text-tavrida-gold transition-colors"
            >
              Каталог новостроек
            </a>
            <a
              href="#"
              className="text-foreground hover:text-tavrida-gold transition-colors"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-foreground hover:text-tavrida-gold transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-foreground hover:text-tavrida-gold transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+78003334455"
              className="text-foreground hover:text-tavrida-gold transition-colors font-medium"
            >
              +7 (800) 333-44-55
            </a>
            <Button className="bg-tavrida-gold hover:bg-tavrida-gold/90 text-white">
              Заказать звонок
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-foreground hover:text-tavrida-gold transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-foreground hover:text-tavrida-gold transition-colors"
              >
                Каталог новостроек
              </a>
              <a
                href="#"
                className="text-foreground hover:text-tavrida-gold transition-colors"
              >
                Акции
              </a>
              <a
                href="#"
                className="text-foreground hover:text-tavrida-gold transition-colors"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-foreground hover:text-tavrida-gold transition-colors"
              >
                Контакты
              </a>
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:+78003334455"
                  className="block text-foreground hover:text-tavrida-gold transition-colors font-medium mb-3"
                >
                  +7 (800) 333-44-55
                </a>
                <Button className="bg-tavrida-gold hover:bg-tavrida-gold/90 text-white w-full">
                  Заказать звонок
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
