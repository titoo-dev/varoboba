import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	ShoppingBag,
	Store,
	Search,
	CreditCard,
	Truck,
	BarChart,
} from 'lucide-react';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
				<div className="container px-4 md:px-6 mx-auto max-w-7xl">
					<div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="flex flex-col justify-center space-y-8">
							<div className="space-y-6">
								<div className="inline-block mb-2">
									<span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
										Nouveau à Madagascar
									</span>
								</div>
								<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-[1.3] sm:leading-[1.25] xl:leading-[1.2]">
									Centralisez vos ventes à Madagascar
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
									Une plateforme complète pour vendre et
									acheter des produits à Madagascar. Simple,
									puissante et adaptée au marché local.
								</p>
							</div>
							<div className="flex flex-col gap-4 min-[400px]:flex-row mt-2">
								<Link href="/market/create">
									<Button
										size="lg"
										className="gap-2 shadow-lg font-medium"
									>
										<Store className="h-5 w-5" />
										Créer une boutique
									</Button>
								</Link>
								<Button
									size="lg"
									variant="outline"
									className="gap-2 border-primary/20 hover:bg-primary/5 font-medium"
								>
									<ShoppingBag className="h-5 w-5" />
									Explorer les produits
								</Button>
							</div>
						</div>
						<div className="mx-auto lg:mx-0 relative">
							{/* Decorative patterns */}
							<div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-primary opacity-60"></div>
							<div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-secondary opacity-60"></div>
							<div className="absolute top-1/2 -translate-y-1/2 -left-12 w-6 h-6 rounded-full bg-primary/30"></div>
							<div className="absolute top-1/3 -right-10 w-8 h-8 rounded-full border-2 border-secondary/50"></div>
							<div className="absolute -bottom-4 left-1/4 w-4 h-4 rounded-full bg-secondary/40"></div>

							<div className="relative h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] lg:h-[500px] lg:w-[500px] animate-floating">
								{/* Main image with decorative elements */}
								<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-20 blur-3xl"></div>
								<div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-10">
									{Array(9)
										.fill(0)
										.map((_, i) => (
											<div
												key={i}
												className="border border-primary/20"
											></div>
										))}
								</div>
								<div className="absolute inset-10 bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 transform rotate-2 border border-border/40">
									<div className="h-full w-full bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-br from-background to-muted opacity-80"></div>
										<div className="absolute right-4 bottom-4 w-20 h-20 rounded-full bg-primary/5 backdrop-blur-sm"></div>
										<div className="absolute left-6 top-6 w-12 h-12 rounded-full bg-secondary/5 backdrop-blur-sm"></div>
										<ShoppingBag className="h-20 w-20 sm:h-28 sm:w-28 text-primary relative z-10 animate-pulse" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/20">
				<div className="container px-4 md:px-6 mx-auto max-w-7xl">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Fonctionnalités principales
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Tout ce dont vous avez besoin pour vendre et
								acheter à Madagascar
							</p>
						</div>
					</div>
					<div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
						{features.map((feature) => (
							<Card
								key={feature.title}
								className="bg-white dark:bg-slate-800 border-border hover:shadow-md transition-shadow"
							>
								<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
									<div className="rounded-full p-3 bg-primary/10">
										<feature.icon className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-xl font-bold">
										{feature.title}
									</h3>
									<p className="text-muted-foreground">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
				<div className="container px-4 md:px-6 mx-auto max-w-7xl">
					<div className="flex flex-col items-center justify-center space-y-8 text-center">
						<div className="space-y-4">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2 leading-tight">
								Rejoignez notre communauté
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto leading-relaxed">
								Commencez à vendre ou à acheter dès aujourd'hui
								et participez à la révolution du e-commerce à
								Madagascar.
							</p>
						</div>
						<div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
							<Button size="lg" className="px-8">
								S'inscrire
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="px-8"
							>
								En savoir plus
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="w-full py-6 bg-background border-t">
				<div className="container px-4 md:px-6 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="flex items-center gap-2">
						<ShoppingBag className="h-6 w-6" />
						<span className="font-bold">Varoboba</span>
					</div>
					<p className="text-sm text-muted-foreground text-center md:text-left">
						© {new Date().getFullYear()} Varoboba. Tous droits
						réservés.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-4 mt-2 md:mt-0">
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Conditions générales
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Confidentialité
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Contact
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}

// Features data
const features = [
	{
		title: 'Gestion de boutique',
		description:
			'Créez et personnalisez votre boutique en ligne en quelques clics.',
		icon: Store,
	},
	{
		title: 'Recherche intelligente',
		description:
			'Trouvez facilement ce que vous cherchez grâce à notre système de recherche avancé.',
		icon: Search,
	},
	{
		title: 'Paiement sécurisé',
		description:
			'Mobile Money et cartes bancaires pour des transactions en toute sécurité.',
		icon: CreditCard,
	},
	{
		title: 'Livraison intégrée',
		description: 'Intégration avec les services de livraison à Madagascar.',
		icon: Truck,
	},
	{
		title: 'Tableau de bord',
		description:
			'Suivez vos ventes et analysez les performances de votre boutique.',
		icon: BarChart,
	},
	{
		title: 'Support client',
		description:
			'Un système de messagerie pour résoudre les litiges et aider vos clients.',
		icon: ShoppingBag,
	},
];
