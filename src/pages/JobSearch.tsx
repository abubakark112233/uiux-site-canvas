
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Search, Filter, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "Software Developer",
    company: "TechSolutions Inc",
    location: "Karachi (Remote)",
    type: "Full-time",
    salary: "Rs. 80,000 - 120,000",
    posted: "2 days ago",
    accessibility: ["Remote Work", "Flexible Hours"],
    match: 95,
    description: "We're looking for a skilled software developer to join our inclusive team...",
  },
  {
    id: 2,
    title: "Customer Support Specialist",
    company: "Global Services Ltd",
    location: "Lahore",
    type: "Part-time",
    salary: "Rs. 40,000 - 60,000",
    posted: "5 days ago",
    accessibility: ["Wheelchair Access", "Flexible Hours"],
    match: 92,
    description: "Join our customer service team in a supportive environment with...",
  },
  {
    id: 3,
    title: "Data Entry Specialist",
    company: "DataCore Solutions",
    location: "Islamabad (Remote)",
    type: "Contract",
    salary: "Rs. 30,000 - 45,000",
    posted: "1 week ago",
    accessibility: ["Remote Work", "Screen Reader Compatible"],
    match: 88,
    description: "Data entry position with flexible hours and full remote work options...",
  },
  {
    id: 4,
    title: "Graphic Designer",
    company: "Creative Arts Studio",
    location: "Karachi",
    type: "Full-time",
    salary: "Rs. 70,000 - 90,000",
    posted: "3 days ago",
    accessibility: ["Flexible Hours", "Assistive Technology"],
    match: 85,
    description: "Creative position for a talented graphic designer in an inclusive studio...",
  },
  {
    id: 5,
    title: "Content Writer",
    company: "Digital Media Pakistan",
    location: "Remote",
    type: "Freelance",
    salary: "Project-based",
    posted: "Just now",
    accessibility: ["Remote Work", "Flexible Schedule"],
    match: 90,
    description: "Looking for creative writers who can produce engaging content from anywhere...",
  },
];

export default function JobSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState(mockJobs);
  
  // Filter jobs based on search query
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Sort jobs by AI match score
  const sortedJobs = [...filteredJobs].sort((a, b) => b.match - a.match);

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
            <Link to="/jobs" className="text-sm font-medium text-primary">
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Find Your Perfect Job Match</h1>
            <p className="text-muted-foreground">
              Our AI matches jobs with your skills and accessibility needs
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search and Filter Section */}
            <div className="w-full lg:w-1/4 space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Job title, company, or location" 
                      className="pl-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="hidden lg:block">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      Filters
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-primary text-xs">
                        Clear all
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div>
                      <h3 className="font-medium mb-2">Job Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fulltime" />
                          <Label htmlFor="fulltime">Full-time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="parttime" />
                          <Label htmlFor="parttime">Part-time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="contract" />
                          <Label htmlFor="contract">Contract</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remote" />
                          <Label htmlFor="remote">Remote</Label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-2">Accessibility Features</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remote-work" />
                          <Label htmlFor="remote-work">Remote Work</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="flexible-hours" />
                          <Label htmlFor="flexible-hours">Flexible Hours</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="wheelchair" />
                          <Label htmlFor="wheelchair">Wheelchair Access</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="screen-reader" />
                          <Label htmlFor="screen-reader">Screen Reader Compatible</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="assistive" />
                          <Label htmlFor="assistive">Assistive Technology</Label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-2">Posted Within</h3>
                      <Select defaultValue="any">
                        <SelectTrigger>
                          <SelectValue placeholder="Any time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any time</SelectItem>
                          <SelectItem value="day">Past 24 hours</SelectItem>
                          <SelectItem value="week">Past week</SelectItem>
                          <SelectItem value="month">Past month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full flex gap-2">
                      <Filter className="h-4 w-4" /> Filter Jobs
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>
                        Refine your job search results
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-5 py-4">
                      <div>
                        <h3 className="font-medium mb-2">Job Type</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="fulltime-mobile" />
                            <Label htmlFor="fulltime-mobile">Full-time</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="parttime-mobile" />
                            <Label htmlFor="parttime-mobile">Part-time</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="contract-mobile" />
                            <Label htmlFor="contract-mobile">Contract</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="remote-mobile" />
                            <Label htmlFor="remote-mobile">Remote</Label>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Accessibility Features</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="remote-work-mobile" />
                            <Label htmlFor="remote-work-mobile">Remote Work</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="flexible-hours-mobile" />
                            <Label htmlFor="flexible-hours-mobile">Flexible Hours</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="wheelchair-mobile" />
                            <Label htmlFor="wheelchair-mobile">Wheelchair Access</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="screen-reader-mobile" />
                            <Label htmlFor="screen-reader-mobile">Screen Reader Compatible</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="assistive-mobile" />
                            <Label htmlFor="assistive-mobile">Assistive Technology</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full">Apply Filters</Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Job Listings */}
            <div className="w-full lg:w-3/4 space-y-4">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div>
                  <p className="text-muted-foreground">
                    Showing {sortedJobs.length} jobs based on your profile
                  </p>
                </div>
                <Select defaultValue="match">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="match">Best Match</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="salary-high">Salary (High-Low)</SelectItem>
                    <SelectItem value="salary-low">Salary (Low-High)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {sortedJobs.length > 0 ? (
                <div className="space-y-4">
                  {sortedJobs.map((job) => (
                    <Card key={job.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        {/* AI Match Badge */}
                        <div className="bg-primary/10 px-4 py-6 flex flex-row md:flex-col items-center justify-center gap-2 md:w-32">
                          <div className="text-primary font-semibold text-xl">
                            {job.match}%
                          </div>
                          <div className="text-xs text-muted-foreground text-center">AI Match</div>
                        </div>
                        
                        {/* Job Details */}
                        <CardContent className="flex-1 p-6">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div>
                              <CardTitle className="mb-1">{job.title}</CardTitle>
                              <CardDescription className="text-base font-medium">
                                {job.company}
                              </CardDescription>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <Badge variant="outline" className="font-normal">
                                {job.type}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex items-center text-muted-foreground text-sm">
                            <MapPin className="h-4 w-4 mr-1" /> {job.location}
                          </div>
                          
                          <div className="mt-2">
                            <span className="text-sm">{job.salary}</span>
                          </div>
                          
                          <div className="mt-4 flex flex-wrap gap-2">
                            {job.accessibility.map((feature, index) => (
                              <Badge key={index} variant="secondary" className="font-normal">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          
                          <p className="mt-4 text-sm text-muted-foreground line-clamp-2">
                            {job.description}
                          </p>
                        </CardContent>
                      </div>
                      <CardFooter className="bg-muted/30 px-6 py-3 flex justify-between">
                        <span className="text-xs text-muted-foreground">
                          Posted {job.posted}
                        </span>
                        <Link to={`/jobs/${job.id}`}>
                          <Button size="sm" className="gap-1">
                            View Details <ArrowRight className="h-3 w-3" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="text-center p-8">
                  <div className="mb-4 flex justify-center">
                    <Search className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                  <CardTitle className="mb-2">No matching jobs found</CardTitle>
                  <CardDescription>
                    Try adjusting your search criteria or filters
                  </CardDescription>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
