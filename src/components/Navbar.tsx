import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#1A1F2C]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">SaltTech Industries</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Products</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Industries</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Quality</a>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Download Catalog
          </Button>
          <Button className="bg-[#8E9196] text-white hover:bg-[#8E9196]/90">
            Contact Sales
            <Phone className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;