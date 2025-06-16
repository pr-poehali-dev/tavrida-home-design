import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Gift, Percent } from "lucide-react";

export default function Promotions() {
  const promotions = [
    {
      id: 1,
      title: "Скидка 15% на первоначальный взнос",
      description:
        "Специальное предложение для покупателей квартир в новых жилых комплексах. Акция действует до конца месяца.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600",
      discount: "15%",
      validUntil: "31 декабря 2024",
      conditions: [
        "Покупка от 3 млн рублей",
        "Первый взнос не менее 30%",
        "Оформление ипотеки в банке-партнере",
      ],
    },
    {
      id: 2,
      title: "Бонус: мебель в подарок",
      description:
        "При покупке квартиры от 5 млн рублей получите комплект мебели стоимостью до 500 тыс. рублей в подарок.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
      bonus: "Мебель",
      validUntil: "15 января 2025",
      conditions: [
        "Покупка от 5 млн рублей",
        "Подписание договора до 15.01.2025",
        "Выбор из каталога партнера",
      ],
    },
    {
      id: 3,
      title: "Рассрочка 0% на 2 года",
      description:
        "Уникальная возможность приобрести недвижимость в рассрочку без переплат и процентов.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c80e03?w=600",
      rate: "0%",
      validUntil: "28 февраля 2025",
      conditions: [
        "Первоначальный взнос 50%",
        "Срок рассрочки до 24 месяцев",
        "Без скрытых комиссий",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Акции и спецпредложения</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выгодные условия покупки недвижимости с максимальной экономией для
            вас
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {promotions.map((promo) => (
            <Card
              key={promo.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  {promo.discount && (
                    <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                      <Percent className="h-4 w-4 mr-1" />
                      {promo.discount}
                    </Badge>
                  )}
                  {promo.bonus && (
                    <Badge className="bg-green-500 text-white text-lg px-3 py-1">
                      <Gift className="h-4 w-4 mr-1" />
                      {promo.bonus}
                    </Badge>
                  )}
                  {promo.rate && (
                    <Badge className="bg-blue-500 text-white text-lg px-3 py-1">
                      {promo.rate}
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Действует до {promo.validUntil}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Условия акции:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {promo.conditions.map((condition, index) => (
                      <li key={index}>• {condition}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1">Узнать подробнее</Button>
                  <Button variant="outline">Заказать звонок</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Не нашли подходящее предложение? Свяжитесь с нами для
            индивидуального расчета
          </p>
          <Button size="lg">Связаться с менеджером</Button>
        </div>
      </div>
    </div>
  );
}
