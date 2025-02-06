import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Database, Lock, Zap, Server, Users } from 'lucide-react';

const solutions = [
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions with AWS, Azure, and GCP integration',
    icon: <Cloud className="h-6 w-6" />,
    tags: ['AWS', 'Azure', 'GCP']
  },
  {
    title: 'Database Management',
    description: 'Optimized database solutions for high performance and reliability',
    icon: <Database className="h-6 w-6" />,
    tags: ['MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Security Solutions',
    description: 'Advanced security measures and compliance implementations',
    icon: <Lock className="h-6 w-6" />,
    tags: ['ISO 27001', 'GDPR', 'SOC 2']
  },
  {
    title: 'Performance Optimization',
    description: 'System optimization for maximum efficiency and speed',
    icon: <Zap className="h-6 w-6" />,
    tags: ['CDN', 'Caching', 'Load Balancing']
  },
  {
    title: 'Server Management',
    description: 'Comprehensive server maintenance and monitoring solutions',
    icon: <Server className="h-6 w-6" />,
    tags: ['Linux', 'Windows', 'Kubernetes']
  },
  {
    title: 'Team Collaboration',
    description: 'Tools and practices for effective team collaboration',
    icon: <Users className="h-6 w-6" />,
    tags: ['DevOps', 'Agile', 'CI/CD']
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-[#0B101B] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your infrastructure and development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-[#1A1F2C]/50 backdrop-blur-xl border-0 p-6 hover:bg-[#1A1F2C]/70 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold">{solution.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-4">{solution.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {solution.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-[#2A2F3C]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
