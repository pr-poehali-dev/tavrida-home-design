import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Filter, RotateCcw } from "lucide-react";

interface FilterBarProps {
  onFiltersChange?: (filters: any) => void;
}

export default function FilterBar({ onFiltersChange }: FilterBarProps) {
  const [city, setCity] = useState("");
  const [priceRange, setPriceRange] = useState([1000000, 10000000]);
  const [rooms, setRooms] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const handleReset = () => {
    setCity("");
    setPriceRange([1000000, 10000000]);
    setRooms("");
    setDeliveryDate("");
    onFiltersChange?.({});
  };

  const handleApplyFilters = () => {
    onFiltersChange?.({
      city,
      priceRange,
      rooms,
      deliveryDate,
    });
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5" />
          <h3 className="font-semibold text-lg">Фильтры</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Город</label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите город" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moscow">Москва</SelectItem>
                <SelectItem value="spb">Санкт-Петербург</SelectItem>
                <SelectItem value="kazan">Казань</SelectItem>
                <SelectItem value="ekb">Екатеринбург</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Количество комнат
            </label>
            <Select value={rooms} onValueChange={setRooms}>
              <SelectTrigger>
                <SelectValue placeholder="Комнаты" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 комната</SelectItem>
                <SelectItem value="2">2 комнаты</SelectItem>
                <SelectItem value="3">3 комнаты</SelectItem>
                <SelectItem value="4">4+ комнат</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Срок сдачи</label>
            <Select value={deliveryDate} onValueChange={setDeliveryDate}>
              <SelectTrigger>
                <SelectValue placeholder="Срок сдачи" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024 год</SelectItem>
                <SelectItem value="2025">2025 год</SelectItem>
                <SelectItem value="2026">2026 год</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end gap-2">
            <Button onClick={handleApplyFilters} className="flex-1">
              Применить
            </Button>
            <Button variant="outline" size="icon" onClick={handleReset}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Цена: {priceRange[0].toLocaleString("ru-RU")} -{" "}
            {priceRange[1].toLocaleString("ru-RU")} ₽
          </label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={20000000}
            min={500000}
            step={100000}
            className="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
}
