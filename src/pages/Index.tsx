import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="solutions">
        <Solutions />
      </div>
      <Benefits />
      <Contact />
      <footer className="border-t border-border py-8 px-4 text-center">
        <p className="text-muted-foreground">
          © 2025 Nimal Tecnologia. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
