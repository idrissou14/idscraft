import Link from "next/link"
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { Logo } from "@/components/ui/logo"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/80 backdrop-blur-md relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-30 pointer-events-none -mr-40" />

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 group mb-6 w-fit">
                            <div className="bg-primary/10 p-2 rounded-xl border border-primary/20 group-hover:border-primary/50 transition-colors relative">
                                <Logo className="h-8 w-8 text-primary" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-lg tracking-tight">IdsCraft</span>
                                <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">Agency</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
                            Partenaire de votre transformation numérique.
                            Nous combinons code, design et automatisation pour créer des produits digitaux d'exception.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all hover:scale-110">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all hover:scale-110">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all hover:scale-110">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-bold text-base mb-6">Agence</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />Services</Link></li>
                            <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />Portfolio</Link></li>
                            <li><Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />À propos</Link></li>
                            <li><Link href="/book" className="text-muted-foreground hover:text-primary transition-colors flex items-center group"><ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />Réserver un audit</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-base mb-6">Expertises</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Développement Web</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Applications Mobile</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Automatisation IA</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Formation & Coaching</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} IdsCraft. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <Link href="/legal" className="hover:text-primary transition-colors">Mentions légales</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Confidentialité</Link>
                        <Link href="/cookie" className="hover:text-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
