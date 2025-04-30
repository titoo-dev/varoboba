import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
	Heart,
	Share2,
	ShoppingCart,
	Truck,
	Star,
	MessageCircle,
	Store,
	ChevronRight,
	Shield,
	Undo2,
	Info,
} from 'lucide-react';

export default function ProductPage() {
	// Mock product data
	const product = {
		id: 1,
		name: 'Chapeau de paille tressé traditionnel',
		price: 45000,
		originalPrice: 60000,
		description:
			'Chapeau de paille tressé à la main par des artisans malgaches. Fabriqué à partir de fibres naturelles locales, ce chapeau traditionnel offre une protection optimale contre le soleil tout en restant léger et confortable.',
		rating: 4.8,
		reviews: 24,
		stock: 15,
		images: [
			'/images/products/hat-1.jpg',
			'/images/products/hat-2.jpg',
			'/images/products/hat-3.jpg',
			'/images/products/hat-4.jpg',
		],
		category: 'Artisanat',
		subcategory: 'Accessoires',
		tags: ['Fait main', 'Matériaux naturels', 'Tradition'],
		store: {
			name: 'Artisanat Malgache',
			rating: 4.9,
			products: 48,
			location: 'Antananarivo',
			verified: true,
			joinDate: '2022-03-15',
		},
		variants: [
			{ name: 'Taille', options: ['S', 'M', 'L', 'XL'] },
			{
				name: 'Couleur',
				options: ['Naturel', 'Teinté foncé', 'Teinté clair'],
			},
			{ name: 'Style', options: ['Classique', 'Moderne', 'Décoré'] },
		],
		specifications: [
			{ name: 'Matériau', value: 'Paille de riz naturelle' },
			{ name: 'Dimensions', value: '30cm (diamètre) x 15cm (hauteur)' },
			{ name: 'Poids', value: '150g' },
			{ name: 'Entretien', value: 'Nettoyage à sec uniquement' },
			{ name: 'Origine', value: 'Région de Vakinankaratra' },
		],
		relatedProducts: [
			{
				id: 2,
				name: 'Sac en raphia coloré',
				price: 60000,
				image: '/images/products/bag.jpg',
			},
			{
				id: 8,
				name: 'Coussin brodé traditionnel',
				price: 40000,
				image: '/images/products/pillow.jpg',
			},
			{
				id: 4,
				name: 'Écharpe en soie sauvage',
				price: 75000,
				image: '/images/products/scarf.jpg',
			},
		],
	};

	// Replace image paths with fallback when images are not available
	const getImagePath = (path: string) => {
		return `https://source.unsplash.com/random/600x600/?hat,straw,craft${
			path.includes('hat-2')
				? '&texture'
				: path.includes('hat-3')
				? '&detail'
				: path.includes('hat-4')
				? '&style'
				: ''
		}`;
	};

	// State for current image (in a real app, use useState)
	const currentImage = getImagePath(product.images[0]);

	return (
		<div className="flex flex-col min-h-screen">
			{/* Breadcrumb */}
			<div className="container py-4 px-4 mx-auto max-w-7xl">
				<nav className="flex items-center text-sm text-muted-foreground">
					<Link
						href="/"
						className="hover:text-foreground transition-colors"
					>
						Accueil
					</Link>
					<ChevronRight className="h-4 w-4 mx-1" />
					<Link
						href="/explore"
						className="hover:text-foreground transition-colors"
					>
						Explorer
					</Link>
					<ChevronRight className="h-4 w-4 mx-1" />
					<Link
						href="/explore/artisanat"
						className="hover:text-foreground transition-colors"
					>
						Artisanat
					</Link>
					<ChevronRight className="h-4 w-4 mx-1" />
					<span className="text-foreground font-medium truncate">
						{product.name}
					</span>
				</nav>
			</div>

			{/* Product details */}
			<section className="container px-4 mx-auto max-w-7xl pb-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
					{/* Product images */}
					<div className="space-y-4">
						<div className="relative aspect-square overflow-hidden rounded-lg border border-border/60 bg-gradient-to-br from-muted/60 to-muted/30">
							{/* Placeholder design instead of image */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-full h-full flex flex-col items-center justify-center">
									<div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center mb-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="text-muted-foreground/60"
										>
											<path d="M15 2H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"></path>
											<path d="M8 9V5c0-2.5-2-3-3-3v14c1 0 3-.5 3-3v-4Z"></path>
											<path d="M16 9V5c0-2.5 2-3 3-3v14c-1 0-3-.5-3-3v-4Z"></path>
										</svg>
									</div>
									<p className="text-muted-foreground text-sm text-center px-8">
										Chapeau de paille tressé traditionnel
									</p>
									<p className="text-xs text-muted-foreground/60 mt-2">
										Image en cours de chargement
									</p>
								</div>
							</div>
							<div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
								<Badge className="bg-primary text-primary-foreground">
									-25%
								</Badge>
								<Badge variant="secondary">Fait main</Badge>
							</div>
							<Button
								variant="ghost"
								size="icon"
								className="absolute top-4 right-4 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
							>
								<Heart className="h-5 w-5" />
							</Button>
						</div>

						{/* Thumbnails */}
						<div className="grid grid-cols-4 gap-2">
							{product.images.map((img, i) => (
								<div
									key={i}
									className={`cursor-pointer relative aspect-square overflow-hidden rounded-md border transition-all ${
										i === 0
											? 'border-primary bg-primary/5'
											: 'border-border/60 bg-muted/20 hover:border-primary/50'
									}`}
								>
									<div className="absolute inset-0 flex items-center justify-center p-2">
										<div className="w-full h-full bg-gradient-to-br from-muted/40 to-muted flex flex-col items-center justify-center">
											{i === 0 && (
												<div className="absolute top-1 right-1 w-3 h-3 bg-primary rounded-full ring-2 ring-primary/20" />
											)}
											<div className="w-8 h-8 rounded-full bg-muted-foreground/10 flex items-center justify-center mb-1">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="text-muted-foreground/60"
												>
													{i % 4 === 0 ? (
														<path d="M15 2H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
													) : i % 4 === 1 ? (
														<rect
															width="18"
															height="18"
															x="3"
															y="3"
															rx="2"
														/>
													) : i % 4 === 2 ? (
														<circle
															cx="12"
															cy="12"
															r="10"
														/>
													) : (
														<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
													)}
												</svg>
											</div>
											<span className="text-xs text-muted-foreground/60 text-center leading-tight">
												Vue {i + 1}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Product info */}
					<div className="flex flex-col justify-between">
						<div>
							<div className="mb-4">
								<div className="flex items-center justify-between mb-2">
									<Link
										href={`/store/${product.store.name}`}
										className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
									>
										<Store className="h-3.5 w-3.5" />
										{product.store.name}
										{product.store.verified && (
											<Badge
												variant="outline"
												className="ml-1 py-0 px-1 h-4 border-primary/30 bg-primary/5"
											>
												<span className="text-xs">
													Vérifié
												</span>
											</Badge>
										)}
									</Link>

									<div className="flex items-center gap-1">
										<Button
											variant="ghost"
											size="icon"
											className="h-8 w-8"
										>
											<Share2 className="h-4 w-4" />
										</Button>
									</div>
								</div>
								<h1 className="text-3xl font-bold tracking-tight">
									{product.name}
								</h1>
							</div>

							<div className="flex items-center gap-2 mb-4">
								<div className="flex items-center">
									{Array(5)
										.fill(0)
										.map((_, i) => (
											<Star
												key={i}
												className={`h-4 w-4 ${
													i <
													Math.floor(product.rating)
														? 'fill-primary text-primary'
														: i < product.rating
														? 'fill-primary/50 text-primary/50'
														: 'text-muted-foreground'
												}`}
											/>
										))}
								</div>
								<div className="text-sm text-muted-foreground">
									{product.rating} ({product.reviews} avis)
								</div>
								<Separator
									orientation="vertical"
									className="h-4"
								/>
								<div className="text-sm text-muted-foreground">
									En stock:{' '}
									<span className="text-foreground font-medium">
										{product.stock}
									</span>
								</div>
							</div>

							<div className="mb-6">
								<div className="flex items-center gap-3">
									<span className="text-2xl font-bold">
										{product.price.toLocaleString()} Ar
									</span>
									{product.originalPrice && (
										<span className="text-base text-muted-foreground line-through">
											{product.originalPrice.toLocaleString()}{' '}
											Ar
										</span>
									)}
								</div>
								<div className="text-sm text-muted-foreground mt-1">
									TVA incluse, frais de livraison calculés à
									la caisse
								</div>
							</div>

							<Separator className="my-6" />

							{/* Product variants */}
							<div className="space-y-6">
								{product.variants.map((variant) => (
									<div
										key={variant.name}
										className="space-y-2"
									>
										<div className="font-medium text-sm">
											{variant.name}
										</div>
										<div className="flex flex-wrap gap-2">
											{variant.options.map((option) => (
												<Badge
													key={option}
													variant={
														option ===
														variant.options[0]
															? 'default'
															: 'outline'
													}
													className={`rounded-md cursor-pointer px-3 py-1.5 ${
														option ===
														variant.options[0]
															? ''
															: 'hover:bg-secondary hover:text-secondary-foreground'
													}`}
												>
													{option}
												</Badge>
											))}
										</div>
									</div>
								))}
							</div>

							<Separator className="my-6" />

							<div className="space-y-2 mb-8">
								<h3 className="font-medium text-sm">
									Description
								</h3>
								<p className="text-muted-foreground">
									{product.description}
								</p>
							</div>
						</div>

						{/* Add to cart */}
						<div className="mt-8 space-y-4">
							<div className="grid grid-cols-2 gap-4">
								<Button className="w-full gap-2">
									<ShoppingCart className="h-5 w-5" />
									Ajouter au panier
								</Button>
								<Button variant="outline" className="w-full">
									Acheter maintenant
								</Button>
							</div>

							{/* Shipping info */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Truck className="h-4 w-4 text-primary" />
									<span>
										Livraison disponible à Antananarivo
									</span>
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Shield className="h-4 w-4 text-primary" />
									<span>Paiement sécurisé garanti</span>
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Undo2 className="h-4 w-4 text-primary" />
									<span>Retour sous 7 jours</span>
								</div>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<MessageCircle className="h-4 w-4 text-primary" />
									<span>Questions? Contactez le vendeur</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Product details tabs */}
			<section className="bg-muted/30 border-t border-b border-border py-12">
				<div className="container px-4 mx-auto max-w-7xl">
					<Tabs defaultValue="details" className="w-full">
						<TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
							<TabsTrigger value="details">Détails</TabsTrigger>
							<TabsTrigger value="specifications">
								Spécifications
							</TabsTrigger>
							<TabsTrigger value="reviews">
								Avis ({product.reviews})
							</TabsTrigger>
						</TabsList>

						<TabsContent value="details" className="mt-6">
							<div className="max-w-3xl mx-auto">
								<div className="bg-card border border-border rounded-lg p-6">
									<h3 className="text-xl font-semibold mb-4">
										À propos de ce produit
									</h3>
									<p className="text-muted-foreground mb-6">
										{product.description}
									</p>
									<p className="text-muted-foreground mb-6">
										Fruit d'un savoir-faire ancestral, ce
										chapeau de paille tressé est entièrement
										fabriqué à la main par des artisans
										malgaches talentueux. Chaque pièce est
										unique et peut présenter de légères
										variations qui témoignent de son
										authenticité.
									</p>
									<p className="text-muted-foreground mb-6">
										La paille utilisée est récoltée
										localement puis séchée naturellement au
										soleil avant d'être minutieusement
										tressée selon des techniques transmises
										de génération en génération.
									</p>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
										<div className="space-y-2">
											<h4 className="font-medium flex items-center gap-2">
												<Info className="h-4 w-4 text-primary" />
												Caractéristiques
											</h4>
											<ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
												<li>
													Tressage à la main de haute
													qualité
												</li>
												<li>
													Matériaux 100% naturels et
													écologiques
												</li>
												<li>
													Design traditionnel malgache
												</li>
												<li>
													Léger et confortable à
													porter
												</li>
												<li>
													Protection efficace contre
													le soleil
												</li>
											</ul>
										</div>
										<div className="space-y-2">
											<h4 className="font-medium flex items-center gap-2">
												<Info className="h-4 w-4 text-primary" />
												Conseils d'entretien
											</h4>
											<ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
												<li>
													Éviter l'exposition
													prolongée à l'humidité
												</li>
												<li>
													Nettoyer délicatement avec
													un chiffon sec
												</li>
												<li>
													Ranger à plat ou sur un
													support adapté
												</li>
												<li>
													Tenir à l'écart des sources
													de chaleur
												</li>
												<li>
													Éviter les produits
													chimiques
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</TabsContent>

						<TabsContent value="specifications" className="mt-6">
							<div className="max-w-3xl mx-auto">
								<div className="bg-card border border-border rounded-lg overflow-hidden">
									<table className="w-full">
										<tbody>
											{product.specifications.map(
												(spec, i) => (
													<tr
														key={spec.name}
														className={
															i % 2 === 0
																? 'bg-muted/50'
																: ''
														}
													>
														<td className="py-3 px-4 border-b border-border font-medium">
															{spec.name}
														</td>
														<td className="py-3 px-4 border-b border-border text-muted-foreground">
															{spec.value}
														</td>
													</tr>
												)
											)}
										</tbody>
									</table>
								</div>
							</div>
						</TabsContent>

						<TabsContent value="reviews" className="mt-6">
							<div className="max-w-3xl mx-auto">
								<Card>
									<CardContent className="p-6 space-y-8">
										<div className="flex flex-col md:flex-row gap-6 md:items-center">
											<div className="text-center">
												<div className="text-5xl font-bold">
													{product.rating}
												</div>
												<div className="flex justify-center mt-2">
													{Array(5)
														.fill(0)
														.map((_, i) => (
															<Star
																key={i}
																className={`h-5 w-5 ${
																	i <
																	Math.floor(
																		product.rating
																	)
																		? 'fill-primary text-primary'
																		: 'text-muted-foreground'
																}`}
															/>
														))}
												</div>
												<div className="text-sm text-muted-foreground mt-1">
													{product.reviews} avis
												</div>
											</div>
											<Separator
												orientation="vertical"
												className="hidden md:block h-24"
											/>
											<div className="flex-1 space-y-2">
												{[5, 4, 3, 2, 1].map(
													(rating) => {
														const percent =
															rating === 5
																? 70
																: rating === 4
																? 20
																: rating === 3
																? 7
																: rating === 2
																? 2
																: 1;
														return (
															<div
																key={rating}
																className="flex items-center gap-2"
															>
																<div className="flex items-center gap-1 w-12">
																	<span>
																		{rating}
																	</span>
																	<Star className="h-3 w-3 fill-primary text-primary" />
																</div>
																<div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
																	<div
																		className="h-full bg-primary rounded-full"
																		style={{
																			width: `${percent}%`,
																		}}
																	></div>
																</div>
																<div className="w-12 text-xs text-muted-foreground text-right">
																	{percent}%
																</div>
															</div>
														);
													}
												)}
											</div>
										</div>

										<Separator />

										<div className="space-y-6">
											{/* Sample reviews */}
											<div className="space-y-4">
												<div className="flex justify-between">
													<h4 className="font-medium">
														Marie R.
													</h4>
													<span className="text-sm text-muted-foreground">
														Il y a 2 semaines
													</span>
												</div>
												<div className="flex items-center gap-1 mb-2">
													{Array(5)
														.fill(0)
														.map((_, i) => (
															<Star
																key={i}
																className="h-4 w-4 fill-primary text-primary"
															/>
														))}
												</div>
												<p className="text-muted-foreground">
													Superbe chapeau artisanal
													qui respire l'authenticité !
													La qualité du tressage est
													impressionnante et les
													finitions sont soignées. Je
													l'ai acheté pour un voyage à
													Nosy Be et il a parfaitement
													rempli son rôle tout en
													étant élégant.
												</p>
											</div>

											<Separator />

											<div className="space-y-4">
												<div className="flex justify-between">
													<h4 className="font-medium">
														Thomas L.
													</h4>
													<span className="text-sm text-muted-foreground">
														Il y a 1 mois
													</span>
												</div>
												<div className="flex items-center gap-1 mb-2">
													{Array(4)
														.fill(0)
														.map((_, i) => (
															<Star
																key={i}
																className="h-4 w-4 fill-primary text-primary"
															/>
														))}
													{Array(1)
														.fill(0)
														.map((_, i) => (
															<Star
																key={i}
																className="h-4 w-4 text-muted-foreground"
															/>
														))}
												</div>
												<p className="text-muted-foreground">
													Très beau chapeau, bien fini
													et léger à porter. J'enlève
													une étoile car la taille est
													un peu plus petite que ce
													que j'espérais, mais ça
													reste un excellent produit
													artisanal que je recommande
													!
												</p>
											</div>

											<div className="text-center mt-8">
												<Button>
													Voir tous les avis
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>

			{/* Related products */}
			<section className="container px-4 mx-auto max-w-7xl py-16">
				<h2 className="text-2xl font-bold tracking-tight mb-8">
					Produits similaires
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{product.relatedProducts.map((item) => (
						<Link
							href={`/product/${item.id}`}
							key={item.id}
							className="group"
						>
							<Card className="overflow-hidden h-full transition-all hover:shadow-md">
								<div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/60 to-muted border border-border/60 rounded-t-lg group-hover:border-primary/20">
									<div className="absolute inset-0 flex items-center justify-center p-6">
										<div className="w-full h-full flex flex-col items-center justify-center">
											<div className="w-16 h-16 rounded-full bg-muted-foreground/10 flex items-center justify-center mb-3">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="text-muted-foreground/60"
												>
													{item.name
														.toLowerCase()
														.includes('sac') ? (
														<path d="M7.38 4h9.24A2 2 0 0 1 18 5.375v13.25A2 2 0 0 1 16.62 20H7.38A2 2 0 0 1 6 18.625V5.375A2 2 0 0 1 7.38 4z" />
													) : item.name
															.toLowerCase()
															.includes(
																'coussin'
															) ? (
														<rect
															width="18"
															height="18"
															x="3"
															y="3"
															rx="2"
														/>
													) : item.name
															.toLowerCase()
															.includes(
																'écharpe'
															) ? (
														<path d="m4 19 8-8 8 8" />
													) : (
														<circle
															cx="12"
															cy="12"
															r="10"
														/>
													)}
												</svg>
											</div>
											<p className="text-muted-foreground text-sm text-center font-medium">
												{item.name}
											</p>
											<div className="flex items-center gap-1 mt-2">
												<span className="w-2 h-2 bg-primary rounded-full"></span>
												<span className="w-2 h-2 bg-muted-foreground/30 rounded-full"></span>
												<span className="w-2 h-2 bg-muted-foreground/30 rounded-full"></span>
											</div>
										</div>
									</div>
									<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
										<div className="text-foreground font-medium text-sm truncate">
											{item.name}
										</div>
									</div>
								</div>
								<CardContent className="p-4 flex items-center justify-between">
									<span className="font-semibold">
										{item.price.toLocaleString()} Ar
									</span>
									<Button
										variant="ghost"
										size="icon"
										className="h-8 w-8"
									>
										<Heart className="h-4 w-4" />
									</Button>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			</section>

			{/* Recently viewed */}
			<section className="bg-muted/30 border-t border-border py-16">
				<div className="container px-4 mx-auto max-w-7xl">
					<h2 className="text-2xl font-bold tracking-tight mb-8">
						Vus récemment
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
						{product.relatedProducts
							.slice()
							.reverse()
							.map((item) => (
								<Card
									key={item.id}
									className="overflow-hidden flex items-center gap-4 p-4"
								>
									<div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0 bg-gradient-to-br from-muted/60 to-muted border border-border/50">
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="w-8 h-8 rounded-full bg-muted-foreground/10 flex items-center justify-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="14"
													height="14"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="text-muted-foreground/60"
												>
													{item.name
														.toLowerCase()
														.includes('sac') ? (
														<path d="M7.38 4h9.24A2 2 0 0 1 18 5.375v13.25A2 2 0 0 1 16.62 20H7.38A2 2 0 0 1 6 18.625V5.375A2 2 0 0 1 7.38 4z" />
													) : item.name
															.toLowerCase()
															.includes(
																'coussin'
															) ? (
														<rect
															width="18"
															height="18"
															x="3"
															y="3"
															rx="2"
														/>
													) : item.name
															.toLowerCase()
															.includes(
																'écharpe'
															) ? (
														<path d="m4 19 8-8 8 8" />
													) : (
														<circle
															cx="12"
															cy="12"
															r="10"
														/>
													)}
												</svg>
											</div>
										</div>
										<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-muted-foreground/20 to-transparent"></div>
									</div>
									<div className="flex-1 min-w-0">
										<h3 className="text-sm font-medium truncate">
											{item.name}
										</h3>
										<p className="text-sm text-primary font-semibold">
											{item.price.toLocaleString()} Ar
										</p>
									</div>
								</Card>
							))}
					</div>
				</div>
			</section>
		</div>
	);
}
