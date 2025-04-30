import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Store, MapPin, Clock, Image as ImageIcon, Upload } from 'lucide-react';

export default function CreateMarketPage() {
	return (
		<div className="container max-w-4xl py-10 mx-auto">
			<div className="mb-8 space-y-4">
				<div className="flex items-center space-x-2">
					<div className="rounded-full bg-primary/10 p-2">
						<Store className="h-5 w-5 text-primary" />
					</div>
					<h1 className="text-3xl font-bold tracking-tight">
						Créer votre boutique
					</h1>
				</div>
				<p className="text-muted-foreground">
					Remplissez les informations ci-dessous pour créer votre
					boutique et commencer à vendre vos produits.
				</p>
			</div>

			<Tabs defaultValue="general" className="space-y-8">
				<TabsList className="grid w-full grid-cols-4 mb-4">
					<TabsTrigger value="general">
						Informations générales
					</TabsTrigger>
					<TabsTrigger value="contact">
						Contact & Localisation
					</TabsTrigger>
					<TabsTrigger value="identity">
						Identité visuelle
					</TabsTrigger>
					<TabsTrigger value="payment">
						Paiement & Livraison
					</TabsTrigger>
				</TabsList>

				<TabsContent value="general" className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Informations de la boutique</CardTitle>
							<CardDescription>
								Ces informations seront affichées publiquement
								et aideront les clients à trouver votre
								boutique.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-2">
								<Label htmlFor="store-name">
									Nom de la boutique *
								</Label>
								<Input
									id="store-name"
									placeholder="ex: Artisanat Malgache"
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="store-description">
									Description de la boutique *
								</Label>
								<Textarea
									id="store-description"
									placeholder="Décrivez votre boutique en quelques phrases..."
									className="min-h-32"
								/>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="category">
										Catégorie principale
									</Label>
									<Select>
										<SelectTrigger id="category">
											<SelectValue placeholder="Sélectionnez une catégorie" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="artisanat">
												Artisanat
											</SelectItem>
											<SelectItem value="alimentation">
												Alimentation
											</SelectItem>
											<SelectItem value="textile">
												Textile
											</SelectItem>
											<SelectItem value="electronique">
												Électronique
											</SelectItem>
											<SelectItem value="beaute">
												Beauté & Santé
											</SelectItem>
											<SelectItem value="autre">
												Autre
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="space-y-2">
									<Label htmlFor="subcategory">
										Sous-catégorie
									</Label>
									<Select>
										<SelectTrigger id="subcategory">
											<SelectValue placeholder="Sélectionnez une sous-catégorie" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="bijoux">
												Bijoux
											</SelectItem>
											<SelectItem value="sculpture">
												Sculpture
											</SelectItem>
											<SelectItem value="vannerie">
												Vannerie
											</SelectItem>
											<SelectItem value="textile">
												Textile
											</SelectItem>
											<SelectItem value="autre">
												Autre
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Options de la boutique</CardTitle>
							<CardDescription>
								Configurez les options de votre boutique
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="flex items-center justify-between">
								<div className="space-y-0.5">
									<Label htmlFor="featured">
										Mise en avant
									</Label>
									<p className="text-sm text-muted-foreground">
										Votre boutique sera mise en avant sur la
										page d'accueil (service premium)
									</p>
								</div>
								<Switch id="featured" />
							</div>
							<Separator />
							<div className="flex items-center justify-between">
								<div className="space-y-0.5">
									<Label htmlFor="vacation">
										Mode vacances
									</Label>
									<p className="text-sm text-muted-foreground">
										Votre boutique sera temporairement
										fermée et indisponible
									</p>
								</div>
								<Switch id="vacation" />
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="contact" className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Contact</CardTitle>
							<CardDescription>
								Informations de contact pour les clients et
								l'administration
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="contact-email">
										Email professionnel *
									</Label>
									<Input
										id="contact-email"
										type="email"
										placeholder="boutique@example.com"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="contact-phone">
										Téléphone *
									</Label>
									<Input
										id="contact-phone"
										placeholder="032 XX XXX XX"
										required
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="store-hours">
									Heures d'ouverture
								</Label>
								<div className="flex items-center space-x-2">
									<Clock className="h-5 w-5 text-muted-foreground" />
									<Input
										id="store-hours"
										placeholder="ex: Lun-Ven 9h-18h, Sam 9h-12h"
									/>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Localisation</CardTitle>
							<CardDescription>
								Adresse physique de votre boutique (si
								applicable)
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-2">
								<Label htmlFor="address">
									Adresse complète
								</Label>
								<div className="flex items-center space-x-2">
									<MapPin className="h-5 w-5 text-muted-foreground" />
									<Input
										id="address"
										placeholder="ex: Lot III H 39 Antananarivo 101"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="city">Ville *</Label>
									<Select>
										<SelectTrigger id="city">
											<SelectValue placeholder="Sélectionnez une ville" />
										</SelectTrigger>
										<SelectContent>
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
											<SelectItem value="autre">
												Autre
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="space-y-2">
									<Label htmlFor="region">Région</Label>
									<Select>
										<SelectTrigger id="region">
											<SelectValue placeholder="Sélectionnez une région" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="analamanga">
												Analamanga
											</SelectItem>
											<SelectItem value="vakinankaratra">
												Vakinankaratra
											</SelectItem>
											<SelectItem value="atsinanana">
												Atsinanana
											</SelectItem>
											<SelectItem value="boeny">
												Boeny
											</SelectItem>
											<SelectItem value="menabe">
												Menabe
											</SelectItem>
											<SelectItem value="autre">
												Autre
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="identity" className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Logo et bannière</CardTitle>
							<CardDescription>
								Personnalisez l'apparence de votre boutique
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-4">
									<div className="space-y-2">
										<Label>
											Logo (recommandé: 200×200px)
										</Label>
										<div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center space-y-2 h-40 hover:bg-muted/50 transition-colors cursor-pointer">
											<ImageIcon className="h-10 w-10 text-muted-foreground" />
											<p className="text-sm text-muted-foreground text-center">
												Cliquez ou glissez-déposez une
												image
											</p>
											<Button
												variant="ghost"
												size="sm"
												className="gap-2"
											>
												<Upload className="h-4 w-4" />
												Importer
											</Button>
										</div>
									</div>
								</div>

								<div className="space-y-4">
									<div className="space-y-2">
										<Label>
											Bannière (recommandé: 1200×300px)
										</Label>
										<div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center space-y-2 h-40 hover:bg-muted/50 transition-colors cursor-pointer">
											<ImageIcon className="h-10 w-10 text-muted-foreground" />
											<p className="text-sm text-muted-foreground text-center">
												Cliquez ou glissez-déposez une
												image
											</p>
											<Button
												variant="ghost"
												size="sm"
												className="gap-2"
											>
												<Upload className="h-4 w-4" />
												Importer
											</Button>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Personnalisation</CardTitle>
							<CardDescription>
								Adaptez l'apparence de votre boutique
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="primary-color">
										Couleur principale
									</Label>
									<div className="flex">
										<Input
											id="primary-color"
											type="color"
											className="w-16 h-10"
											defaultValue="#6D5E4A"
										/>
										<Input
											className="ml-2 flex-1"
											defaultValue="#6D5E4A"
											placeholder="Code couleur (hex)"
										/>
									</div>
								</div>
								<div className="space-y-2">
									<Label htmlFor="accent-color">
										Couleur secondaire
									</Label>
									<div className="flex">
										<Input
											id="accent-color"
											type="color"
											className="w-16 h-10"
											defaultValue="#B7A68B"
										/>
										<Input
											className="ml-2 flex-1"
											defaultValue="#B7A68B"
											placeholder="Code couleur (hex)"
										/>
									</div>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="theme">
									Thème de la boutique
								</Label>
								<Select defaultValue="modern">
									<SelectTrigger id="theme">
										<SelectValue placeholder="Choisir un thème" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="modern">
											Moderne & épuré
										</SelectItem>
										<SelectItem value="traditional">
											Traditionnel malgache
										</SelectItem>
										<SelectItem value="elegant">
											Élégant
										</SelectItem>
										<SelectItem value="minimal">
											Minimaliste
										</SelectItem>
										<SelectItem value="colorful">
											Coloré & vibrant
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="payment" className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Méthodes de paiement</CardTitle>
							<CardDescription>
								Configurez les modes de paiement acceptés dans
								votre boutique
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div className="flex items-center space-x-2">
									<Switch id="mvola" defaultChecked />
									<Label
										htmlFor="mvola"
										className="font-medium"
									>
										MVola
									</Label>
								</div>
								<div className="pl-6 space-y-2">
									<Label htmlFor="mvola-number">
										Numéro MVola
									</Label>
									<Input
										id="mvola-number"
										placeholder="034 XX XXX XX"
									/>
								</div>
							</div>

							<Separator />

							<div className="space-y-4">
								<div className="flex items-center space-x-2">
									<Switch id="orange-money" />
									<Label
										htmlFor="orange-money"
										className="font-medium"
									>
										Orange Money
									</Label>
								</div>
								<div className="pl-6 space-y-2">
									<Label htmlFor="om-number">
										Numéro Orange Money
									</Label>
									<Input
										id="om-number"
										placeholder="032 XX XXX XX"
										disabled
									/>
								</div>
							</div>

							<Separator />

							<div className="space-y-4">
								<div className="flex items-center space-x-2">
									<Switch id="airtel-money" />
									<Label
										htmlFor="airtel-money"
										className="font-medium"
									>
										Airtel Money
									</Label>
								</div>
								<div className="pl-6 space-y-2">
									<Label htmlFor="airtel-number">
										Numéro Airtel Money
									</Label>
									<Input
										id="airtel-number"
										placeholder="033 XX XXX XX"
										disabled
									/>
								</div>
							</div>

							<Separator />

							<div className="space-y-4">
								<div className="flex items-center space-x-2">
									<Switch id="bank-transfer" />
									<Label
										htmlFor="bank-transfer"
										className="font-medium"
									>
										Virement bancaire
									</Label>
								</div>
								<div className="pl-6 space-y-6 grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="bank-name">
											Nom de la banque
										</Label>
										<Input
											id="bank-name"
											placeholder="ex: BNI Madagascar"
											disabled
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="account-number">
											Numéro de compte
										</Label>
										<Input
											id="account-number"
											placeholder="XXXXXXXXXXXXX"
											disabled
										/>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Options de livraison</CardTitle>
							<CardDescription>
								Configurez les méthodes de livraison proposées
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div className="flex items-center space-x-2">
									<Switch id="pickup" defaultChecked />
									<Label
										htmlFor="pickup"
										className="font-medium"
									>
										Retrait en boutique
									</Label>
								</div>
								<div className="pl-6 space-y-2">
									<Label htmlFor="pickup-instructions">
										Instructions pour le retrait
									</Label>
									<Textarea
										id="pickup-instructions"
										placeholder="ex: Disponible du lundi au samedi de 9h à 17h"
									/>
								</div>
							</div>

							<Separator />

							<div className="space-y-4">
								<div className="flex items-center space-x-2">
									<Switch
										id="delivery-local"
										defaultChecked
									/>
									<Label
										htmlFor="delivery-local"
										className="font-medium"
									>
										Livraison locale
									</Label>
								</div>
								<div className="pl-6 space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="local-fee">
												Frais de livraison (Ar)
											</Label>
											<Input
												id="local-fee"
												placeholder="ex: 10000"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="local-time">
												Délai de livraison
											</Label>
											<Input
												id="local-time"
												placeholder="ex: 24-48 heures"
											/>
										</div>
									</div>
									<div className="space-y-2">
										<Label htmlFor="local-areas">
											Zones desservies
										</Label>
										<Input
											id="local-areas"
											placeholder="ex: Antananarivo centre et périphérie"
										/>
									</div>
								</div>
							</div>

							<Separator />

							<div className="space-y-4">
								<div className="flex items-center space-x-2">
									<Switch id="delivery-national" />
									<Label
										htmlFor="delivery-national"
										className="font-medium"
									>
										Livraison nationale
									</Label>
								</div>
								<div className="pl-6 grid grid-cols-1 md:grid-cols-2 gap-4 opacity-50">
									<div className="space-y-2">
										<Label htmlFor="national-fee">
											Frais de base (Ar)
										</Label>
										<Input
											id="national-fee"
											placeholder="ex: 20000"
											disabled
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="national-time">
											Délai estimé
										</Label>
										<Input
											id="national-time"
											placeholder="ex: 3-5 jours"
											disabled
										/>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>

			<div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-end">
				<Button variant="outline">Enregistrer comme brouillon</Button>
				<Button className="gap-2">
					<Store className="h-4 w-4" />
					Créer ma boutique
				</Button>
			</div>
		</div>
	);
}
