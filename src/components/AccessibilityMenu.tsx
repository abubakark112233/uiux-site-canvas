
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Accessibility } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const AccessibilityMenu = () => {
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState("default");

  const handleFontSizeChange = (value: number[]) => {
    setFontSize(value[0]);
    document.documentElement.style.fontSize = `${value[0]}%`;
  };

  const handleContrastChange = (value: string) => {
    setContrast(value);
    
    // Remove existing contrast classes
    document.body.classList.remove("high-contrast", "low-contrast");
    
    // Add selected contrast class
    if (value !== "default") {
      document.body.classList.add(value);
    }
  };

  const resetAccessibility = () => {
    setFontSize(100);
    setContrast("default");
    document.documentElement.style.fontSize = "100%";
    document.body.classList.remove("high-contrast", "low-contrast");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" title="Accessibility Options">
          <Accessibility className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Accessibility Options</h3>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Text Size</Label>
              <span className="text-sm text-muted-foreground">{fontSize}%</span>
            </div>
            <Slider
              defaultValue={[fontSize]}
              min={80}
              max={150}
              step={10}
              onValueChange={handleFontSizeChange}
            />
          </div>

          <div className="space-y-2">
            <Label>Contrast</Label>
            <RadioGroup 
              value={contrast} 
              onValueChange={handleContrastChange}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="default" />
                <Label htmlFor="default">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high-contrast" id="high-contrast" />
                <Label htmlFor="high-contrast">High Contrast</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low-contrast" id="low-contrast" />
                <Label htmlFor="low-contrast">Low Contrast</Label>
              </div>
            </RadioGroup>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={resetAccessibility}
          >
            Reset to Default
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityMenu;
