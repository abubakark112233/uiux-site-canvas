
import { Link, useParams } from "react-router-dom";
import { Users, MapPin, Calendar, Clock, CheckCircle, ArrowLeft, Building, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

// Mock job data (in a real app, this would come from an API)
const mockJob = {
  id: 1,
  title: "Software Developer",
  company: "TechSolutions Inc",
  companyDescription: "TechSolutions Inc is a leading tech company focused on creating accessible software solutions. We are committed to inclusive hiring practices and providing a supportive work environment for all employees.",
  location: "Karachi (Remote)",
  type: "Full-time",
  salary: "Rs. 80,000 - 120,000",
  posted: "May 2, 2025",
  expiresAt: "June 2, 2025",
  accessibility: ["Remote Work", "Flexible Hours", "Screen Reader Compatible Software"],
  match: 95,
  description: "We're looking for a skilled software developer to join our inclusive team. This role is fully remote with flexible working hours to accommodate various needs.",
  requirements: [
    "At least 2 years of experience in web development",
    "Proficiency in JavaScript, HTML, CSS",
    "Experience with React is preferred",
    "Good problem-solving skills",
    "Ability to work independently",
    "Strong communication skills"
  ],
  responsibilities: [
    "Develop and maintain web applications",
    "Collaborate with the design team to implement user interfaces",
    "Write clean, efficient, and maintainable code",
    "Debug and fix issues in existing applications",
    "Participate in code reviews and team meetings"
  ],
  benefits: [
    "Flexible working hours",
    "Remote work options",
    "Health insurance",
    "Professional development opportunities",
    "Inclusive and supportive work environment"
  ],
  companyLogo: "https://via.placeholder.com/100"
};

export default function JobDetails() {
  const { id } = useParams();
  // In a real app, you would fetch the job by id from an API
  const job = mockJob;
  
  const handleApply = () => {
    // In a real app, this would submit an application to the API
    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully.",
    });
  };
  
  const handleSaveJob = () => {
    toast({
      title: "Job Saved",
      description: "This job has been saved to your favorites.",
    });
  };

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
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                My Profile
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-accent/10">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-4">
            <Link to="/jobs" className="flex items-center text-primary hover:text-primary/80">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Jobs
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-1">{job.title}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="bg-primary/10 px-3 py-2 rounded-md flex flex-col items-center">
                      <div className="text-primary font-semibold text-xl">
                        {job.match}%
                      </div>
                      <div className="text-xs text-muted-foreground">AI Match</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" /> {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" /> {job.type}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" /> Posted: {job.posted}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-medium">{job.salary}</p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Accessibility Features</h3>
                      <div className="flex flex-wrap gap-2">
                        {job.accessibility.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="font-normal">
                            <CheckCircle className="h-3 w-3 mr-1" /> {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                      <p>{job.description}</p>
                    </div>

                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        {job.requirements.map((requirement, index) => (
                          <li key={index}>{requirement}</li>
                        ))}
                      </ul>
                    </div>

                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        {job.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        {job.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Button onClick={handleApply} size="lg" className="w-full mb-3">
                      Apply Now
                    </Button>
                    <Button onClick={handleSaveJob} variant="outline" className="w-full">
                      Save Job
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center">
                      <Building className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium">{job.company}</h3>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {job.companyDescription}
                  </p>
                  <div className="pt-2">
                    <Link to={`/companies/${job.company.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button variant="link" className="h-auto p-0">
                        View Company Profile
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Share This Job</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
