import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  Share2,
  Heart,
  ShoppingBag,
  Filter,
  Search,
  ArrowUpDown,
  ChevronRight,
  ShieldCheck,
  Package,
} from "lucide-react";

export default function StorePage() {
  // Mock data for the store and products
  const store = {
    id: "artisanat-malgache",
    name: "Artisanat Malgache",
    description:
      "Spécialiste de l'artisanat traditionnel malgache depuis 2015. Nous proposons des produits authentiques fabriqués par des artisans locaux avec des matériaux naturels et durables.",
    rating: 4.8,
    reviewCount: 156,
    verified: true,
    location: "Antananarivo, Madagascar",
    contactPhone: "034 XX XXX XX",
    openingHours: "Lun-Ven 9h-18h, Sam 9h-12h",
    joinedDate: "Janvier 2022",
    bannerUrl:
      "https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=1200&auto=format&fit=crop",
    logoUrl:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=200&h=200&auto=format&fit=crop",
    categories: ["Vannerie", "Bijoux", "Sculptures", "Textile"],
    paymentMethods: ["MVola", "Orange Money", "Airtel Money"],
    deliveryOptions: ["Retrait en boutique", "Livraison Antananarivo"],
  };

  const products = [
    {
      id: "panier-raphia-01",
      name: "Panier Tressé en Raphia",
      price: 45000,
      discountPrice: 38000,
      rating: 4.9,
      reviewCount: 28,
      imageSrc:
        "https://images.unsplash.com/photo-1652741089945-f0bb800d9e0e?w=300&h=300&auto=format&fit=crop",
      tags: ["Bestseller", "Fait main"],
      isNew: false,
    },
    {
      id: "collier-perles-02",
      name: "Collier Perles de Sable",
      price: 35000,
      discountPrice: null,
      rating: 4.7,
      reviewCount: 14,
      imageSrc:
        "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=300&h=300&auto=format&fit=crop",
      tags: ["Fait main"],
      isNew: true,
    },
    {
      id: "sculpture-bois-03",
      name: "Sculpture Baobab en Bois de Palissandre",
      price: 125000,
      discountPrice: null,
      rating: 5.0,
      reviewCount: 7,
      imageSrc:
        "https://images.unsplash.com/photo-1588361861040-ac9b1018dcde?w=300&h=300&auto=format&fit=crop",
      tags: ["Édition limitée", "Fait main"],
      isNew: false,
    },
    {
      id: "echarpe-soie-04",
      name: "Écharpe en Soie Sauvage",
      price: 75000,
      discountPrice: 65000,
      rating: 4.6,
      reviewCount: 19,
      imageSrc:
        "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?w=300&h=300&auto=format&fit=crop",
      tags: ["Fait main"],
      isNew: false,
    },
    {
      id: "bracelet-pierre-05",
      name: "Bracelet Pierre de Labradorite",
      price: 28000,
      discountPrice: null,
      rating: 4.5,
      reviewCount: 23,
      imageSrc:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&auto=format&fit=crop",
      tags: ["Bestseller", "Fait main"],
      isNew: true,
    },
    {
      id: "chapeau-paille-06",
      name: "Chapeau de Paille Tressé",
      price: 35000,
      discountPrice: 29500,
      rating: 4.8,
      reviewCount: 16,
      imageSrc:
        "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?w=300&h=300&auto=format&fit=crop",
      tags: ["Fait main"],
      isNew: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Store Banner */}
      <div className="relative w-full h-60 md:h-80 overflow-hidden bg-card border-b border-border">
        {/* Background pattern */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 opacity-5">
          {Array(18)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border border-primary/10"></div>
            ))}
        </div>

        {/* Store initial decorative element */}
        <div className="absolute right-0 top-0 transform translate-x-1/4 -translate-y-1/4 w-64 h-64 rounded-full bg-primary/10 flex items-center justify-center">
          <div className="text-primary text-opacity-20 text-8xl font-bold">
            {store.name.slice(0, 1)}
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/30 to-background/80"></div>

        {/* Store info */}
        <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between">
          <div className="flex items-end gap-4">
            <Avatar className="h-24 w-24 border-4 border-background shadow-md bg-primary">
              {store.logoUrl ? (
                <AvatarImage src={store.logoUrl} alt={store.name} />
              ) : null}
              <AvatarFallback className="text-2xl font-bold text-primary-foreground">
                {store.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight text-foreground">
                  {store.name}
                </h1>
                {store.verified && (
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 mr-1" />
                    Vérifié
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(store.rating)
                          ? "text-chart-4 fill-chart-4"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{store.rating}</span>
                <span>({store.reviewCount} avis)</span>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button variant="secondary" size="sm" className="gap-1.5">
              <Heart className="h-4 w-4" />
              <span className="hidden md:inline">Favoris</span>
            </Button>
            <Button variant="secondary" size="sm" className="gap-1.5">
              <Share2 className="h-4 w-4" />
              <span className="hidden md:inline">Partager</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardContent className="p-5 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-lg">À propos</h3>
                  <p className="text-sm text-muted-foreground">
                    {store.description}
                  </p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div className="text-sm">{store.location}</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div className="text-sm">{store.contactPhone}</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div className="text-sm">{store.openingHours}</div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium text-sm text-muted-foreground">
                    Catégories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {store.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium text-sm text-muted-foreground">
                    Paiement accepté
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {store.paymentMethods.map((method) => (
                      <Badge key={method} variant="outline">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium text-sm text-muted-foreground">
                    Livraison
                  </h3>
                  <div className="flex flex-col gap-2">
                    {store.deliveryOptions.map((option) => (
                      <div
                        key={option}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Package className="h-4 w-4 text-muted-foreground" />
                        {option}
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="text-xs text-muted-foreground">
                  Membre depuis {store.joinedDate}
                </div>
              </CardContent>
            </Card>

            <div className="sm:hidden flex gap-2 justify-between">
              <Button variant="outline" size="sm" className="flex-1 gap-1.5">
                <Heart className="h-4 w-4" />
                Favoris
              </Button>
              <Button variant="outline" size="sm" className="flex-1 gap-1.5">
                <Share2 className="h-4 w-4" />
                Partager
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-6">
            <Tabs defaultValue="products" className="w-full">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="products">Produits</TabsTrigger>
                  <TabsTrigger value="reviews">Avis</TabsTrigger>
                  <TabsTrigger value="about">Informations</TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filtrer</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <ArrowUpDown className="h-4 w-4" />
                    <span className="hidden sm:inline">Trier</span>
                  </Button>
                  <div className="relative hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <input
                      type="search"
                      placeholder="Rechercher dans la boutique..."
                      className="pl-9 h-9 w-[200px] rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
              </div>

              <TabsContent value="products" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <Link
                      href={`/market/product/${product.id}`}
                      key={product.id}
                    >
                      <Card className="overflow-hidden h-full transition-all duration-200 hover:border-primary/30 hover:shadow-md group">
                        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-950/40 dark:to-violet-950/40">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 text-white text-opacity-80">
                              <ShoppingBag className="h-8 w-8 text-white/80" />
                            </div>
                            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-10">
                              {Array(9)
                                .fill(0)
                                .map((_, i) => (
                                  <div
                                    key={i}
                                    className="border border-primary/5"
                                  ></div>
                                ))}
                            </div>
                          </div>
                          {product.isNew && (
                            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                              Nouveau
                            </div>
                          )}
                          {product.discountPrice && (
                            <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                              -
                              {Math.round(
                                (1 - product.discountPrice / product.price) *
                                  100
                              )}
                              %
                            </div>
                          )}
                          <Button
                            variant="secondary"
                            size="icon"
                            className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          >
                            <ShoppingBag className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <h3 className="font-medium line-clamp-1">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              {product.discountPrice ? (
                                <>
                                  <span className="font-bold">
                                    {product.discountPrice.toLocaleString()} Ar
                                  </span>
                                  <span className="text-sm text-muted-foreground line-through">
                                    {product.price.toLocaleString()} Ar
                                  </span>
                                </>
                              ) : (
                                <span className="font-bold">
                                  {product.price.toLocaleString()} Ar
                                </span>
                              )}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                              <span className="ml-1 font-medium">
                                {product.rating}
                              </span>
                              <span className="ml-1">
                                ({product.reviewCount})
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {product.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>

                <div className="flex items-center justify-center mt-8">
                  <Button variant="outline" className="gap-2">
                    Voir plus de produits
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center items-center h-60 text-muted-foreground">
                      Avis clients à venir prochainement
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center items-center h-60 text-muted-foreground">
                      Informations détaillées à venir prochainement
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
