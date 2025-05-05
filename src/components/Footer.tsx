
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/40 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary rounded-full p-1">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">AbilityJobs</span>
            </Link>
            <p className="text-muted-foreground">Bridging the gap between inclusive employers and skilled professionals with disabilities.</p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">Browse Jobs</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Career Resources</Link></li>
              <li><Link to="/success-stories" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">Job Seeker Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link to="/post-job" className="text-muted-foreground hover:text-primary transition-colors">Post a Job</Link></li>
              <li><Link to="/inclusive-hiring" className="text-muted-foreground hover:text-primary transition-colors">Inclusive Hiring</Link></li>
              <li><Link to="/employer-resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              <li><Link to="/success-stories" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/our-mission" className="text-muted-foreground hover:text-primary transition-colors">Our Mission</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 AbilityJobs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
