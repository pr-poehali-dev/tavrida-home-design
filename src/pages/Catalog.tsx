import { useState } from "react";
import FilterBar from "@/components/FilterBar";
import PropertyCard from "@/components/PropertyCard";

export default function Catalog() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const properties = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
      title: 'ЖК "Солнечный квартал"',
      location: "Москва, Новые Черемушки",
      price: 8500000,
      rooms: 2,
      area: 65,
      deliveryDate: "IV кв. 2024",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400",
      title: 'ЖК "Северный парк"',
      location: "Санкт-Петербург, Приморский",
      price: 12000000,
      rooms: 3,
      area: 85,
      deliveryDate: "II кв. 2025",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      title: 'ЖК "Зеленая долина"',
      location: "Казань, Советский",
      price: 5500000,
      rooms: 1,
      area: 42,
      deliveryDate: "III кв. 2024",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=400",
      title: 'ЖК "Городские высоты"',
      location: "Екатеринбург, Центр",
      price: 15000000,
      rooms: 4,
      area: 120,
      deliveryDate: "I кв. 2026",
    },
  ];

  const handleFavoriteToggle = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Каталог недвижимости</h1>

        <FilterBar />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              isFavorite={favorites.includes(property.id)}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
