import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
          <CardDescription>
            Choose your account type and enter your details to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          
          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border rounded-lg p-4 cursor-pointer hover:border-primary border-primary bg-primary/5 transition-all text-center">
              <h3 className="font-semibold text-sm">I&apos;m a Client</h3>
              <p className="text-xs text-muted-foreground mt-1">Hiring for a project</p>
            </div>
            <div className="border rounded-lg p-4 cursor-pointer hover:border-primary transition-all text-center">
              <h3 className="font-semibold text-sm">I&apos;m a Freelancer</h3>
              <p className="text-xs text-muted-foreground mt-1">Looking for work</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="first-name">First name</label>
              <Input id="first-name" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="last-name">Last name</label>
              <Input id="last-name" placeholder="Doe" required />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="password">Password</label>
            <Input id="password" required type="password" />
          </div>

          <Button className="w-full mt-2">Create Account</Button>
          
        </CardContent>
        <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
          <div>
            Already have an account?{' '}
            <Link href="/auth/login" className="text-primary hover:underline font-medium">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
