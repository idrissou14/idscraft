import Link from "next/link"
import { Code2, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Code2 className="h-6 w-6 text-primary" />
                            </div>
                            <span>AGENCY</span>
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Transformons vos processus manuels en systèmes automatisés intelligents.
                            Développement sur mesure et intégrations No-Code.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
                            <li><Link href="/book" className="text-muted-foreground hover:text-primary transition-colors">Réserver un audit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Agency. Tous droits réservés.</p>
                    <div className="flex gap-4">
                        <Link href="/legal" className="hover:text-foreground">Mentions légales</Link>
                        <Link href="/privacy" className="hover:text-foreground">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
