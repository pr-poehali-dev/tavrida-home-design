import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Как с нами связаться</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">
                    +7 (800) 123-45-67 (бесплатно)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@realestate.ru</p>
                  <p className="text-gray-600">sales@realestate.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес офиса</h3>
                  <p className="text-gray-600">
                    г. Москва, ул. Тверская, д. 15, офис 301
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Время работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                  <p className="text-gray-600">Сб-Вс: 10:00 - 17:00</p>
                </div>
              </div>
            </div>

            {/* Карта */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">
                    Карта с местоположением офиса
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Форма обратной связи */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Имя *
                      </label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон *
                      </label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input placeholder="your@email.com" type="email" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Тема обращения
                    </label>
                    <Input placeholder="О чем хотите узнать?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      placeholder="Опишите ваш вопрос подробнее..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Отправить сообщение
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Быстрый ответ:</strong> Обычно мы отвечаем в
                    течение 2 часов в рабочее время. Для срочных вопросов
                    звоните по телефону.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
