"use client"

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { createClient } from "@/lib/supabase";

export default function BookPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // ...

    // ...

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            budget: formData.get("budget") as string,
            description: formData.get("description") as string,
            // date: new Date().toISOString() // Supabase default 'created_at' is better
        };

        try {
            const supabase = createClient();

            const { error } = await supabase
                .from('leads')
                .insert([data]);

            if (error) throw error;

            setIsSubmitted(true);
        } catch (error) {
            console.error("Erreur complète:", JSON.stringify(error, null, 2));
            let errorMessage = "Erreur inconnue";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            alert(`Une erreur est survenue : ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 relative overflow-hidden">
                {/* Background Decor */}
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full opacity-50" />
                </div>

                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Parlez-nous de votre projet
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Remplissez ce formulaire pour recevoir une estimation gratuite ou réserver un audit technique.
                        </p>
                    </div>

                    <div className="max-w-xl mx-auto">
                        <Card className="border-border/50 bg-background/50 backdrop-blur-sm shadow-xl relative overflow-hidden">
                            {/* Success State */}
                            {isSubmitted ? (
                                <div className="absolute inset-0 z-20 bg-background flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                                        <CheckCircle2 className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Message envoyé !!</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Merci de nous avoir contactés. Notre équipe va analyser votre demande et reviendra vers vous sous 24h.
                                    </p>
                                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                                        Envoyer un autre message
                                    </Button>
                                </div>
                            ) : null}

                            <CardHeader>
                                <CardTitle>Formulaire de contact</CardTitle>
                                <CardDescription>Nous répondons généralement sous 24 heures ouvrées.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={onSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nom complet</Label>
                                            <Input id="name" name="name" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email professionnel</Label>
                                            <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Téléphone</Label>
                                        <Input id="phone" name="phone" type="tel" placeholder="+33 6 12 34 56 78" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="budget">Budget estimé</Label>
                                        <div className="relative">
                                            <select
                                                id="budget"
                                                name="budget"
                                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                                                defaultValue=""
                                                required
                                            >
                                                <option value="" disabled>Sélectionnez une fourchette</option>
                                                <option value="<1k">Moins de 1 000€</option>
                                                <option value="1k-5k">1 000€ - 5 000€</option>
                                                <option value="5k-10k">5 000€ - 10 000€</option>
                                                <option value="10k-50k">10 000€ - 50 000€</option>
                                                <option value=">50k">Plus de 50 000€</option>
                                            </select>
                                            {/* Custom Chevron since appearance-none removes it */}
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description du projet</Label>
                                        <Textarea
                                            id="description"
                                            name="description"
                                            placeholder="Décrivez votre besoin, vos objectifs et vos contraintes..."
                                            className="min-h-[120px]"
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                Envoyer ma demande <Send className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
