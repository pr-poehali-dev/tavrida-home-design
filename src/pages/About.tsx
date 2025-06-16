import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Home, Star } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Александр Петров",
      position: "Генеральный директор",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
      experience: "15 лет",
    },
    {
      name: "Мария Сидорова",
      position: "Директор по продажам",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=200",
      experience: "12 лет",
    },
    {
      name: "Дмитрий Козлов",
      position: "Главный архитектор",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      experience: "18 лет",
    },
  ];

  const testimonials = [
    {
      name: "Анна Михайлова",
      text: "Отличная компания! Помогли выбрать идеальную квартиру для нашей семьи. Профессиональный подход на всех этапах.",
      rating: 5,
    },
    {
      name: "Игорь Волков",
      text: 'Купили квартиру в ЖК "Солнечный квартал". Качество строительства превосходное, все сроки соблюдены.',
      rating: 5,
    },
    {
      name: "Елена Новикова",
      text: "Благодарим за помощь в оформлении ипотеки. Менеджеры очень внимательные и компетентные.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">О компании</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Уже более 15 лет мы помогаем людям находить дом мечты, создавая
            качественные жилые комплексы по всей России
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">лет на рынке</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">сданных комплексов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10000+</div>
            <div className="text-gray-600">счастливых семей</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
            <div className="text-gray-600">городов России</div>
          </div>
        </div>

        {/* История и миссия */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Наша история</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Компания была основана в 2009 году с простой идеей: сделать
                качественное жилье доступным для каждой семьи.
              </p>
              <p>
                За годы работы мы выросли от небольшой строительной компании до
                одного из ведущих девелоперов России, но наши ценности остались
                неизменными.
              </p>
              <p>
                Сегодня мы гордимся тем, что помогли тысячам семей обрести свой
                дом мечты в комфортных и современных жилых комплексах.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Home className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Качество превыше всего</h3>
                  <p className="text-gray-600">
                    Используем только проверенные материалы и работаем с лучшими
                    подрядчиками
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">
                    Клиент в центре внимания
                  </h3>
                  <p className="text-gray-600">
                    Индивидуальный подход к каждому клиенту и сопровождение на
                    всех этапах
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">
                    Инновации в строительстве
                  </h3>
                  <p className="text-gray-600">
                    Применяем современные технологии для создания
                    энергоэффективного и экологичного жилья
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Команда */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.position}</p>
                  <Badge variant="secondary">Опыт {member.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Отзывы клиентов */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold">— {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
