import { Button } from "@/components/ui/button";
import { FileText, Phone } from "lucide-react";

const Download = () => {
  return (
    <div className="py-20 px-4 bg-[#222222] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#8E9196]/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Download our product specifications or contact our sales team to discuss your industrial salt needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-6 text-lg bg-[#8E9196] text-white hover:bg-[#8E9196]/90 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Product Specifications
            </Button>
            <Button className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;