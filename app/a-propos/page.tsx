"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Zap, Globe, Rocket, Users, Target } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 overflow-hidden">
                {/* Hero Section */}
                <div className="container mx-auto px-4 mb-24 relative">
                    <div className="absolute top-0 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Plus qu'une agence, <br />
                            <span className="text-primary">votre partenaire technique</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            Nous ne sommes pas juste des exécutants. Nous sommes des bâtisseurs passionnés par l'idée de transformer la complexité technique en simplicité opérationnelle pour nos clients à travers le monde.
                        </p>
                    </motion.div>
                </div>

                {/* Our Mission - Storytelling */}
                <section className="container mx-auto px-4 mb-32">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl transform -rotate-3" />
                            <div className="relative aspect-video bg-secondary/30 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center group">
                                <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/40 z-10" />
                                <div className="text-center z-20">
                                    <h3 className="text-4xl font-bold text-white mb-2">100+</h3>
                                    <p className="text-white/80">Projets réussis</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">L'histoire IdsCraft</h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Tout a commencé par un constat simple : trop d'entreprises perdent un temps précieux sur des tâches répétitives ou luttent avec des outils inadaptés.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Notre approche combine l'élégance du code bien écrit avec la puissance des outils No-Code modernes. Nous croyons en une technologie qui sert l'humain, pas l'inverse. Peu importe où vous êtes, nous construisons les ponts numériques vers votre futur.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Values Cards */}
                <section className="container mx-auto px-4 mb-32">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">Nos valeurs fondamentales</h2>
                        <p className="text-muted-foreground">Ce qui nous guide au quotidien dans chaque ligne de code et chaque interaction.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Heart,
                                title: "Passion & Qualité",
                                desc: "Nous ne livrons rien dont nous ne sommes pas fiers. Le détail compte."
                            },
                            {
                                icon: Zap,
                                title: "Réactivité",
                                desc: "Le monde va vite. Nous aussi. Nous nous adaptons à vos contraintes."
                            },
                            {
                                icon: Globe,
                                title: "Vision Globale",
                                desc: "Une compréhension 360° de votre business, pas juste du code."
                            },
                            {
                                icon: Users,
                                title: "Partenariat",
                                desc: "Nous grandissons avec vous. Votre succès est notre meilleure publicité."
                            },
                            {
                                icon: Rocket,
                                title: "Innovation",
                                desc: "Toujours à l'affût des dernières stack (AI, Modern Web) pour vous avantager."
                            },
                            {
                                icon: Target,
                                title: "Pragmatisme",
                                desc: "Pas de sur-ingénierie. Des solutions simples, efficaces et robustes."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-colors">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                            <item.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
