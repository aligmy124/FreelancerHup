// app/page.tsx

"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { Shield, Lock, AlertCircle, Search } from 'lucide-react';
import { toast } from 'sonner';

export default function Home() {
  const { isAuthenticated, userRole } = useAuth();
  const router = useRouter();
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [intendedAction, setIntendedAction] = useState<{ type: 'hire' | 'work' } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleProtectedAction = (action: 'hire' | 'work') => {
    if (!isAuthenticated) {
      setIntendedAction({ type: action });
      setShowAuthDialog(true);
      return;
    }

    // User is authenticated, proceed with role-based routing
    if (action === 'hire') {
      if (userRole === 'Client') {
        router.push('/freelancers');
      } else if (userRole === 'Freelancer') {
        toast.info("Looking for talent?", {
          description: "As a freelancer, you might want to find work instead. Check out available projects!",
          action: {
            label: "Find Work",
            onClick: () => router.push('/projects')
          },
          duration: 5000,
        });
      } else {
        router.push('/freelancers');
      }
    } else if (action === 'work') {
      if (userRole === 'Freelancer') {
        router.push('/projects');
      } else if (userRole === 'Client') {
        toast.info("Looking for work?", {
          description: "As a client, you might want to hire talent instead. Browse our freelancers!",
          action: {
            label: "Hire Talent",
            onClick: () => router.push('/freelancers')
          },
          duration: 5000,
        });
      } else {
        router.push('/projects');
      }
    }
  };

  const handleAuthRedirect = () => {
    setShowAuthDialog(false);
    if (intendedAction) {
      router.push('/auth/register');
    }
  };

  const handleLoginRedirect = () => {
    setShowAuthDialog(false);
    if (intendedAction) {
      router.push('/auth/login');
    }
  };

  const handleSearch = () => {
    if (!isAuthenticated) {
      setIntendedAction({ type: 'hire' });
      setShowAuthDialog(true);
    } else {
      if (searchQuery.trim()) {
        toast.success("Searching...", {
          description: `Finding results for "${searchQuery}"`,
        });
        // Implement actual search logic here
      } else {
        toast.error("Please enter a search term", {
          description: "What service are you looking for?",
        });
      }
    }
  };

  const handleCategoryClick = (category: string) => {
    if (!isAuthenticated) {
      setIntendedAction({ type: 'hire' });
      setShowAuthDialog(true);
    } else {
      toast.info(category, {
        description: `${category} services coming soon!`,
      });
    }
  };

  const handleFreelancerClick = () => {
    if (!isAuthenticated) {
      setIntendedAction({ type: 'hire' });
      setShowAuthDialog(true);
    } else {
      toast.info("Coming Soon", {
        description: "View full profile feature is coming soon!",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-colors border-none" variant="outline">
            The #1 Workspace for Professionals
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
            Find the perfect <span className="text-primary">freelance</span> services for your business
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Connect with top-tier talent worldwide. From software engineering to marketing, get your projects done quickly and securely.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => handleProtectedAction('hire')}
            >
              Hire Talent
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-lg px-8 rounded-full shadow-sm hover:shadow-md transition-all"
              onClick={() => handleProtectedAction('work')}
            >
              Find Work
            </Button>
          </div>
          
          {/* Search Bar in Hero */}
          <div className="mt-12 max-w-3xl mx-auto bg-card rounded-full shadow-xl p-2 flex items-center border">
            <Search className="ml-4 h-5 w-5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="What service are you looking for today?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1 h-12 px-4 bg-transparent outline-none"
            />
            <Button 
              className="rounded-full h-12 px-8"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Development', 'Design', 'Marketing', 'Writing', 'Video', 'Music'].map((category) => (
              <Card 
                key={category} 
                className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group"
                onClick={() => handleCategoryClick(category)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary font-bold text-xl">{category[0]}</span>
                  </div>
                  <h3 className="font-semibold text-sm">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Freelancers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Top Rated Freelancers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card 
                key={i} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={handleFreelancerClick}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="w-16 h-16 border-2 border-primary/20">
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
                    <AvatarFallback>FL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Alex Developer</CardTitle>
                    <CardDescription>Senior Full Stack Engineer</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-lg">$85<span className="text-muted-foreground text-sm font-normal">/hr</span></span>
                    <span className="flex items-center text-amber-500 font-medium">★ 4.9 (120 reviews)</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button 
              variant="outline" 
              className="rounded-full"
              onClick={() => handleProtectedAction('hire')}
            >
              View All Talent
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">How Hustlix Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-bold mb-3">Post a Job</h3>
              <p className="text-muted-foreground">Tell us about your project. Hustlix connects you with top talent around the world.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
              <h3 className="text-xl font-bold mb-3">Hire the Best</h3>
              <p className="text-muted-foreground">Review portfolios, client ratings, and past work to choose the perfect fit for your requirements.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="text-xl font-bold mb-3">Work & Pay Securely</h3>
              <p className="text-muted-foreground">Collaborate easily and pay securely through our milestone-based payment system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section for Unauthenticated Users */}
      {!isAuthenticated && (
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of professionals already using Hustlix to find work or hire talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auth/register">
                  <Button size="lg" className="rounded-full px-8">
                    Create Free Account
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    Sign In
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                No credit card required • Free to browse • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Features Section for Authenticated Users */}
      {isAuthenticated && (
        <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Secure Payments</h3>
                <p className="text-sm text-muted-foreground">Your payments are protected with our escrow system</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Data Protection</h3>
                <p className="text-sm text-muted-foreground">Your information is always secure and private</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Our support team is always here to help</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Authentication Dialog */}
      <Dialog open={showAuthDialog} onOpenChange={setShowAuthDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {intendedAction?.type === 'hire' ? 'Hire Talent' : 'Find Work'}
            </DialogTitle>
            <DialogDescription className="text-center">
              Join Hustlix to connect with professionals worldwide
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm text-center text-muted-foreground">
                {intendedAction?.type === 'hire' 
                  ? "Create an account to browse top talent, post projects, and hire the best freelancers for your business needs." 
                  : "Sign up to access thousands of projects, apply for jobs, and start your freelance career today."}
              </p>
            </div>
            
            <div className="space-y-2">
              <Button 
                className="w-full rounded-full" 
                size="lg"
                onClick={handleAuthRedirect}
              >
                Create Free Account
              </Button>
              <Button 
                variant="outline" 
                className="w-full rounded-full"
                onClick={handleLoginRedirect}
              >
                Sign In to Existing Account
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Benefits</span>
              </div>
            </div>
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                Access to 10,000+ freelancers
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                Secure payment protection
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                24/7 customer support
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                No upfront fees
              </li>
            </ul>
          </div>
          
          <DialogFooter className="sm:justify-center">
            <p className="text-xs text-muted-foreground text-center">
              By joining, you agree to our Terms of Service and Privacy Policy
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}