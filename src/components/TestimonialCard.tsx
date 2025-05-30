
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { User } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageSrc?: string;
}

const TestimonialCard = ({ quote, name, role, imageSrc }: TestimonialCardProps) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="mb-4">
          <svg
            className="h-8 w-8 text-muted-foreground/50"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-muted-foreground">{quote}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-6 border-t">
        <div className="flex items-center gap-3">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
          )}
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
