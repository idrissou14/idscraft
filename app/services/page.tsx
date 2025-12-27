"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Code2, Smartphone, Bot, Server, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const services = [
    {
        title: "Développement Web Sur Mesure",
        description: "Applications SaaS, Tableaux de bord et Plateformes web complexes. Une architecture robuste pour scaler votre business.",
        icon: Code2,
        features: [
            "Apps React / Next.js performantes",
            "Architecture Scalable & Sécurisée",
            "API & Intégrations sur mesure",
            "Back-office & Admin panels"
        ],
        price: "Sur devis",
        tags: ["Next.js", "React", "Node.js"]
    },
    {
        title: "Développement Mobile",
        description: "Applications natives iOS et Android fluides et performantes. L'expérience utilisateur au cœur de votre stratégie mobile.",
        icon: Smartphone,
        features: [
            "Apps React Native Cross-platform",
            "Publication App Store & Play Store",
            "Fonctionnalités hors-ligne",
            "Performance Native"
        ],
        price: "Sur devis",
        tags: ["React Native", "Expo", "Mobile"]
    },
    {
        title: "Automatisation de Process",
        description: "Connectez vos outils et supprimez les tâches manuelles répétitives. Gagnez des heures de productivité chaque semaine.",
        icon: Zap,
        features: [
            "Workflows n8n / Make / Zapier",
            "Synchronisation CRM & Données",
            "Génération de documents auto",
            "Alertes & Notifications"
        ],
        price: "À partir de 1 500€",
        tags: ["n8n", "Make", "Automations"]
    },
    {
        title: "Intelligence Artificielle",
        description: "Intégrez la puissance de l'IA dans votre entreprise. Chatbots intelligents et analyse de données automatisée.",
        icon: Bot,
        features: [
            "Assistants GPT Sur Mesure",
            "Analyse de documents (RAG)",
            "Agents Autonomes",
            "Intégration API OpenAI / Anthropic"
        ],
        price: "À partir de 2 500€",
        tags: ["AI", "LLM", "Python"]
    },
    {
        title: "DevOps & Cloud",
        description: "Infrastructure solide, déploiements automatisés et monitoring. Dormez tranquille, votre tech est entre de bonnes mains.",
        icon: Server,
        features: [
            "Déploiement CI/CD (GitHub Actions)",
            "Containerisation Docker",
            "Infrastructure Cloud (AWS/Vercel)",
            "Sécurité & Monitoring"
        ],
        price: "Sur devis",
        tags: ["Docker", "AWS", "CI/CD"]
    },
    {
        title: "Formation & Coaching",
        description: "Accélérez la montée en compétence de vos équipes techniques ou formez-vous aux nouvelles technologies.",
        icon: GraduationCap,
        features: [
            "Formation Dev Web & Mobile",
            "Cursus Automatisation & IA",
            "Audit & Code Review",
            "Mentoring Développeurs"
        ],
        price: "À partir de 800€",
        tags: ["Training", "Coaching", "Audit"]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 overflow-hidden">
                {/* Background Decor */}
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full opacity-50" />
                </div>

                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-20 relative"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Nos Expertises
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Une suite complète de services pour digitaliser, accélérer et propulser votre entreprise vers de nouveaux sommets.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                    >
                        {services.map((service, index) => (
                            <motion.div key={index} variants={item} className="h-full">
                                <Card className="flex flex-col h-full border-border/40 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 bg-secondary/5 backdrop-blur-sm group">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                                <service.icon className="h-6 w-6" />
                                            </div>
                                            <Badge variant="outline" className="text-[10px] opacity-70 group-hover:opacity-100 transition-opacity">
                                                {service.tags[0]}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                                        <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow pt-0">
                                        <ul className="space-y-3 mt-4">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="flex flex-col items-start pt-6 border-t border-border/40">
                                        <div className="flex items-center justify-between w-full mb-4">
                                            <span className="text-sm text-muted-foreground font-medium">Investissement</span>
                                            <span className="text-sm font-bold">{service.price}</span>
                                        </div>
                                        <Button className="w-full group/btn" variant="secondary" asChild>
                                            <Link href="/book">
                                                En savoir plus
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-secondary/50 to-secondary/20 rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                        <div className="max-w-2xl relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Besoin d'un accompagnement sur mesure ?</h3>
                            <p className="text-muted-foreground text-lg">
                                Chaque projet est unique. Discutons de vos enjeux spécifiques lors d'un premier échange gratuit.
                            </p>
                        </div>
                        <Button size="lg" className="rounded-full px-8 relative z-10 shadow-lg shadow-primary/20" asChild>
                            <Link href="/book" className="gap-2">
                                Parler à un expert <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
