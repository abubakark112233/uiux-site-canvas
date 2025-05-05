
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Building, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function EmployerDashboard() {
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
          
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm">
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Employer Dashboard</h1>
          <p className="text-muted-foreground">Manage your job listings and applicants</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-3 md:col-span-2 space-y-6">
            <div className="bg-accent/20 p-8 rounded-lg text-center">
              <Building className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Welcome to Your Employer Dashboard</h2>
              <p className="mb-6">This dashboard is under construction. Soon you'll be able to post jobs and manage applications here.</p>
              <Link to="/">
                <Button className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="col-span-3 md:col-span-1 space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">Post a New Job</Button>
                <Button variant="outline" className="w-full justify-start">View Applications</Button>
                <Button variant="outline" className="w-full justify-start">Edit Company Profile</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
