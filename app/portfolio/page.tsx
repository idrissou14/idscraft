import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/home/project-card";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "SaaS Analytics Dashboard",
        description: "Dashboard complet pour une start-up FinTech.",
        imageSrc: "/images/project-dashboard.png",
        tags: ["Next.js", "Recharts", "Supabase"],
        results: "+40% de rétention client"
    },
    {
        title: "Workflow Automatisation RH",
        description: "Système complet d'onboarding employés.",
        imageSrc: "/images/project-workflow.png",
        tags: ["Make", "Notion API", "Slack"],
        results: "3h gagnées par employé"
    },
    // Duplicated for Grid Effect
    {
        title: "E-Commerce Automation",
        description: "Synchronisation Shopify vers ERP et génération de factures.",
        imageSrc: "/images/project-dashboard.png",
        tags: ["Shopify", "Zapier", "Stripe"],
        results: "0 erreur de saisie"
    },
    {
        title: "Lead Gen Bot",
        description: "Chatbot de qualification sur site web immobilier.",
        imageSrc: "/images/project-bot.png", // Fallback or reuse
        tags: ["OpenAI", "Next.js", "Postgres"],
        results: "+150% de leads qualifiés"
    }
];

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Réalisations</h1>
                        <p className="text-xl text-muted-foreground">
                            Découvrez comment nous transformons les défis de nos clients en avantages concurrentiels.
                        </p>
                    </div>

                    {/* Filters (Visual only for now) */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <Button variant="default" size="sm">Tous</Button>
                        <Button variant="outline" size="sm">Automatisation</Button>
                        <Button variant="outline" size="sm">Développement Web</Button>
                        <Button variant="outline" size="sm">IA & Bots</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                                // Using existing images for demo, normally would generate unique ones
                                imageSrc={index % 2 === 0 ? "/images/project-dashboard.png" : "/images/project-workflow.png"}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
