
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Save, Plus, X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

// Mock skill categories and options
const skillCategories = [
  {
    name: "Technical",
    skills: [
      "JavaScript", "React", "Node.js", "Python", "Java", "HTML", "CSS", "SQL",
      "MongoDB", "AWS", "Docker", "Git", "TypeScript", "PHP", "C#", "Swift"
    ]
  },
  {
    name: "Design",
    skills: [
      "UI/UX", "Photoshop", "Illustrator", "Figma", "InDesign", "Sketch",
      "Adobe XD", "Graphic Design", "Motion Graphics", "3D Modeling"
    ]
  },
  {
    name: "Business",
    skills: [
      "Project Management", "Marketing", "Sales", "Customer Service", "Leadership",
      "Communication", "Accounting", "Human Resources", "Strategic Planning", "Analytics"
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      "Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability",
      "Critical Thinking", "Creativity", "Leadership", "Work Ethic", "Conflict Resolution"
    ]
  }
];

export default function UserProfile() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState(skillCategories[0].name);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter skills based on search query
  const filteredSkills = skillCategories
    .find(category => category.name === currentCategory)?.skills
    .filter(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) || [];
  
  const handleSelectSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };
  
  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };
  
  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: `Your profile has been updated with ${selectedSkills.length} skills.`,
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">My Profile</h1>
            <p className="text-muted-foreground">
              Complete your profile to get personalized job recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle>Sarah Ahmed</CardTitle>
                  <CardDescription>Software Developer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Profile Completion</p>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-xs text-muted-foreground text-right">75% Complete</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm">sarah.ahmed@example.com</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm">Karachi, Pakistan</p>
                  </div>
                  
                  <Button variant="outline" className="w-full gap-2">
                    <Upload className="h-4 w-4" /> Upload Resume
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Profile Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Edit Your Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="personal">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="personal">Personal Info</TabsTrigger>
                      <TabsTrigger value="skills">Skills</TabsTrigger>
                      <TabsTrigger value="preferences">Preferences</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="personal" className="space-y-6 mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" defaultValue="Sarah Ahmed" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" defaultValue="sarah.ahmed@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" defaultValue="+92 300 1234567" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" defaultValue="Karachi, Pakistan" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">About Me</Label>
                        <Textarea 
                          id="bio" 
                          placeholder="Write a brief description about yourself" 
                          defaultValue="Software developer with 3 years of experience specializing in frontend development. Passionate about creating accessible web applications."
                          rows={4}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="disabilityType">Disability Type (Optional)</Label>
                        <Select defaultValue="mobility">
                          <SelectTrigger id="disabilityType">
                            <SelectValue placeholder="Select disability type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hearing">Hearing Impairment</SelectItem>
                            <SelectItem value="visual">Visual Impairment</SelectItem>
                            <SelectItem value="mobility">Mobility Impairment</SelectItem>
                            <SelectItem value="cognitive">Cognitive Disability</SelectItem>
                            <SelectItem value="speech">Speech Impairment</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not">Prefer Not to Say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        <Button onClick={handleSaveProfile} className="gap-2">
                          <Save className="h-4 w-4" /> Save Changes
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="skills" className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Your Selected Skills</h3>
                          <div className="flex flex-wrap gap-2 min-h-16 border rounded-md p-4 bg-background">
                            {selectedSkills.length > 0 ? (
                              selectedSkills.map((skill) => (
                                <Badge key={skill} className="gap-1 py-1.5">
                                  {skill}
                                  <button 
                                    onClick={() => handleRemoveSkill(skill)}
                                    className="ml-1 hover:text-destructive focus:outline-none"
                                    aria-label={`Remove ${skill} skill`}
                                  >
                                    <X className="h-3 w-3" />
                                  </button>
                                </Badge>
                              ))
                            ) : (
                              <p className="text-muted-foreground text-sm">No skills selected yet. Choose from the options below.</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {skillCategories.map((category) => (
                              <Button
                                key={category.name}
                                variant={currentCategory === category.name ? "default" : "outline"}
                                onClick={() => setCurrentCategory(category.name)}
                                className="justify-start"
                              >
                                {category.name}
                              </Button>
                            ))}
                          </div>
                          
                          <div className="space-y-4">
                            <Input
                              placeholder="Search skills..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="mb-4"
                            />
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                              {filteredSkills.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant={selectedSkills.includes(skill) ? "default" : "outline"}
                                  className="cursor-pointer py-1.5 justify-between"
                                  onClick={() => handleSelectSkill(skill)}
                                >
                                  {skill}
                                  {!selectedSkills.includes(skill) && <Plus className="h-3 w-3 ml-1" />}
                                </Badge>
                              ))}
                              {filteredSkills.length === 0 && (
                                <p className="col-span-full text-center text-muted-foreground text-sm py-4">No skills found matching your search.</p>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                          <Button onClick={handleSaveProfile} className="gap-2">
                            <Save className="h-4 w-4" /> Save Skills
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="preferences" className="space-y-6 mt-6">
                      <div className="space-y-2">
                        <Label htmlFor="jobType">Preferred Job Type</Label>
                        <Select defaultValue="fulltime">
                          <SelectTrigger id="jobType">
                            <SelectValue placeholder="Select job type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fulltime">Full-time</SelectItem>
                            <SelectItem value="parttime">Part-time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="remote">Remote Only</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="salary">Expected Salary (PKR)</Label>
                        <Select defaultValue="range3">
                          <SelectTrigger id="salary">
                            <SelectValue placeholder="Select salary range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="range1">Up to 50,000</SelectItem>
                            <SelectItem value="range2">50,000 - 80,000</SelectItem>
                            <SelectItem value="range3">80,000 - 120,000</SelectItem>
                            <SelectItem value="range4">120,000 - 150,000</SelectItem>
                            <SelectItem value="range5">150,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">Preferred Location</Label>
                        <Select defaultValue="karachi">
                          <SelectTrigger id="location">
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="karachi">Karachi</SelectItem>
                            <SelectItem value="lahore">Lahore</SelectItem>
                            <SelectItem value="islamabad">Islamabad</SelectItem>
                            <SelectItem value="remote">Remote Only</SelectItem>
                            <SelectItem value="anywhere">Anywhere in Pakistan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="accessibility">Required Accessibility Features</Label>
                        <Select defaultValue="remote">
                          <SelectTrigger id="accessibility">
                            <SelectValue placeholder="Select features" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="remote">Remote Work</SelectItem>
                            <SelectItem value="flexible">Flexible Hours</SelectItem>
                            <SelectItem value="wheelchair">Wheelchair Access</SelectItem>
                            <SelectItem value="screenReader">Screen Reader Compatible</SelectItem>
                            <SelectItem value="assistive">Assistive Technology</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        <Button onClick={handleSaveProfile} className="gap-2">
                          <Save className="h-4 w-4" /> Save Preferences
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
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
