"use client";

import { useRouter, useSearchParams } from "next/navigation";
import * as z from "zod";
import { useState } from "react";

import AForm from "@/components/form/AForm";
import { AInput } from "@/components/form/AInput";
import { Button } from "@/components/ui/button";

import { loginSchema } from "@/validations/auth.validation";
import { ACheckbox } from "@/components/form/ACheckbox"; 
import Link from "next/link";
import { toast } from "sonner";
import LoginSuccessModal from "../_components/LoginSuccessModal";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/dashboard";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSubmit = async (_data: z.infer<typeof loginSchema>) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    toast.loading("Logging in...", { id: "login-sim" });
    await new Promise((resolve) => setTimeout(resolve, 900));
    toast.success("Login successful", { id: "login-sim" });
    setShowSuccessModal(true);

    setTimeout(() => {
      router.push(redirectUrl);
    }, 1800);
  };

  return (
    <>
      <div className="w-[600px] rounded-2xl border bg-card p-8 py-10">
        <div className="mb-20 text-center">
          <h1 className="mb-2 text-[32px] font-bold text-white">
            Login To Your Account
          </h1>
          <p className="mx-24 text-sm text-card-foreground">
            Please log in to manage your dashboard and access all your
            administrative tools
          </p>
        </div>

        <AForm
          schema={loginSchema}
          defaultValues={{
            email: "junayednoman05@gmail.com",
            password: "newpass",
            rememberPassword: false,
          }}
          onSubmit={onSubmit}
        >
          <AInput name="email" label="Email address" type="email" required />
          <AInput name="password" label="Password" type="password" required />

          <div className="flex items-center justify-between">
            <ACheckbox label="Remember password" name="rememberPassword" />
            <div className="text-right">
              <Link href="/auth/forgot-password">
                <Button
                  type="button"
                  variant="link"
                  className="h-auto p-0 font-normal text-primary"
                >
                  Forgot Password
                </Button>
              </Link>
            </div>
          </div>

          <Button
            disabled={isSubmitting || showSuccessModal}
            type="submit"
            className="h-14 w-full"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </AForm>
      </div>

      <LoginSuccessModal open={showSuccessModal} />
    </>
  );
};

export default LoginForm;
