
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Search, User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-full p-1">
              <Users className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">AbilityJobs</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/jobs" className="text-sm font-medium hover:text-primary">
              Find Jobs
            </Link>
            <Link to="/employers" className="text-sm font-medium hover:text-primary">
              For Employers
            </Link>
            <Link to="/resources" className="text-sm font-medium hover:text-primary">
              Resources
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <AccessibilityMenu />
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                Log In
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />

        {/* Features Section */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Features Designed for Accessibility</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Search className="h-8 w-8 text-primary" />}
                title="AI-Powered Job Matching"
                description="Receive personalized job recommendations based on your skills, experience, and accessibility needs."
              />
              <FeatureCard 
                icon={<CheckCircle className="h-8 w-8 text-primary" />}
                title="Disability-Friendly Filters"
                description="Filter jobs by specific accessibility features like remote work, flexible hours, and wheelchair access."
              />
              <FeatureCard 
                icon={<User className="h-8 w-8 text-primary" />}
                title="Simplified Skill Selection"
                description="Choose your skills from pre-defined lists rather than typing, making profile creation easier."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How AbilityJobs Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-6 mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                <p className="text-muted-foreground">Add your skills, education, and accessibility preferences to get started.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-6 mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Receive AI Recommendations</h3>
                <p className="text-muted-foreground">Our AI matches your profile with suitable job opportunities from inclusive employers.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-6 mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply With Confidence</h3>
                <p className="text-muted-foreground">Apply to jobs knowing they've been vetted for accessibility and inclusivity.</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <Link to="/register">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-accent/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard 
                quote="This platform helped me find a remote job that accommodates my mobility needs. The AI recommendations were spot-on!"
                name="Aisha K."
                role="Software Developer"
              />
              <TestimonialCard 
                quote="As an employer, we've found incredible talent through AbilityJobs that we might have overlooked through traditional hiring."
                name="Tariq M."
                role="HR Director"
              />
              <TestimonialCard 
                quote="The skill selection feature made it so easy to create my profile without struggling with forms. I got hired within two weeks!"
                name="Fatima S."
                role="Graphic Designer"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career Journey?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">Join thousands of job seekers with disabilities who have found meaningful employment through our platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="min-w-[180px]">
                  Job Seekers Sign Up
                </Button>
              </Link>
              <Link to="/employer-register">
                <Button size="lg" variant="outline" className="min-w-[180px] bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Employers Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
