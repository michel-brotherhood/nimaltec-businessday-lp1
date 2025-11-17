import Hero from "@/components/Hero";
import Evolution from "@/components/Evolution";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Evolution />
      <footer className="border-t border-border py-8 px-4 text-center bg-background">
        <p className="text-muted-foreground">
          © 2025 Nimal Tecnologia. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
