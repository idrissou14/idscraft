import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const services = [
    {
        title: "Automatisation No-Code",
        description: "Nous connectons vos applications existantes pour automatiser les tâches répétitives. Idéal pour les process marketing, ventes et RH.",
        features: [
            "Connexion CRM (Hubspot, Salesforce) ↔ Email",
            "Génération automatique de documents",
            "Sync Google Sheets / Airtable",
            "Notifications Slack/Teams automatisées"
        ],
        price: "À partir de 1 500€",
        tags: ["Zapier", "Make", "n8n"]
    },
    {
        title: "Développement Sur Mesure",
        description: "Création d'outils web spécifiques, dashboards et applications SaaS internes. Quand le No-Code ne suffit plus.",
        features: [
            "Applications React / Next.js performantes",
            "Bases de données Supabase / SQL",
            "API personnalisées",
            "Interfaces admin complexes"
        ],
        price: "Sur devis",
        tags: ["React", "Next.js", "TypeScript"]
    },
    {
        title: "Bots & IA",
        description: "Intégration de l'intelligence artificielle dans vos flux de travail. Chatbots, analyse de données, génération de contenu.",
        features: [
            "Chatbots Service Client (GPT-4)",
            "Analyse automatique de documents",
            "Qualification de leads par IA",
            "Assistants internes"
        ],
        price: "À partir de 2 500€",
        tags: ["OpenAI", "LangChain", "Vector DB"]
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Services</h1>
                        <p className="text-xl text-muted-foreground">
                            Des solutions concrètes pour accélérer votre croissance et réduire vos coûts opérationnels.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {services.map((service, index) => (
                            <Card key={index} className="flex flex-col h-full border-border/50 hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                        ))}
                                    </div>
                                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                                    <CardDescription className="text-base">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <Check className="h-5 w-5 text-primary shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="flex flex-col items-start pt-6 border-t border-border/50">
                                    <div className="text-lg font-bold mb-4">{service.price}</div>
                                    <Button className="w-full" asChild>
                                        <Link href="/book">Demander un audit gratuit</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="bg-secondary/20 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-bold mb-4">Besoin d'un accompagnement spécifique ?</h3>
                            <p className="text-muted-foreground">
                                Nous proposons également des audits complets de votre stack technique et de vos processus pour identifier les leviers d'optimisation.
                            </p>
                        </div>
                        <Button size="lg" variant="default" asChild>
                            <Link href="/book" className="gap-2">
                                Parler à un expert <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
