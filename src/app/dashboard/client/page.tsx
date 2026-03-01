import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, FileText, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ClientDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Client Dashboard</h1>
          <p className="text-muted-foreground">Manage your projects, proposals, and freelance talent.</p>
        </div>
        <Button size="lg" className="rounded-full px-8 shadow-md">Post a New Project</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Spend Tracking</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,250.00</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">All on track</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Proposals</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Across 2 open projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Hired Talent</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Active contractors</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Posted Projects</CardTitle>
              <CardDescription>Review and manage your current open listings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="flex flex-col sm:flex-row justify-between p-4 border rounded-lg bg-card hover:border-primary/50 transition-colors">
                  <div className="mb-4 sm:mb-0">
                    <h4 className="font-semibold text-base mb-1 hover:underline cursor-pointer">UI/UX Designer Needed for SaaS Tool</h4>
                    <p className="text-xs text-muted-foreground mb-2">Posted 3 days ago • Hourly</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">12 Proposals</Badge>
                      <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">Active</Badge>
                    </div>
                  </div>
                  <div className="flex sm:flex-col gap-2 justify-start sm:justify-center">
                    <Button variant="outline" size="sm">View Proposals</Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">Close Job</Button>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full text-primary">View All History</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Latest communications with talent.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 items-start pb-4 border-b last:border-0 last:pb-0">
                  <Avatar className="w-10 h-10 border border-primary/20">
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 20}`} />
                    <AvatarFallback>FL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-semibold text-sm">John Smith</h4>
                      <span className="text-[10px] text-muted-foreground">2h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">I have attached the wireframes for the dashboard review...</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full text-xs mt-2">Open Inbox</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
