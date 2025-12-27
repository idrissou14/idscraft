import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function BookPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Réserver un Appel</h1>
                        <p className="text-xl text-muted-foreground">
                            Choisissez un créneau ci-dessous pour discuter de votre projet de vive voix. C'est gratuit et sans engagement.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="overflow-hidden border-border/50 bg-background shadow-xl">
                            <CardContent className="p-0">
                                {/* Calendly Inline Widget Placeholder */}
                                <div className="w-full h-[700px] flex items-center justify-center bg-secondary/10 relative">
                                    <iframe
                                        src="https://calendly.com/idriss-scraft/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        title="Calendly Scheduling"
                                        className="absolute inset-0 z-10"
                                    ></iframe>
                                    <div className="text-muted-foreground animate-pulse z-0">
                                        Chargement du calendrier...
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
