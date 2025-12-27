"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
    title: string
    description: string
    imageSrc: string
    stats: string
    href?: string
    delay?: number
}

export function ServiceCard({ title, description, imageSrc, stats, href = "/services", delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
        >
            <Link href={href} className="block group">
                <Card className="h-full border-border/40 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                    <div className="relative h-48 w-full bg-secondary/20 p-6 flex items-center justify-center overflow-hidden">
                        <motion.div
                            className="relative z-10 w-32 h-32"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={imageSrc}
                                alt={title}
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
                        <CardDescription className="line-clamp-3 mt-2">{description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold text-primary">{stats}</span>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    )
}
