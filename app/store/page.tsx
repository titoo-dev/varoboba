import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
	Store,
	ShoppingBag,
	MapPin,
	Phone,
	Mail,
	Clock,
	Star,
	Heart,
	Share2,
	Filter,
	Grid3X3,
	List,
} from 'lucide-react';

export default function StorePage() {
	// Mock store data
	const storeData = {
		id: '1',
		name: 'Artisanat Malgache',
		description:
			'Artisanat authentique malgache, fait à la main par des artisans locaux selon des techniques ancestrales. Nous proposons une large gamme de produits uniques et de qualité, représentatifs de la richesse culturelle de Madagascar.',
		logo: '/images/stores/artisanat-logo.jpg',
		banner: '/images/stores/artisanat-banner.jpg',
		rating: 4.8,
		reviews: 124,
		location: 'Antananarivo, Madagascar',
		createdAt: '2022-03-15',
		verified: true,
		categories: ['Artisanat', 'Décoration', 'Mode'],
		contactInfo: {
			email: 'contact@artisanatmalgache.com',
			phone: '+261 32 40 560 78',
			address: 'Lot III H 39, Analakely, Antananarivo 101',
			openingHours: 'Lun-Sam: 9h-18h | Dim: Fermé',
		},
		socialLinks: {
			facebook: 'https://facebook.com/artisanatmalgache',
			instagram: 'https://instagram.com/artisanatmalgache',
		},
	};

	// Mock products data
	const products = [
		{
			id: 1,
			name: 'Chapeau de paille tressé',
			price: 45000,
			rating: 4.8,
			reviews: 24,
			image: '/images/products/hat.jpg',
			category: 'Artisanat',
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
			isFeatured: true,
			isNew: false,
		},
		{
			id: 3,
			name: 'Statue en bois de palissandre',
			price: 120000,
			rating: 4.6,
			reviews: 8,
			image: '/images/products/statue.jpg',
			category: 'Artisanat',
			isFeatured: false,
			isNew: false,
		},
		{
			id: 4,
			name: 'Écharpe en soie sauvage',
			price: 75000,
			rating: 4.7,
			reviews: 19,
			image: '/images/products/scarf.jpg',
			category: 'Textile',
			isFeatured: true,
			isNew: false,
		},
		{
			id: 5,
			name: 'Coussin brodé traditionnel',
			price: 40000,
			rating: 4.3,
			reviews: 12,
			image: '/images/products/pillow.jpg',
			category: 'Textile',
			isFeatured: false,
			isNew: true,
		},
		{
			id: 6,
			name: 'Figurine en corne de zébu',
			price: 85000,
			rating: 4.9,
			reviews: 31,
			image: '/images/products/figurine.jpg',
			category: 'Artisanat',
			isFeatured: true,
			isNew: false,
		},
	];

	return (
		<div className="flex flex-col min-h-screen">
			{/* Store banner and info section */}
			<section className="relative">
				{/* Banner image with gradient overlay */}
				<div className="h-48 md:h-64 w-full relative overflow-hidden">
					{/* Background with decorative patterns */}
					<div className="absolute inset-0 bg-primary/5">
						<div
							className="absolute inset-0 opacity-20"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
								backgroundSize: '30px 30px',
							}}
						/>
					</div>

					{/* Gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-background"></div>

					{/* Decorative elements */}
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40"></div>

					{/* Content */}
					<div className="relative h-full w-full flex items-center justify-center">
						<div className="text-3xl md:text-4xl font-bold text-foreground">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
								{storeData.name}
							</span>
						</div>
					</div>

					{/* Bottom decorative wave */}
					<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
						<svg
							className="relative block w-full h-6 text-background"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
								opacity=".25"
								className="fill-background"
							></path>
							<path
								d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
								opacity=".5"
								className="fill-background"
							></path>
							<path
								d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
								className="fill-background"
							></path>
						</svg>
					</div>
				</div>

				<div className="container px-4 mx-auto -mt-16 md:-mt-20 relative z-10">
					<div className="flex flex-col md:flex-row gap-6 md:items-end">
						{/* Store logo */}
						<div className="h-24 w-24 md:h-32 md:w-32 rounded-xl overflow-hidden border-4 border-background shadow-lg bg-primary/10 flex items-center justify-center">
							<Store className="h-12 w-12 text-primary" />
						</div>

						{/* Store name and basic info */}
						<div className="flex-1 space-y-2">
							<div className="flex items-center flex-wrap gap-2">
								<h1 className="text-2xl md:text-3xl font-bold">
									{storeData.name}
								</h1>
								{storeData.verified && (
									<Badge className="bg-primary text-primary-foreground">
										Vérifié
									</Badge>
								)}
							</div>
							<div className="flex items-center gap-4 flex-wrap text-sm text-muted-foreground">
								<div className="flex items-center gap-1">
									<MapPin className="h-4 w-4" />
									<span>{storeData.location}</span>
								</div>
								<div className="flex items-center gap-1">
									<Star className="h-4 w-4 fill-primary text-primary" />
									<span>
										{storeData.rating} ({storeData.reviews}{' '}
										avis)
									</span>
								</div>
								<div className="flex items-center gap-1">
									<Clock className="h-4 w-4" />
									<span>
										Depuis{' '}
										{new Date(
											storeData.createdAt
										).toLocaleDateString()}
									</span>
								</div>
							</div>
						</div>

						{/* Actions */}
						<div className="flex gap-2 mt-4 md:mt-0">
							<Button
								variant="outline"
								size="sm"
								className="gap-2"
							>
								<Heart className="h-4 w-4" />
								<span className="hidden sm:inline">
									Favoris
								</span>
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="gap-2"
							>
								<Share2 className="h-4 w-4" />
								<span className="hidden sm:inline">
									Partager
								</span>
							</Button>
							<Button size="sm" className="gap-2">
								<ShoppingBag className="h-4 w-4" />
								<span className="hidden sm:inline">
									Acheter
								</span>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Main content */}
			<section className="py-8">
				<div className="container px-4 mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Sidebar with store info */}
						<div className="space-y-6">
							{/* About the store */}
							<Card>
								<CardContent className="p-4 space-y-4">
									<h2 className="font-semibold text-lg">
										À propos
									</h2>
									<p className="text-muted-foreground text-sm">
										{storeData.description}
									</p>
									<Separator />
									<div className="space-y-3">
										<div className="flex items-start gap-2">
											<MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
											<div className="text-sm">
												<p className="font-medium">
													Adresse
												</p>
												<p className="text-muted-foreground">
													{
														storeData.contactInfo
															.address
													}
												</p>
											</div>
										</div>
										<div className="flex items-start gap-2">
											<Phone className="h-4 w-4 mt-1 text-muted-foreground" />
											<div className="text-sm">
												<p className="font-medium">
													Téléphone
												</p>
												<p className="text-muted-foreground">
													{
														storeData.contactInfo
															.phone
													}
												</p>
											</div>
										</div>
										<div className="flex items-start gap-2">
											<Mail className="h-4 w-4 mt-1 text-muted-foreground" />
											<div className="text-sm">
												<p className="font-medium">
													Email
												</p>
												<p className="text-muted-foreground">
													{
														storeData.contactInfo
															.email
													}
												</p>
											</div>
										</div>
										<div className="flex items-start gap-2">
											<Clock className="h-4 w-4 mt-1 text-muted-foreground" />
											<div className="text-sm">
												<p className="font-medium">
													Heures d'ouverture
												</p>
												<p className="text-muted-foreground">
													{
														storeData.contactInfo
															.openingHours
													}
												</p>
											</div>
										</div>
									</div>
									<Separator />
									<div className="space-y-2">
										<h3 className="font-medium text-sm">
											Catégories
										</h3>
										<div className="flex flex-wrap gap-2">
											{storeData.categories.map(
												(category) => (
													<Badge
														key={category}
														variant="outline"
														className="bg-primary/5"
													>
														{category}
													</Badge>
												)
											)}
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Payment and delivery info */}
							<Card>
								<CardContent className="p-4 space-y-4">
									<h2 className="font-semibold text-lg">
										Paiement & Livraison
									</h2>
									<div className="space-y-3">
										<h3 className="text-sm font-medium">
											Méthodes de paiement acceptées
										</h3>
										<div className="flex gap-2">
											<Badge
												variant="outline"
												className="bg-primary/5"
											>
												MVola
											</Badge>
											<Badge
												variant="outline"
												className="bg-primary/5"
											>
												Orange Money
											</Badge>
											<Badge
												variant="outline"
												className="bg-primary/5"
											>
												Espèces
											</Badge>
										</div>
									</div>
									<Separator />
									<div className="space-y-3">
										<h3 className="text-sm font-medium">
											Options de livraison
										</h3>
										<div className="flex gap-2">
											<Badge
												variant="outline"
												className="bg-primary/5"
											>
												Retrait en boutique
											</Badge>
											<Badge
												variant="outline"
												className="bg-primary/5"
											>
												Livraison locale
											</Badge>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Products section */}
						<div className="lg:col-span-2">
							<Tabs defaultValue="all" className="space-y-6">
								<div className="flex justify-between items-center">
									<TabsList>
										<TabsTrigger value="all">
											Tous les produits
										</TabsTrigger>
										<TabsTrigger value="featured">
											Produits en vedette
										</TabsTrigger>
										<TabsTrigger value="new">
											Nouveautés
										</TabsTrigger>
									</TabsList>
									<div className="flex items-center gap-2">
										<Button
											variant="ghost"
											size="icon"
											className="text-muted-foreground"
										>
											<Grid3X3 className="h-4 w-4" />
										</Button>
										<Button
											variant="ghost"
											size="icon"
											className="text-muted-foreground"
										>
											<List className="h-4 w-4" />
										</Button>
										<Button
											variant="outline"
											size="sm"
											className="gap-1"
										>
											<Filter className="h-4 w-4" />
											<span>Filtrer</span>
										</Button>
									</div>
								</div>

								<TabsContent
									value="all"
									className="mt-6 space-y-6"
								>
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
										{products.map((product) => (
											<Link
												href={`/product/${product.id}`}
												key={product.id}
												className="group"
											>
												<Card className="overflow-hidden h-full transition-all hover:shadow-md">
													<div className="relative aspect-square overflow-hidden bg-muted">
														<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
															<div className="text-lg font-medium text-primary/50">
																{product.name}
															</div>
														</div>
														{product.isNew && (
															<Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
																Nouveau
															</Badge>
														)}
													</div>
													<CardContent className="p-4">
														<div className="space-y-1">
															<h3 className="font-medium truncate group-hover:text-primary transition-colors">
																{product.name}
															</h3>
															<div className="flex items-center gap-1 text-sm">
																<Star className="h-3 w-3 fill-primary text-primary" />
																<span>
																	{
																		product.rating
																	}{' '}
																	(
																	{
																		product.reviews
																	}
																	)
																</span>
															</div>
															<p className="font-semibold">
																{product.price.toLocaleString()}{' '}
																Ar
															</p>
														</div>
														<div className="mt-3 flex justify-between items-center">
															<Badge
																variant="outline"
																className="bg-primary/5 text-xs"
															>
																{
																	product.category
																}
															</Badge>
															<Button
																size="sm"
																className="rounded-full h-8 w-8 p-0"
																variant="outline"
															>
																<Heart className="h-4 w-4" />
															</Button>
														</div>
													</CardContent>
												</Card>
											</Link>
										))}
									</div>
								</TabsContent>

								<TabsContent
									value="featured"
									className="mt-6 space-y-6"
								>
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
																<div className="text-lg font-medium text-primary/50">
																	{
																		product.name
																	}
																</div>
															</div>
															<Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
																En vedette
															</Badge>
														</div>
														<CardContent className="p-4">
															<div className="space-y-1">
																<h3 className="font-medium truncate group-hover:text-primary transition-colors">
																	{
																		product.name
																	}
																</h3>
																<div className="flex items-center gap-1 text-sm">
																	<Star className="h-3 w-3 fill-primary text-primary" />
																	<span>
																		{
																			product.rating
																		}{' '}
																		(
																		{
																			product.reviews
																		}
																		)
																	</span>
																</div>
																<p className="font-semibold">
																	{product.price.toLocaleString()}{' '}
																	Ar
																</p>
															</div>
															<div className="mt-3 flex justify-between items-center">
																<Badge
																	variant="outline"
																	className="bg-primary/5 text-xs"
																>
																	{
																		product.category
																	}
																</Badge>
																<Button
																	size="sm"
																	className="rounded-full h-8 w-8 p-0"
																	variant="outline"
																>
																	<Heart className="h-4 w-4" />
																</Button>
															</div>
														</CardContent>
													</Card>
												</Link>
											))}
									</div>
								</TabsContent>

								<TabsContent
									value="new"
									className="mt-6 space-y-6"
								>
									<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
															<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
																<div className="text-lg font-medium text-primary/50">
																	{
																		product.name
																	}
																</div>
															</div>
															<Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
																Nouveau
															</Badge>
														</div>
														<CardContent className="p-4">
															<div className="space-y-1">
																<h3 className="font-medium truncate group-hover:text-primary transition-colors">
																	{
																		product.name
																	}
																</h3>
																<div className="flex items-center gap-1 text-sm">
																	<Star className="h-3 w-3 fill-primary text-primary" />
																	<span>
																		{
																			product.rating
																		}{' '}
																		(
																		{
																			product.reviews
																		}
																		)
																	</span>
																</div>
																<p className="font-semibold">
																	{product.price.toLocaleString()}{' '}
																	Ar
																</p>
															</div>
															<div className="mt-3 flex justify-between items-center">
																<Badge
																	variant="outline"
																	className="bg-primary/5 text-xs"
																>
																	{
																		product.category
																	}
																</Badge>
																<Button
																	size="sm"
																	className="rounded-full h-8 w-8 p-0"
																	variant="outline"
																>
																	<Heart className="h-4 w-4" />
																</Button>
															</div>
														</CardContent>
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
