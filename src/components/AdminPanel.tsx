import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Eye, Trash2, RefreshCw } from 'lucide-react';
import {
  getDemoRequests,
  exportDemoRequestsAsJSON,
  exportDemoRequestsAsCSV,
  clearDemoRequests,
  logDemoRequests,
  DemoRequest
} from '@/utils/formStorage';

const AdminPanel = () => {
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const loadRequests = () => {
    setRequests(getDemoRequests());
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const handleClear = () => {
    clearDemoRequests();
    loadRequests();
  };

  // Only show admin panel in development or when explicitly enabled
  if (!isVisible && process.env.NODE_ENV === 'production') {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          onClick={() => setIsVisible(true)}
          variant="outline"
          size="sm"
          className="bg-black/80 text-white border-white/20"
        >
          Admin
        </Button>
      </div>
    );
  }

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          onClick={() => setIsVisible(true)}
          variant="outline"
          size="sm"
        >
          Show Admin Panel
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Demo Requests Admin Panel</CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsVisible(false)}
            >
              ✕
            </Button>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button onClick={loadRequests} size="sm" variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button onClick={logDemoRequests} size="sm" variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Log to Console
            </Button>
            <Button onClick={exportDemoRequestsAsJSON} size="sm" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export JSON
            </Button>
            <Button onClick={exportDemoRequestsAsCSV} size="sm" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button onClick={handleClear} size="sm" variant="destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </CardHeader>
        <CardContent className="overflow-auto max-h-96">
          <div className="text-sm text-muted-foreground mb-4">
            Total Submissions: {requests.length}
          </div>
          
          {requests.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No demo requests yet
            </p>
          ) : (
            <div className="space-y-4">
              {requests.map((request) => (
                <Card key={request.id} className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <div><strong>Name:</strong> {request.name}</div>
                    <div><strong>Email:</strong> {request.email}</div>
                    <div><strong>Phone:</strong> {request.phone}</div>
                    <div><strong>Practice:</strong> {request.practice}</div>
                    <div><strong>Date:</strong> {request.date}</div>
                    <div><strong>Time:</strong> {request.time}</div>
                    <div className="col-span-2 md:col-span-3">
                      <strong>Submitted:</strong> {new Date(request.submittedAt).toLocaleString()}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
