import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const stats = [
  {
    value: "10+",
    label: "лет на рынке",
    icon: "Calendar",
  },
  {
    value: "12",
    label: "сданных объектов",
    icon: "Building",
  },
  {
    value: "1500+",
    label: "счастливых семей",
    icon: "Users",
  },
  {
    value: "98%",
    label: "довольных клиентов",
    icon: "Heart",
  },
];

const AboutUs = () => {
  return (
    <section className="py-16 px-4 bg-tavrida-beige">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Команда ТавридаДом"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-tavrida-gold rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Award" className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-merriweather font-bold text-tavrida-blue mb-6">
              Надежность, проверенная временем
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ТавридаДом — это команда профессионалов, которая создает
              современные жилые комплексы в самых живописных уголках Крыма. Мы
              строим не просто дома, а создаем пространство для счастливой
              жизни.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex justify-center mb-2">
                    <Icon
                      name={stat.icon as any}
                      className="w-8 h-8 text-tavrida-gold"
                    />
                  </div>
                  <div className="text-2xl font-bold text-tavrida-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-tavrida-blue text-tavrida-blue hover:bg-tavrida-blue hover:text-white"
            >
              Наша история
              <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
