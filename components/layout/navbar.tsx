"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Code2, Terminal } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "À propos", href: "/a-propos" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="bg-primary/10 p-2 rounded-xl border border-primary/20 group-hover:border-primary/50 transition-colors relative">
                        <Logo className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-lg tracking-tight">IdsCraft</span>
                        <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">Agency</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Button
                        asChild
                        className="relative overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] hover:ring-2 hover:ring-primary/50"
                    >
                        <Link href="/book">
                            <span className="relative z-10">Réserver un call</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] animate-[shimmer_2s_infinite]" />
                        </Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-muted-foreground hover:text-foreground"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border/40 bg-background"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium py-2 transition-colors hover:text-primary border-b border-border/40",
                                        pathname === item.href
                                            ? "text-foreground"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-4" asChild onClick={() => setIsOpen(false)}>
                                <Link href="/book">Réserver un call</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
