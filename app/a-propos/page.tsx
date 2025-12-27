import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    {/* Intro */}
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">À Propos de l'Agence</h1>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Nous sommes une équipe de développeurs et d'experts en automatisation passionnés par l'efficacité. Notre mission est simple : supprimer les tâches manuelles chronophages pour vous permettre de vous concentrer sur votre cœur de métier.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Basés en France, nous accompagnons les start-ups et les PME dans leur transformation numérique avec une approche pragmatique et orientée résultats.
                            </p>
                        </div>
                        <div className="flex-1 relative aspect-square md:aspect-[4/3] w-full max-w-lg bg-secondary/30 rounded-2xl overflow-hidden">
                            {/* Placeholder for team/office image */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 bg-gradient-to-br from-secondary/50 to-primary/5">
                                [Photo d'équipe / Bureau]
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-border/50 py-12">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
                            <div className="text-sm md:text-base text-muted-foreground">Années d'expérience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
                            <div className="text-sm md:text-base text-muted-foreground">Projets livrés</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50k+</div>
                            <div className="text-sm md:text-base text-muted-foreground">Tasks automatisées / mois</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                            <div className="text-sm md:text-base text-muted-foreground">Satisfaction client</div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
