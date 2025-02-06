import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, CheckCircle, Clock, ArrowUpCircle } from 'lucide-react';

interface Deployment {
  id: string;
  project: string;
  status: 'success' | 'pending' | 'in-progress';
  timestamp: string;
  environment: 'production' | 'staging' | 'development';
  type: string;
}

const deployments: Deployment[] = [
  {
    id: 'dep-001',
    project: 'E-commerce Platform',
    status: 'success',
    timestamp: '2025-02-06 14:30',
    environment: 'production',
    type: 'Full Release'
  },
  {
    id: 'dep-002',
    project: 'CRM System',
    status: 'in-progress',
    timestamp: '2025-02-06 13:15',
    environment: 'staging',
    type: 'Hotfix'
  },
  // Add more deployments as needed
];

const statusIcons = {
  success: <CheckCircle className="h-5 w-5 text-green-500" />,
  pending: <Clock className="h-5 w-5 text-yellow-500" />,
  'in-progress': <ArrowUpCircle className="h-5 w-5 text-blue-500" />
};

const environmentColors = {
  production: 'bg-red-500/10 text-red-500',
  staging: 'bg-yellow-500/10 text-yellow-500',
  development: 'bg-green-500/10 text-green-500'
};

const LatestDeployments = () => {
  return (
    <div className="min-h-screen bg-[#0B101B] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Rocket className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold">Latest Deployments</h1>
        </div>
        
        <div className="grid gap-6">
          {deployments.map((deployment) => (
            <Card key={deployment.id} className="bg-[#1A1F2C]/50 backdrop-blur-xl border-0 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {statusIcons[deployment.status]}
                  <div>
                    <h3 className="text-xl font-semibold">{deployment.project}</h3>
                    <p className="text-gray-400 text-sm">{deployment.timestamp}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={environmentColors[deployment.environment]}>
                    {deployment.environment}
                  </Badge>
                  <Badge variant="outline">{deployment.type}</Badge>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-effect p-3 rounded-lg">
                  <p className="text-sm text-gray-400">Status</p>
                  <p className="font-medium capitalize">{deployment.status}</p>
                </div>
                <div className="glass-effect p-3 rounded-lg">
                  <p className="text-sm text-gray-400">Type</p>
                  <p className="font-medium">{deployment.type}</p>
                </div>
                <div className="glass-effect p-3 rounded-lg">
                  <p className="text-sm text-gray-400">Environment</p>
                  <p className="font-medium capitalize">{deployment.environment}</p>
                </div>
                <div className="glass-effect p-3 rounded-lg">
                  <p className="text-sm text-gray-400">Deployment ID</p>
                  <p className="font-medium">{deployment.id}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestDeployments;
