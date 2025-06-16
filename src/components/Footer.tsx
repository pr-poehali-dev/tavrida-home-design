import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-tavrida-blue text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-tavrida-gold rounded-lg flex items-center justify-center">
                <Icon name="Home" className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-merriweather font-bold">
                ТавридаДом
              </span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Современный комфорт в сердце древней Тавриды. Создаем дома мечты в
              самых живописных уголках Крыма.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tavrida-gold transition-colors"
              >
                <Icon name="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tavrida-gold transition-colors"
              >
                <Icon name="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-tavrida-gold transition-colors"
              >
                <Icon name="MessageCircle" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-merriweather font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tavrida-gold transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tavrida-gold transition-colors"
                >
                  Каталог новостроек
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tavrida-gold transition-colors"
                >
                  Акции
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tavrida-gold transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-tavrida-gold transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-merriweather font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" className="w-4 h-4 text-tavrida-gold" />
                <a
                  href="tel:+78003334455"
                  className="text-white/80 hover:text-tavrida-gold transition-colors"
                >
                  +7 (800) 333-44-55
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" className="w-4 h-4 text-tavrida-gold" />
                <a
                  href="mailto:info@tavridadom.ru"
                  className="text-white/80 hover:text-tavrida-gold transition-colors"
                >
                  info@tavridadom.ru
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Icon
                  name="MapPin"
                  className="w-4 h-4 text-tavrida-gold mt-1"
                />
                <span className="text-white/80">
                  г. Симферополь, <br />
                  ул. Киевская, 120
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 ТавридаДом. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
