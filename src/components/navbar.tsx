import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-2xl text-primary tracking-tight">
            FreelancerHup
          </Link>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground">
            <Link href="/freelancers" className="hover:text-foreground transition-colors">Find Talent</Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">Find Work</Link>
            <Link href="/why-us" className="hover:text-foreground transition-colors">Why FreelancerHup</Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-sm mx-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search skills, freelancers, projects..." 
            className="w-full h-10 pl-9 pr-4 rounded-full bg-muted/50 border-none focus:ring-2 focus:ring-primary focus:outline-none text-sm transition-all"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/auth/login" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Log In
          </Link>
          <Link href="/auth/register">
            <Button className="rounded-full px-6 shadow-md hover:shadow-lg transition-shadow">Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
