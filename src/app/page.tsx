import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function Home() {
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
            <Link href="/freelancers">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                Hire Talent
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 rounded-full shadow-sm hover:shadow-md transition-all">
                Find Work
              </Button>
            </Link>
          </div>
          
          {/* Search Bar in Hero */}
          <div className="mt-12 max-w-3xl mx-auto bg-card rounded-full shadow-xl p-2 flex items-center border">
            <input 
              type="text" 
              placeholder="What service are you looking for today?" 
              className="flex-1 h-12 px-6 bg-transparent outline-none rounded-l-full"
            />
            <Button className="rounded-full h-12 px-8">Search</Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Development', 'Design', 'Marketing', 'Writing', 'Video', 'Music'].map((category) => (
              <Card key={category} className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {/* Placeholder icon */}
                    <span className="text-primary font-bold">{category[0]}</span>
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
              <Card key={i} className="hover:shadow-lg transition-shadow">
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
            <Link href="/freelancers">
              <Button variant="outline" className="rounded-full">View All Talent</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">How FreelancerHup Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="text-xl font-bold mb-3">Post a Job</h3>
              <p className="text-muted-foreground">Tell us about your project. FreelancerHup connects you with top talent around the world.</p>
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
    </div>
  );
}
