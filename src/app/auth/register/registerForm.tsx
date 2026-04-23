"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { RegisterDto } from "../../services/types/user";
import { authFormRules } from "../../../shared/validation/authFormRules";
import { useState } from "react";
import { registerServices } from "@/services/auth/register/registerServices";
import { useRouter } from "next/navigation";
export default function RegisterForm() {
  const [typeUser, setTypeUser] = useState<"client" | "freelancer">("client");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterDto>();
  const onSubmit = async (data: RegisterDto) => {
    try {
      await registerServices(data,typeUser);
      // ✅ redirect
      if(typeUser === "freelancer"){
        router.push("/projects");
      }
      // router.push("/");
      console.log("register Successfully");
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Create an account
          </CardTitle>
          <CardDescription>
            Choose your account type and enter your details to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* CLIENT */}
            <div
              onClick={() => setTypeUser("client")}
              className={`border rounded-lg p-4 cursor-pointer transition-all text-center
      ${
        typeUser === "client"
          ? "border-primary bg-primary/5"
          : "hover:border-primary"
      }
    `}
            >
              <h3 className="font-semibold text-sm">I'm a Client</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Hiring for a project
              </p>
            </div>

            {/* FREELANCER */}
            <div
              onClick={() => setTypeUser("freelancer")}
              className={`border rounded-lg p-4 cursor-pointer transition-all text-center
      ${
        typeUser === "freelancer"
          ? "border-primary bg-primary/5"
          : "hover:border-primary"
      }
    `}
            >
              <h3 className="font-semibold text-sm">I'm a Freelancer</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Looking for work
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="last-name">
                Full name
              </label>
              <Input
                id="last-name"
                placeholder="Doe"
                {...register("fullName", authFormRules.fullName)}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                placeholder="m@example.com"
                type="email"
                {...register("email", authFormRules.email)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                type="password"
                {...register("password", authFormRules.password)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full mt-2">
              {" "}
              {isSubmitting ? "Creating..." : "Create Account"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
          <div>
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-primary hover:underline font-medium"
            >
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
