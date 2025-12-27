"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Search, Code, LayoutDashboard, Rocket } from "lucide-react"

const steps = [
    {
        icon: Search,
        title: "Discovery",
        description: "Nous analysons vos besoins et vos processus actuels pour identifier les opportunités d'automatisation.",
    },
    {
        icon: LayoutDashboard,
        title: "Audit & Stratégie",
        description: "Nous vous proposons une roadmap détaillée avec les outils adaptés (Zapier, n8n, Custom Dev).",
    },
    {
        icon: Code,
        title: "Développement",
        description: "Nous construisons vos solutions sur mesure avec un code propre et scalable.",
    },
    {
        icon: CheckCircle2,
        title: "Testing & Validation",
        description: "Tests rigoureux pour s'assurer que tout fonctionne parfaitement sans accroc.",
    },
    {
        icon: Rocket,
        title: "Lancement & Support",
        description: "Déploiement final et formation de vos équipes. Nous restons disponibles pour le suivi.",
    },
]

export function ProcessTimeline() {
    return (
        <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2 md:translate-x-0 hidden md:block" />

            <div className="flex flex-col gap-12 relative">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0
                    return (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${isEven ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="flex-1 w-full md:text-right" />

                            {/* Icon Bubble */}
                            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-background border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/5 mx-auto md:mx-4">
                                <step.icon className="h-5 w-5 text-primary" />
                            </div>

                            <div className={`flex-1 w-full ${isEven ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                                <div className="bg-card/50 backdrop-blur-sm border border-border/40 p-6 rounded-xl hover:border-primary/20 transition-colors">
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
