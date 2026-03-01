import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function FreelancerProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12 bg-card p-8 border rounded-xl shadow-sm">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/10">
          <AvatarImage src="https://i.pravatar.cc/150?img=11" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Jane Doe</h1>
              <p className="text-xl text-muted-foreground mt-1">UX/UI Designer & Web Developer</p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" className="rounded-full px-8 shadow-sm">Hire Me</Button>
              <Button size="lg" variant="outline" className="rounded-full">Message</Button>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center text-amber-500 font-bold">
              ★ 4.9 <span className="text-muted-foreground font-normal ml-1">(45 Jobs)</span>
            </div>
            <div className="text-muted-foreground">San Francisco, CA</div>
            <div className="font-semibold">$60/hr</div>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {['Figma', 'React', 'Next.js', 'Tailwind', 'Framer Motion', 'Wireframing'].map(skill => (
              <Badge key={skill} variant="secondary" className="px-3 py-1 font-medium">{skill}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Bio & Portfolio) */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-card p-8 border rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="prose text-muted-foreground">
              <p>{"Hi! I'm Jane, a passionate UI/UX designer and frontend developer with over 6 years of experience building beautiful, responsive, and user-friendly digital products."}</p>
              <p className="mt-4">{"My expertise lies in bridging the gap between design and development, ensuring that the final product not only looks great but also functions seamlessly. I specialize in React and modern CSS frameworks like Tailwind."}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="group relative overflow-hidden rounded-xl border bg-muted aspect-video cursor-pointer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`https://picsum.photos/seed/${i * 123}/600/400`} 
                    alt={`Portfolio item ${i}`}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">View Project</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Recent Reviews</h2>
            <div className="space-y-4">
              {[1, 2].map(i => (
                <Card key={i} className="border-none shadow-none bg-muted/40">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-amber-500 text-sm">★★★★★</div>
                      <h4 className="font-semibold text-sm">{"Exceptional quality and communication!"}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Jane delivered the project exactly as requested and ahead of schedule. Her design skills are top-notch. Highly recommend!
                    </p>
                    <div className="text-xs text-muted-foreground font-medium">
                      - Client from New York • 2 weeks ago
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between border-b pb-4">
                <span className="text-muted-foreground text-sm">Total Earnings</span>
                <span className="font-semibold">$45k+</span>
              </div>
              <div className="flex justify-between border-b pb-4">
                <span className="text-muted-foreground text-sm">Jobs Completed</span>
                <span className="font-semibold">45</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-muted-foreground text-sm">Response Time</span>
                <span className="font-semibold">&lt; 24 hrs</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>English</span>
                <span className="text-muted-foreground">Fluent (C2)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Spanish</span>
                <span className="text-muted-foreground">Conversational</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
