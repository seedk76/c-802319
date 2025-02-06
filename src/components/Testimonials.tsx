import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Their consistent quality and reliable delivery have made them our primary salt supplier for over a decade.",
      author: "Michael Chen",
      role: "Procurement Director, ChemCorp Industries"
    },
    {
      quote: "The technical support and product quality exceed industry standards. A trusted partner for our operations.",
      author: "Sarah Johnson",
      role: "Operations Manager, WaterTech Solutions"
    },
    {
      quote: "Their industrial salt products have significantly improved our manufacturing efficiency.",
      author: "James Wilson",
      role: "Plant Manager, Global Processing Inc."
    }
  ];

  return (
    <div className="py-20 px-4 bg-[#1A1F2C] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#8E9196]/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Join hundreds of satisfied industrial clients who rely on our salt products
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-12 h-12 rounded-full bg-[#8E9196]/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 mb-4 italic">{testimonial.quote}</p>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-white/60 text-sm">{testimonial.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;