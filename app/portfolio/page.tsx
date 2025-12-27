"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/home/project-card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "SaaS Analytics Dashboard",
        description: "Dashboard complet pour une start-up FinTech.",
        imageSrc: "/images/project-dashboard.png",
        tags: ["Next.js", "Recharts", "Supabase"],
        results: "+40% de rétention client",
        category: "Web App"
    },
    {
        title: "Workflow Automatisation RH",
        description: "Système complet d'onboarding employés.",
        imageSrc: "/images/project-workflow.png",
        tags: ["Make", "Notion API", "Slack"],
        results: "3h gagnées par employé",
        category: "Automation"
    },
    {
        title: "E-Commerce Automation",
        description: "Synchronisation Shopify vers ERP et génération de factures.",
        imageSrc: "/images/project-dashboard.png", // Reusing placeholder
        tags: ["Shopify", "Zapier", "Stripe"],
        results: "0 erreur de saisie",
        category: "Automation"
    },
    {
        title: "Lead Gen Bot",
        description: "Chatbot de qualification sur site web immobilier.",
        imageSrc: "/images/project-bot.png", // Placeholder
        tags: ["OpenAI", "Next.js", "Postgres"],
        results: "+150% de leads qualifiés",
        category: "AI & Bots"
    }
];

const filters = ["Tous", "Web App", "Automation", "AI & Bots"];

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("Tous");

    const filteredProjects = projects.filter(project =>
        activeFilter === "Tous" ? true : project.category === activeFilter
    );

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 overflow-hidden">
                {/* Background Decor */}
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full opacity-40" />
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full opacity-40" />
                </div>

                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium text-muted-foreground mb-6">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span>Projets Récents</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Nos Réalisations
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Découvrez comment nous transformons les défis de nos clients en avantages concurrentiels grâce à la technologie.
                        </p>
                    </motion.div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                    activeFilter === filter
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                                        : "bg-secondary/30 text-muted-foreground border-transparent hover:bg-secondary/60 hover:text-foreground"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    key={project.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard
                                        {...project}
                                        imageSrc={index % 2 === 0 ? "/images/project-dashboard.png" : "/images/project-workflow.png"}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center border-t border-border/40 pt-20"
                    >
                        <h2 className="text-3xl font-bold mb-6">Prêt à lancer votre projet ?</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="rounded-full px-8" asChild>
                                <Link href="/book" className="gap-2">
                                    Démarrer maintenant <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
