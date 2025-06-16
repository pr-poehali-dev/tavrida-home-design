import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PromoSection = () => {
  return (
    <section className="py-16 px-4 bg-tavrida-beige">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Террasa с видом на море"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  🔥 Ограниченное предложение
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-merriweather font-bold text-tavrida-blue mb-4">
                Парковочное место в подарок
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                При покупке квартиры в ЖК "Морской Бриз" до 31 декабря 2024 года
                — машиноместо в подземном паркинге в подарок
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center text-tavrida-gold">
                  <Icon name="Gift" className="w-5 h-5 mr-2" />
                  <span>Экономия до 500 000 ₽</span>
                </div>
                <div className="flex items-center text-tavrida-gold">
                  <Icon name="Clock" className="w-5 h-5 mr-2" />
                  <span>До 31 декабря</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-tavrida-gold hover:bg-tavrida-gold/90 text-white w-fit"
              >
                Узнать подробнее
                <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
