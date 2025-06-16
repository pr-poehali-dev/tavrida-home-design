import { useState } from "react";
import { Heart, MapPin, Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  rooms: number;
  area: number;
  deliveryDate: string;
  onFavoriteToggle?: (id: string) => void;
  isFavorite?: boolean;
}

export default function PropertyCard({
  id,
  image,
  title,
  location,
  price,
  rooms,
  area,
  deliveryDate,
  onFavoriteToggle,
  isFavorite = false,
}: PropertyCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
    onFavoriteToggle?.(id);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          onClick={handleFavoriteClick}
        >
          <Heart
            className={`h-4 w-4 ${favorite ? "fill-red-500 text-red-500" : "text-gray-600"}`}
          />
        </Button>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-gray-600">
            <Home className="h-4 w-4 mr-1" />
            <span className="text-sm">
              {rooms} комн. • {area} м²
            </span>
          </div>

          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-sm">{deliveryDate}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            {price.toLocaleString("ru-RU")} ₽
          </span>
          <Button size="sm">Подробнее</Button>
        </div>
      </CardContent>
    </Card>
  );
}
