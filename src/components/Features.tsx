import { Card } from "@/components/ui/card";
import { Factory, Truck, Flask } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Factory className="w-6 h-6 text-white" />,
      title: "Mining Excellence",
      description: "State-of-the-art mining facilities producing high-purity salt products"
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Reliable Distribution",
      description: "Efficient logistics network ensuring timely delivery across the globe"
    },
    {
      icon: <Flask className="w-6 h-6 text-white" />,
      title: "Quality Control",
      description: "Rigorous testing and certification for all salt products"
    }
  ];

  return (
    <div className="py-20 px-4 bg-[#222222] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#8E9196]/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Industrial-Grade Salt Solutions
            </h2>
            <p className="text-xl text-white/60">
              From chemical manufacturing to water treatment, our salt products meet the highest industry standards for purity and consistency
            </p>
          </div>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift glass-effect flex items-start gap-4 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8E9196]/10 flex items-center justify-center group-hover:bg-[#8E9196]/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;