import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const mapProjects = [
  {
    id: 1,
    name: "Морской Бриз",
    location: "Севастополь",
    coordinates: { top: "45%", left: "15%" },
    price: "от 8 500 000 ₽",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Золотые Пески",
    location: "Ялта",
    coordinates: { top: "75%", left: "45%" },
    price: "от 12 800 000 ₽",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Парк Резиденс",
    location: "Симферополь",
    coordinates: { top: "35%", left: "40%" },
    price: "от 6 200 000 ₽",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const ProjectsMap = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-merriweather font-bold text-tavrida-blue mb-4">
            Карта наших проектов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите удобное расположение в любой части Крыма
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Map Background */}
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 min-h-[500px]">
            {/* Crimea Shape Placeholder */}
            <div className="absolute inset-4 bg-tavrida-beige rounded-lg shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Карта Крыма"
                className="w-full h-full object-cover rounded-lg opacity-20"
              />
            </div>

            {/* Project Markers */}
            {mapProjects.map((project) => (
              <div
                key={project.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{
                  top: project.coordinates.top,
                  left: project.coordinates.left,
                }}
                onClick={() =>
                  setSelectedProject(
                    selectedProject === project.id ? null : project.id,
                  )
                }
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-tavrida-gold rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Icon name="MapPin" className="w-4 h-4 text-white" />
                  </div>
                  {selectedProject === project.id && (
                    <Card className="absolute top-10 left-1/2 transform -translate-x-1/2 w-64 shadow-xl z-20 animate-scale-in">
                      <CardContent className="p-0">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                          <h3 className="font-merriweather font-bold text-tavrida-blue mb-1">
                            {project.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2 flex items-center">
                            <Icon name="MapPin" className="w-3 h-3 mr-1" />
                            {project.location}
                          </p>
                          <p className="text-lg font-bold text-tavrida-gold">
                            {project.price}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Нажмите на маркер, чтобы увидеть информацию о проекте
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsMap;
