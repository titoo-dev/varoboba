import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
	Heart,
	Search,
	ShoppingBag,
	SlidersHorizontal,
	Star,
	X,
} from 'lucide-react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ExplorePage() {
	// Mock data for products
	const products = [
		{
			id: 1,
			name: 'Chapeau de paille tressé',
			price: 45000,
			rating: 4.8,
			reviews: 24,
			image: '/images/products/hat.jpg',
			category: 'Artisanat',
			store: 'Artisanat Malgache',
			location: 'Antananarivo',
			isFeatured: true,
			isNew: true,
		},
		{
			id: 2,
			name: 'Sac en raphia coloré',
			price: 60000,
			rating: 4.5,
			reviews: 16,
			image: '/images/products/bag.jpg',
			category: 'Artisanat',
			store: 'Création Mada',
			location: 'Toamasina',
			isFeatured: true,
			isNew: false,
		},
		{
			id: 3,
			name: 'Épices malgaches premium',
			price: 25000,
			rating: 4.9,
			reviews: 32,
			image: '/images/products/spices.jpg',
			category: 'Alimentation',
			store: "Saveurs de l'Île",
			location: 'Antananarivo',
			isFeatured: false,
			isNew: true,
		},
		{
			id: 4,
			name: 'Écharpe en soie sauvage',
			price: 75000,
			rating: 4.7,
			reviews: 19,
			image: '/images/products/scarf.jpg',
			category: 'Textile',
			store: 'Soie de Tana',
			location: 'Antsirabe',
			isFeatured: true,
			isNew: false,
		},
		{
			id: 5,
			name: 'Statue en bois de palissandre',
			price: 120000,
			rating: 4.6,
			reviews: 8,
			image: '/images/products/statue.jpg',
			category: 'Artisanat',
			store: "Sculpteurs de l'Est",
			location: 'Toamasina',
			isFeatured: false,
			isNew: false,
		},
		{
			id: 6,
			name: 'Huile essentielle de ravintsara',
			price: 35000,
			rating: 5.0,
			reviews: 47,
			image: '/images/products/oil.jpg',
			category: 'Beauté',
			store: 'Plantes Malgaches',
			location: 'Mahajanga',
			isFeatured: true,
			isNew: true,
		},
		{
			id: 7,
			name: 'Vanille gourmet de Madagascar',
			price: 85000,
			rating: 4.9,
			reviews: 56,
			image: '/images/products/vanilla.jpg',
			category: 'Alimentation',
			store: 'Vanille Premium',
			location: 'Toliara',
			isFeatured: true,
			isNew: false,
		},
		{
			id: 8,
			name: 'Coussin brodé traditionnel',
			price: 40000,
			rating: 4.3,
			reviews: 12,
			image: '/images/products/pillow.jpg',
			category: 'Textile',
			store: 'Art Textile Malgache',
			location: 'Antananarivo',
			isFeatured: false,
			isNew: true,
		},
	];

	// Replace image paths with fallback when images are not available
	const getImagePath = (path: string) => {
		return `https://source.unsplash.com/random/300x300/?${
			path.split('/').pop()?.split('.')[0] || 'product'
		}`;
	};

	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero section with search */}
			<section className="w-full py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
				<div className="container px-4 mx-auto">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
							Explorer les produits
						</h1>
						<p className="text-lg text-muted-foreground">
							Découvrez des produits uniques et authentiques
							fabriqués à Madagascar
						</p>

						<div className="relative max-w-xl mx-auto">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
							<Input
								type="search"
								placeholder="Rechercher un produit, une catégorie ou une boutique..."
								className="pl-10 py-6 text-base"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Main content */}
			<section className="flex-1 py-8">
				<div className="container px-4 mx-auto">
					<div className="flex flex-col lg:flex-row gap-8">
						{/* Filter sidebar */}
						<div className="lg:w-1/4 space-y-6">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<SlidersHorizontal className="h-5 w-5" />
									<h2 className="text-lg font-semibold">
										Filtres
									</h2>
								</div>
								<Button
									variant="ghost"
									size="sm"
									className="text-xs"
								>
									Réinitialiser
								</Button>
							</div>

							<Separator />

							{/* Categories */}
							<div className="space-y-3">
								<h3 className="text-sm font-medium">
									Catégories
								</h3>
								<div className="space-y-2">
									{[
										'Tous',
										'Artisanat',
										'Alimentation',
										'Textile',
										'Électronique',
										'Beauté & Santé',
									].map((category) => (
										<div
											key={category}
											className="flex items-center"
										>
											<Button
												variant={
													category === 'Artisanat'
														? 'default'
														: 'ghost'
												}
												size="sm"
												className="text-sm justify-start w-full"
											>
												{category}
											</Button>
										</div>
									))}
								</div>
							</div>

							<Separator />

							{/* Price range */}
							<div className="space-y-4">
								<h3 className="text-sm font-medium">
									Prix (Ar)
								</h3>
								<Slider
									defaultValue={[0, 75]}
									max={100}
									step={1}
									className="w-full"
								/>
								<div className="flex items-center justify-between">
									<div className="text-sm">0 Ar</div>
									<div className="text-sm">200 000 Ar</div>
								</div>
							</div>

							<Separator />

							{/* Location */}
							<div className="space-y-3">
								<h3 className="text-sm font-medium">
									Localisation
								</h3>
								<Select defaultValue="all">
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Sélectionner une ville" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">
											Toutes les villes
										</SelectItem>
										<SelectItem value="antananarivo">
											Antananarivo
										</SelectItem>
										<SelectItem value="toamasina">
											Toamasina
										</SelectItem>
										<SelectItem value="antsirabe">
											Antsirabe
										</SelectItem>
										<SelectItem value="mahajanga">
											Mahajanga
										</SelectItem>
										<SelectItem value="toliara">
											Toliara
										</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<Separator />

							{/* Ratings */}
							<div className="space-y-3">
								<h3 className="text-sm font-medium">
									Évaluation
								</h3>
								<div className="space-y-2">
									{[4, 3, 2, 1].map((rating) => (
										<div
											key={rating}
											className="flex items-center"
										>
											<Button
												variant="ghost"
												size="sm"
												className="text-sm justify-start w-full"
											>
												<div className="flex items-center gap-2">
													{Array(rating)
														.fill(0)
														.map((_, i) => (
															<Star
																key={i}
																className="h-4 w-4 fill-primary text-primary"
															/>
														))}
													{Array(5 - rating)
														.fill(0)
														.map((_, i) => (
															<Star
																key={i}
																className="h-4 w-4 text-muted-foreground"
															/>
														))}
													<span>et plus</span>
												</div>
											</Button>
										</div>
									))}
								</div>
							</div>

							<Separator className="lg:hidden" />
						</div>

						{/* Product grid */}
						<div className="lg:w-3/4">
							{/* Filter options and sort */}
							<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
								<div className="flex flex-wrap gap-2">
									<Badge
										variant="outline"
										className="flex items-center gap-1 px-3 py-1 bg-primary/5 border-primary/20"
									>
										Artisanat
										<X className="h-3 w-3 ml-1" />
									</Badge>
									<Badge
										variant="outline"
										className="flex items-center gap-1 px-3 py-1 bg-primary/5 border-primary/20"
									>
										Prix: &lt; 100 000 Ar
										<X className="h-3 w-3 ml-1" />
									</Badge>
								</div>
								<div className="flex items-center gap-2">
									<Select defaultValue="popular">
										<SelectTrigger className="w-[180px]">
											<SelectValue placeholder="Trier par" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="popular">
												Popularité
											</SelectItem>
											<SelectItem value="recent">
												Plus récents
											</SelectItem>
											<SelectItem value="price-low">
												Prix croissant
											</SelectItem>
											<SelectItem value="price-high">
												Prix décroissant
											</SelectItem>
											<SelectItem value="rating">
												Meilleures notes
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>

							{/* Tabs */}
							<Tabs defaultValue="all" className="mb-6">
								<TabsList className="grid w-full grid-cols-3">
									<TabsTrigger value="all">
										Tous les produits
									</TabsTrigger>
									<TabsTrigger value="featured">
										En vedette
									</TabsTrigger>
									<TabsTrigger value="new">
										Nouveautés
									</TabsTrigger>
								</TabsList>

								{/* All products tab */}
								<TabsContent value="all" className="pt-6">
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
										{products.map((product) => (
											<Link
												href={`/product/${product.id}`}
												key={product.id}
												className="group"
											>
                                                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                                                    <div className="relative aspect-square overflow-hidden bg-muted">
                                                        {/* Beautiful placeholder instead of image */}
                                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                                            <div className="text-center p-4">
                                                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                                                                    <ShoppingBag className="h-6 w-6 text-primary" />
                                                                </div>
                                                                <p className="text-sm font-medium text-foreground/80 line-clamp-2">
                                                                    {product.name}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="absolute top-2 right-2">
                                                            <Button
                                                                size="icon"
                                                                variant="secondary"
                                                                className="h-8 w-8 rounded-full opacity-80 backdrop-blur-sm"
                                                            >
                                                                <Heart className="h-4 w-4" />
                                                            </Button>
                                                        </div>
                                                        {product.isNew && (
                                                            <Badge className="absolute top-2 left-2">
                                                                Nouveau
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <CardContent className="p-4">
                                                        <div className="space-y-1">
                                                            <p className="text-sm text-muted-foreground">
                                                                {product.category}
                                                            </p>
                                                            <h3 className="font-medium truncate">
                                                                {product.name}
                                                            </h3>
                                                            <div className="flex items-center gap-1">
                                                                <Star className="h-4 w-4 fill-primary text-primary" />
                                                                <span className="text-sm">
                                                                    {product.rating}
                                                                </span>
                                                                <span className="text-sm text-muted-foreground">
                                                                    ({product.reviews})
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter className="p-4 pt-0 flex items-center justify-between">
                                                        <p className="font-semibold">
                                                            {new Intl.NumberFormat(
                                                                'fr-MG',
                                                                {
                                                                    style: 'currency',
                                                                    currency: 'MGA',
                                                                    maximumFractionDigits: 0,
                                                                }
                                                            ).format(product.price)}
                                                        </p>
                                                        <Button
                                                            size="sm"
                                                            className="rounded-full h-8 w-8 p-0"
                                                        >
                                                            <ShoppingBag className="h-4 w-4" />
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
											</Link>
										))}
									</div>
								</TabsContent>

								{/* Featured products tab */}
								<TabsContent value="featured" className="pt-6">
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
										{products
											.filter((p) => p.isFeatured)
											.map((product) => (
												<Link
													href={`/product/${product.id}`}
													key={product.id}
													className="group"
												>
                                                    <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                                                        <div className="relative aspect-square overflow-hidden bg-muted">
                                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                                                <div className="text-center p-4">
                                                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                                                                        <ShoppingBag className="h-6 w-6 text-primary" />
                                                                    </div>
                                                                    <p className="text-sm font-medium text-foreground/80 line-clamp-2">
                                                                        {product.name}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="absolute top-2 right-2">
                                                                <Button
                                                                    size="icon"
                                                                    variant="secondary"
                                                                    className="h-8 w-8 rounded-full opacity-80 backdrop-blur-sm"
                                                                >
                                                                    <Heart className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                            {product.isFeatured && (
                                                                <Badge className="absolute top-2 left-2 bg-amber-500 hover:bg-amber-500/90">
                                                                    En vedette
                                                                </Badge>
                                                            )}
                                                        </div>
                                                        <CardContent className="p-4">
                                                            <div className="space-y-1">
                                                                <p className="text-sm text-muted-foreground">
                                                                    {product.category}
                                                                </p>
                                                                <h3 className="font-medium truncate">
                                                                    {product.name}
                                                                </h3>
                                                                <div className="flex items-center gap-1">
                                                                    <Star className="h-4 w-4 fill-primary text-primary" />
                                                                    <span className="text-sm">
                                                                        {product.rating}
                                                                    </span>
                                                                    <span className="text-sm text-muted-foreground">
                                                                        ({product.reviews})
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                        <CardFooter className="p-4 pt-0 flex items-center justify-between">
                                                            <p className="font-semibold">
                                                                {new Intl.NumberFormat(
                                                                    'fr-MG',
                                                                    {
                                                                        style: 'currency',
                                                                        currency: 'MGA',
                                                                        maximumFractionDigits: 0,
                                                                    }
                                                                ).format(product.price)}
                                                            </p>
                                                            <Button
                                                                size="sm"
                                                                className="rounded-full h-8 w-8 p-0"
                                                            >
                                                                <ShoppingBag className="h-4 w-4" />
                                                            </Button>
                                                        </CardFooter>
                                                    </Card>
												</Link>
											))}
									</div>
								</TabsContent>

								{/* New products tab */}
								<TabsContent value="new" className="pt-6">
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
										{products
											.filter((p) => p.isNew)
											.map((product) => (
												<Link
													href={`/product/${product.id}`}
													key={product.id}
													className="group"
												>
                                                    <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                                                        <div className="relative aspect-square overflow-hidden bg-muted">
                                                            {/* Beautiful placeholder instead of image */}
                                                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                                                                <div className="relative w-full h-full overflow-hidden">
                                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                                        <div className="text-center p-4">
                                                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center mx-auto mb-3">
                                                                                <span className="text-white font-bold text-lg">New</span>
                                                                            </div>
                                                                            <p className="text-sm font-medium text-foreground/80">
                                                                                {product.name}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm bg-opacity-5"></div>
                                                                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background to-transparent"></div>
                                                                </div>
                                                            </div>
                                                            <div className="absolute top-2 right-2">
                                                                <Button
                                                                    size="icon"
                                                                    variant="secondary"
                                                                    className="h-8 w-8 rounded-full opacity-80 backdrop-blur-sm"
                                                                >
                                                                    <Heart className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                            <Badge className="absolute top-2 left-2 bg-emerald-500 hover:bg-emerald-500/90">
                                                                Nouveau
                                                            </Badge>
                                                        </div>
                                                        <CardContent className="p-4">
                                                            <div className="space-y-1">
                                                                <p className="text-sm text-muted-foreground">
                                                                    {product.category}
                                                                </p>
                                                                <h3 className="font-medium truncate">
                                                                    {product.name}
                                                                </h3>
                                                                <div className="flex items-center gap-1">
                                                                    <Star className="h-4 w-4 fill-primary text-primary" />
                                                                    <span className="text-sm">
                                                                        {product.rating}
                                                                    </span>
                                                                    <span className="text-sm text-muted-foreground">
                                                                        ({product.reviews})
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                        <CardFooter className="p-4 pt-0 flex items-center justify-between">
                                                            <p className="font-semibold">
                                                                {new Intl.NumberFormat(
                                                                    'fr-MG',
                                                                    {
                                                                        style: 'currency',
                                                                        currency: 'MGA',
                                                                        maximumFractionDigits: 0,
                                                                    }
                                                                ).format(product.price)}
                                                            </p>
                                                            <Button
                                                                size="sm"
                                                                className="rounded-full h-8 w-8 p-0"
                                                            >
                                                                <ShoppingBag className="h-4 w-4" />
                                                            </Button>
                                                        </CardFooter>
                                                    </Card>
												</Link>
											))}
									</div>
								</TabsContent>
							</Tabs>

							{/* Pagination */}
							<div className="flex items-center justify-center gap-2 mt-12">
								<Button variant="outline" size="icon" disabled>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</Button>
								<Button variant="default">1</Button>
								<Button variant="outline">2</Button>
								<Button variant="outline">3</Button>
								<Button variant="outline" size="icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
