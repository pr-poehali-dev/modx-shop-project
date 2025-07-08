import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cartItems, setCartItems] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const products = [
    {
      id: 1,
      name: "Hi-Tech Smartphone X1",
      price: 89999,
      category: "smartphones",
      image: "/img/d988bdf3-b176-433f-b66d-b1fb2e4dec74.jpg",
      description: "Революционный смартфон с голографическим дисплеем",
      features: ["5G", "AI", "Holographic Display", "256GB"],
    },
    {
      id: 2,
      name: "Quantum Laptop Pro",
      price: 149999,
      category: "laptops",
      image: "/img/79ba1855-d454-4e35-abb3-a6971350531c.jpg",
      description: "Ультрасовременный ноутбук с квантовым процессором",
      features: ["Quantum CPU", "32GB RAM", "1TB SSD", "Holographic UI"],
    },
    {
      id: 3,
      name: "Neural Headphones V3",
      price: 45999,
      category: "audio",
      image: "/img/93851f1f-11e1-4952-a6ef-ce95536373a9.jpg",
      description: "Беспроводные наушники с нейроинтерфейсом",
      features: [
        "Neural Link",
        "Active Noise Cancellation",
        "48h Battery",
        "Spatial Audio",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "Все товары", icon: "Grid3x3" },
    { id: "smartphones", name: "Смартфоны", icon: "Smartphone" },
    { id: "laptops", name: "Ноутбуки", icon: "Laptop" },
    { id: "audio", name: "Аудио", icon: "Headphones" },
  ];

  const addToCart = (productId: number) => {
    setCartItems((prev) => prev + 1);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-effect border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">HI-TECH STORE</h1>
              <Badge variant="secondary" className="tech-gradient text-white">
                Будущее уже здесь
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                />
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 tech-border"
                />
              </div>

              <Button
                variant="outline"
                size="icon"
                className="relative hover-glow"
              >
                <Icon name="ShoppingCart" className="h-4 w-4" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs tech-gradient">
                    {cartItems}
                  </Badge>
                )}
              </Button>

              <Button variant="outline" size="icon" className="hover-glow">
                <Icon name="User" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-background via-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Технологии Будущего
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Погрузитесь в мир высоких технологий с нашей коллекцией
              инновационных устройств
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="tech-gradient hover-glow">
                <Icon name="Zap" className="mr-2 h-4 w-4" />
                Открыть каталог
              </Button>
              <Button size="lg" variant="outline" className="hover-glow">
                <Icon name="Play" className="mr-2 h-4 w-4" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card className="glass-effect hover-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Filter" className="h-5 w-5" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h4 className="font-semibold mb-3">Категории</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={
                          selectedCategory === category.id ? "default" : "ghost"
                        }
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <Icon name={category.icon} className="mr-2 h-4 w-4" />
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-semibold mb-3">Цена</h4>
                  <div className="space-y-3">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={200000}
                      min={0}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{priceRange[0].toLocaleString()} ₽</span>
                      <span>{priceRange[1].toLocaleString()} ₽</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3">Особенности</h4>
                  <div className="space-y-2">
                    {["5G", "AI", "Holographic", "Neural Link", "Quantum"].map(
                      (feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            id={feature}
                            className="rounded border-border"
                          />
                          <label htmlFor={feature} className="text-sm">
                            {feature}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Каталог товаров</h3>
              <Select defaultValue="popular">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Популярные</SelectItem>
                  <SelectItem value="price-low">Сначала дешевые</SelectItem>
                  <SelectItem value="price-high">Сначала дорогие</SelectItem>
                  <SelectItem value="newest">Новинки</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="glass-effect hover-glow group overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                      >
                        <Icon name="Heart" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {product.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {product.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary">
                          {product.price.toLocaleString()} ₽
                        </div>
                        <Button
                          onClick={() => addToCart(product.id)}
                          className="tech-gradient hover-glow"
                        >
                          <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />В
                          корзину
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">HI-TECH STORE</h4>
              <p className="text-muted-foreground">
                Ваш проводник в мир высоких технологий
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Каталог</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Смартфоны
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Ноутбуки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Аудио
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Аксессуары
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Поддержка</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Гарантия
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Контакты</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="mr-2 h-4 w-4" />
                  info@hitech-store.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="mr-2 h-4 w-4" />
                  Москва, Технопарк 1
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex justify-between items-center">
            <p className="text-muted-foreground">
              © 2024 HI-TECH STORE. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost">
                <Icon name="Github" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Twitter" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Icon name="Instagram" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
