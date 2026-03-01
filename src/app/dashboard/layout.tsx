import Link from 'next/link';
import {Briefcase, MessageSquare,Settings, Bell, LayoutDashboard, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r bg-card hidden md:flex flex-col">
        <div className="p-6 border-b">
          <Link href="/" className="font-bold text-xl text-primary tracking-tight">
            FreelancerHup
          </Link>
          <div className="text-xs text-muted-foreground mt-1">Dashboard Portal</div>
        </div>
        
        <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {/* Quick Mock Role Switcher for demo purposes */}
          <div className="text-xs uppercase font-semibold text-muted-foreground mb-4 mt-2 px-2">Navigation (Demo)</div>
          
          <nav className="space-y-1">
            <Link href="/dashboard/freelancer" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <LayoutDashboard className="h-4 w-4" /> Freelancer View
            </Link>
            <Link href="/dashboard/client" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <Briefcase className="h-4 w-4" /> Client View
            </Link>
            <Link href="/dashboard/admin" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <Users className="h-4 w-4" /> Admin View
            </Link>
          </nav>

          <div className="text-xs uppercase font-semibold text-muted-foreground mb-4 mt-8 px-2">Common</div>
          <nav className="space-y-1">
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <MessageSquare className="h-4 w-4" /> Messages
              <span className="ml-auto bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded-full">3</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <Bell className="h-4 w-4" /> Notifications
            </Link>
            <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
              <Settings className="h-4 w-4" /> Settings
            </Link>
          </nav>
        </div>
        
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              U
            </div>
            <div>
              <p className="text-sm font-medium">Demo User</p>
              <p className="text-xs text-muted-foreground">Log out</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <header className="md:hidden border-b bg-card p-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-primary tracking-tight">
            FreelancerHup
          </Link>
          <Button variant="outline" size="sm">Menu</Button>
        </header>

        <div className="p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
