"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
    title: string
    description: string
    imageSrc: string
    tags: string[]
    results: string
    href?: string
}

export function ProjectCard({ title, description, imageSrc, tags, results, href = "/portfolio" }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Card className="overflow-hidden border-border/40 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors group h-full flex flex-col">
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm" asChild className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <Link href={href} className="gap-2">
                                Voir le projet <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-[10px] px-2 h-5">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription className="line-clamp-2">{description}</CardDescription>
                </CardHeader>

                <CardFooter className="mt-auto border-t border-border/40 pt-4">
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        {results}
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
