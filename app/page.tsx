import { Hero } from "@/components/home/hero";
import { ServiceCard } from "@/components/home/service-card";
import { ProjectCard } from "@/components/home/project-card";
import { TestimonialCarousel } from "@/components/home/testimonial-carousel";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Nos Expertises</h2>
              <p className="text-muted-foreground text-lg">
                Des solutions technologiques adaptées à vos besoins, du No-Code rapide au développement sur mesure complexe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Automatisation No-Code"
                description="Connectez vos outils (Zapier, Make, n8n) pour éliminer les tâches répétitives sans écrire une ligne de code."
                imageSrc="/images/service-nocode.png"
                stats="-15h / semaine en moyenne"
                delay={0.1}
              />
              <ServiceCard
                title="Développement Sur Mesure"
                description="Applications Web performantes et évolutives avec Next.js et React pour des besoins spécifiques."
                imageSrc="/images/service-code.png"
                stats="Solutions Scalables"
                delay={0.2}
              />
              <ServiceCard
                title="Bots & IA"
                description="Agents conversationnels et intégration d'IA (GPT-4) pour assister vos équipes et clients 24/7."
                imageSrc="/images/service-bot.png"
                stats="Support 24/7"
                delay={0.3}
              />
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Voir tous nos services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Réalisations Récentes</h2>
                <p className="text-muted-foreground text-lg">
                  Découvrez comment nous aidons nos clients à transformer leur activité.
                </p>
              </div>
              <Button variant="ghost" className="gap-2" asChild>
                <Link href="/portfolio">
                  Voir tout le portfolio <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="SaaS Analytics Dashboard"
                description="Dashboard complet pour une start-up FinTech. Visualisation de données temps réel et export de rapports automatisés."
                imageSrc="/images/project-dashboard.png"
                tags={["Next.js", "Recharts", "Supabase"]}
                results="+40% de rétention client"
              />
              <ProjectCard
                title="Workflow Automatisation RH"
                description="Système complet d'onboarding employés connectant Gmail, Slack et Notion. Zéro intervention manuelle requise."
                imageSrc="/images/project-workflow.png"
                tags={["Make", "Notion API", "Slack"]}
                results="3h gagnées par employé"
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Notre Méthode</h2>
              <p className="text-muted-foreground text-lg">
                Un processus structuré pour garantir la qualité et la rapidité de livraison.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <ProcessTimeline />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ce qu'ils en disent</h2>
              <p className="text-muted-foreground text-lg">
                La satisfaction de nos clients est notre meilleure carte de visite.
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à passer au niveau supérieur ?</h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Réservez votre audit gratuit de 30 minutes. Nous analyserons ensemble vos opportunités d'automatisation.
            </p>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold" asChild>
              <Link href="/book">
                Réserver mon appel
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
