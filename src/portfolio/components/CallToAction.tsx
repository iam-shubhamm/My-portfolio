import { Button } from "@/components/ui/button";
import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <Button asChild variant="ghost" className="cta-btn cta-btn-play"><a href="#contact" data-cursor="disable">Let’s Talk →</a></Button>
        
        <Button asChild variant="ghost" className="cta-btn cta-btn-hire"><a 
          href={config.contact.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          data-cursor="disable"
        >
          Hire Me →
        </a></Button>
      </div>
    </div>
  );
};

export default CallToAction;
