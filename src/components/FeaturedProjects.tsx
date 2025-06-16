import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: 1,
    name: "Морской Бриз",
    location: "Севастополь",
    price: "от 8 500 000 ₽",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rooms: "1-3",
    area: "45-120 м²",
    status: "Строится",
  },
  {
    id: 2,
    name: "Золотые Пески",
    location: "Ялта",
    price: "от 12 800 000 ₽",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rooms: "2-4",
    area: "65-180 м²",
    status: "Сдан",
  },
  {
    id: 3,
    name: "Парк Резиденс",
    location: "Симферополь",
    price: "от 6 200 000 ₽",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rooms: "1-4",
    area: "38-150 м²",
    status: "Строится",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-merriweather font-bold text-tavrida-blue mb-4">
            Наши лучшие проекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Избранные жилые комплексы в самых живописных уголках Крыма
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Сдан"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-merriweather font-bold text-tavrida-blue mb-2">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 flex items-center">
                  <Icon name="MapPin" className="w-4 h-4 mr-1" />
                  {project.location}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Icon name="Home" className="w-4 h-4 mr-1" />
                    {project.rooms} комн
                  </div>
                  <div className="flex items-center">
                    <Icon name="Maximize" className="w-4 h-4 mr-1" />
                    {project.area}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-tavrida-gold">
                    {project.price}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-tavrida-gold text-tavrida-gold hover:bg-tavrida-gold hover:text-white"
                  >
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-tavrida-blue text-tavrida-blue hover:bg-tavrida-blue hover:text-white"
          >
            Все проекты
            <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
