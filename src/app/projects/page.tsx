"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function ProjectListingPage() {
  return (
    <div className="bg-muted/10 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-primary/5 py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Find Work</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Browse hundreds of freelance projects tailored to your skills.
          </p>
          <div className="max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10 h-12 rounded-full border-primary/20 bg-background" placeholder="Search projects by skills or title..." />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Category</h3>
              <div className="space-y-2">
                {['Web Development', 'Mobile Apps', 'UX/UI Design', 'Copywriting'].map(cat => (
                  <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" className="rounded border-muted" />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Budget Type</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded border-muted" /> Hourly
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded border-muted" /> Fixed Price
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Experience Level</h3>
              <div className="space-y-2">
                {['Entry Level', 'Intermediate', 'Expert'].map(level => (
                  <label key={level} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" className="rounded border-muted" /> {level}
                  </label>
                ))}
              </div>
            </div>
            
            <Button variant="outline" className="w-full">Clear Filters</Button>
          </div>

          {/* Listing Grid */}
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium text-muted-foreground">Showing 1-10 of 423 projects</span>
              <select className="border rounded-md text-sm p-2 bg-background cursor-pointer">
                <option>Newest First</option>
                <option>Budget: High to Low</option>
                <option>Budget: Low to High</option>
              </select>
            </div>

            {[1, 2, 3, 4, 5].map(i => (
              <Card key={i} className="hover:border-primary/50 transition-colors shadow-sm cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-primary font-semibold hover:underline">
                      Build a comprehensive e-commerce platform using Next.js
                    </CardTitle>
                    <div className="text-right whitespace-nowrap">
                      <div className="font-bold text-lg">$3k - $5k</div>
                      <div className="text-xs text-muted-foreground">Fixed Price</div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">Posted 2 hours ago</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    We are looking for an experienced Next.js developer to build out a robust e-commerce frontend. You will be responsible for integrating with our existing headless CMS (Sanity) and Shopify backend...
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Sanity CMS</Badge>
                    <Badge variant="secondary">E-commerce</Badge>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 text-sm text-muted-foreground border-t bg-muted/20">
                  <span className="font-medium">Proposals:</span> 10 to 15
                  <span className="mx-2">•</span>
                  <span className="font-medium">Experience level:</span> Intermediate
                </CardFooter>
              </Card>
            ))}

            <div className="flex justify-center mt-10">
              <Button variant="outline" className="rounded-full shadow-sm hover:shadow-md transition-all px-8">Load More</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
