import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Calendar, Phone, Heart } from "lucide-react";

export default function PropertyDetails() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Галерея */}
          <div>
            <div className="mb-4">
              <img
                src={images[selectedImage]}
                alt="Недвижимость"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Фото ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Основная информация */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  ЖК "Солнечный квартал"
                </h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Москва, Новые Черемушки</span>
                </div>
              </div>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">
                <Home className="h-3 w-3 mr-1" />2 комнаты
              </Badge>
              <Badge variant="secondary">65 м²</Badge>
              <Badge variant="secondary">
                <Calendar className="h-3 w-3 mr-1" />
                IV кв. 2024
              </Badge>
            </div>

            <div className="text-3xl font-bold text-blue-600 mb-6">
              8 500 000 ₽
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                <Phone className="h-4 w-4 mr-2" />
                Заказать звонок
              </Button>
              <Button variant="outline" size="lg">
                Забронировать
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">О комплексе</TabsTrigger>
            <TabsTrigger value="apartments">Квартиры</TabsTrigger>
            <TabsTrigger value="progress">Ход строительства</TabsTrigger>
            <TabsTrigger value="location">Расположение</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  О жилом комплексе
                </h3>
                <p className="text-gray-600 mb-4">
                  Современный жилой комплекс в экологически чистом районе
                  Москвы. Продуманная планировка, качественные материалы и
                  развитая инфраструктура.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Преимущества:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Собственная детская площадка</li>
                      <li>• Подземный паркинг</li>
                      <li>• Консьерж-сервис</li>
                      <li>• Фитнес-центр</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Инфраструктура:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Школа в 5 минутах</li>
                      <li>• Поликлиника рядом</li>
                      <li>• Торговый центр</li>
                      <li>• Парк и река</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apartments" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Выбор квартир</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer"
                    >
                      <div className="text-lg font-medium mb-2">
                        Квартира {i}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        2 комн. • 65 м²
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        8 500 000 ₽
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Ход строительства
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">Фундамент - завершено</div>
                      <div className="text-sm text-gray-600">Июнь 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">
                        Монолитные работы - в процессе
                      </div>
                      <div className="text-sm text-gray-600">Октябрь 2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="font-medium">Отделочные работы</div>
                      <div className="text-sm text-gray-600">Декабрь 2024</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="location" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Расположение</h3>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500">
                    Карта (интеграция с картами)
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Транспорт:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• М. Новые Черемушки - 8 мин</li>
                      <li>• Автобусная остановка - 2 мин</li>
                      <li>• До центра - 25 мин</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Окружение:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Битцевский парк - 10 мин</li>
                      <li>• ТЦ "Глобус" - 5 мин</li>
                      <li>• Школа №1234 - 3 мин</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
