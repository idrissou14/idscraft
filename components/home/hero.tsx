"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Code2, Cpu, Globe } from "lucide-react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* 
              Background Elements 
              - Decorative blur effect for depth using an absolute positioned div.
            */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-20 dark:opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* 
                      Left Column: Text Content 
                      - Contains status badge, main headline, subheadline, CTAs, and trust indicators.
                    */}
                    <div className="flex-1 max-w-2xl text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Status Badge: "Available for new projects" with ping animation */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium text-muted-foreground mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Disponibles pour nouveaux projets
                            </div>

                            {/* Main Headline with gradient text highlight */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                Transformez vos process manuels en <span className="text-primary">automatisations puissantes</span>
                            </h1>

                            {/* Subheadline / Value Proposition */}
                            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                                Agence digitale spécialisée en développement Fullstack Moderne et automatisation intelligente. React, Python, Java & No-Code pour propulser votre business.
                            </p>

                            {/* Call to Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto" asChild>
                                    <Link href="/book">
                                        Réserver un call gratuit
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>

                            {/* Trust Indicators / Tech Stack Highlights */}
                            <div className="mt-10 flex flex-col gap-6">
                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-primary" />
                                        <span>Web & App Mobile</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Cpu className="h-4 w-4 text-primary" />
                                        <span>DevOps & Cloud Native</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span>Workflow Automation</span>
                                    </div>
                                </div>


                            </div>
                        </motion.div>
                    </div>

                    {/* 
                      Right Column: Visual/Image 
                      - Floating 3D/Abstract illustration to represent "Automation".
                      - Uses Framer Motion for entrance animation.
                    */}
                    <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-square md:aspect-[4/3] lg:aspect-square"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
                            <Image
                                src="/images/hero.png"
                                alt="Automation Visualization"
                                fill
                                className="object-contain drop-shadow-2xl relative z-10 animate-float"
                                priority
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
