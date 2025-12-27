"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        name: "Thomas Dubois",
        role: "CEO, TechFlow",
        content: "L'équipe a complètement transformé notre gestion interne. Nous avons économisé 20h/semaine dès le premier mois.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Sarah Martin",
        role: "Marketing Director, Agence K",
        content: "Une expertise technique impressionnante. Le dashboard qu'ils ont créé nous donne une visibilité totale sur nos KPIs.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Alexandre Petit",
        role: "Founder, StartUp X",
        content: "Communication fluide, délais respectés et résultat au-delà de nos attentes. Je recommande vivement.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Julie Rousseau",
        role: "COO, Logistic Corp",
        content: "Leurs automatisations Make sont d'une fiabilité absolue. Un vrai partenaire de croissance.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces"
    }
]

export function TestimonialCarousel() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-border/40 hover:border-primary/20 transition-all">
                        <CardContent className="p-8">
                            <Quote className="h-8 w-8 text-primary/20 mb-4" />
                            <p className="text-lg mb-6 leading-relaxed italic text-muted-foreground">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-secondary">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}
