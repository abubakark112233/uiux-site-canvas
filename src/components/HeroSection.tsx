
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Inclusive Employment for <span className="text-primary">Everyone</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Find jobs tailored to your abilities with our AI-powered job matching platform designed for people with disabilities.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/register">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl h-[300px] md:h-[400px] border">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1470&h=900" 
              alt="Person with disability working on a laptop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
