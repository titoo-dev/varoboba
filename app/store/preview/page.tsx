import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import {
	Eye,
	Store,
	MapPin,
	Clock,
	Phone,
	Mail,
	Heart,
	Share2,
	ShoppingBag,
	ChevronLeft,
	Check,
	AlertCircle,
	Image as ImageIcon,
	Paintbrush,
	ArrowLeft,
} from 'lucide-react';

export default function StorePreviewPage() {
	// Demo store data (coming from the form)
	// Demo store data (coming from the form)
	const storeData = {
		name: 'Artisanat Malgache',
		description:
			'Artisanat authentique malgache, fait à la main par des artisans locaux selon des techniques ancestrales. Nous proposons une large gamme de produits uniques et de qualité, représentatifs de la richesse culturelle de Madagascar.',
		location: 'Antananarivo, Madagascar',
		verified: true,
		categories: ['Artisanat', 'Décoration', 'Art local', 'Souvenirs'],
		contactInfo: {
			email: 'contact@artisanatmalgache.com',
			phone: '032 XX XXX XX',
			address: 'Lot III H 39 Antananarivo 101',
			openingHours: 'Lun-Ven 9h-18h, Sam 9h-12h',
		},
		paymentMethods: ['MVola', 'Orange Money', 'Airtel Money', 'Cash'],
		deliveryOptions: [
			'Retrait en boutique',
			'Livraison locale',
			'Expédition nationale',
		],
	};

	return (
		<div className="flex flex-col min-h-screen">
			{/* Preview mode indicator bar */}
			<div className="bg-primary/10 border-b border-primary/20 py-2 px-4 sticky top-0 z-50 backdrop-blur-sm">
				<div className="container max-w-7xl mx-auto flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Eye className="h-4 w-4 text-primary" />
						<span className="text-sm font-medium">
							Mode prévisualisation
						</span>
					</div>

					<div className="flex items-center gap-2">
						<Link
							href="/store/create"
							className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
						>
							<ArrowLeft className="h-4 w-4" />
							<span>Retour à l'édition</span>
						</Link>
						<Button size="sm" className="gap-2">
							<Check className="h-4 w-4" />
							<span>Confirmer et publier</span>
						</Button>
					</div>
				</div>
			</div>

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

					{/* Banner placeholder with edit button */}
					<div className="absolute inset-0 flex items-center justify-center">
						<Button
							variant="secondary"
							size="sm"
							className="gap-2 opacity-90"
						>
							<Paintbrush className="h-4 w-4" />
							<span>Personnaliser la bannière</span>
						</Button>
					</div>

					{/* Decorative elements */}
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40"></div>

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
						<div className="h-24 w-24 md:h-32 md:w-32 rounded-xl overflow-hidden border-4 border-background shadow-lg bg-primary/10 flex items-center justify-center group relative">
							<Store className="h-12 w-12 text-primary group-hover:opacity-50 transition-opacity" />
							<div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
								<Button
									variant="secondary"
									size="sm"
									className="gap-1"
								>
									<ImageIcon className="h-4 w-4" />
									<span>Logo</span>
								</Button>
							</div>
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
									<Clock className="h-4 w-4" />
									<span>Prévisualisation</span>
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
					<Alert className="mb-8">
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Mode prévisualisation</AlertTitle>
						<AlertDescription>
							Ceci est une prévisualisation de votre boutique.
							Vous pouvez encore modifier les détails avant de la
							publier.
						</AlertDescription>
					</Alert>

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
										<div className="flex gap-2 flex-wrap">
											{storeData.paymentMethods.map(
												(method) => (
													<Badge
														key={method}
														variant="outline"
														className="bg-primary/5"
													>
														{method}
													</Badge>
												)
											)}
										</div>
									</div>
									<Separator />
									<div className="space-y-3">
										<h3 className="text-sm font-medium">
											Options de livraison
										</h3>
										<div className="flex gap-2 flex-wrap">
											{storeData.deliveryOptions.map(
												(option) => (
													<Badge
														key={option}
														variant="outline"
														className="bg-primary/5"
													>
														{option}
													</Badge>
												)
											)}
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Products section */}
						<div className="lg:col-span-2">
							<Card className="p-8 flex flex-col items-center justify-center space-y-4 h-96 border-dashed">
								<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
									<ShoppingBag className="h-8 w-8 text-primary/60" />
								</div>
								<h3 className="text-xl font-medium text-center">
									Aucun produit pour le moment
								</h3>
								<p className="text-muted-foreground text-center max-w-md">
									Une fois votre boutique publiée, vous
									pourrez ajouter vos produits ici.
								</p>
								<Button className="mt-2" disabled>
									Ajouter un produit
								</Button>
							</Card>
						</div>
					</div>

					<div className="mt-12 flex justify-center">
						<Button
							variant="default"
							size="lg"
							className="gap-2"
							asChild
						>
							<Link href="/store/create">
								<ChevronLeft className="h-4 w-4" />
								<span>Retourner à l'édition</span>
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
