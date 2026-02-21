"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { otpSchema } from "@/validations/auth.validation";
import OtpVerificationSuccessModal from "../_components/OtpVerificationSuccessModal";

type TOtpVerificationFormValues = z.infer<typeof otpSchema>;

const OtpVerificationForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const form = useForm<TOtpVerificationFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async () => {
    if (!email) {
      toast.error("Email is missing. Please retry from forgot password.");
      return;
    }

    toast.loading("Verifying OTP...", { id: "otp-sim" });
    await new Promise((resolve) => setTimeout(resolve, 900));
    toast.success("OTP verified", { id: "otp-sim" });
    setShowSuccessModal(true);
  };

  const handleResendCode = async () => {
    if (!email) {
      toast.error("Email is missing for resend");
      return;
    }

    toast.loading("Resending code...", { id: "resend-sim" });
    await new Promise((resolve) => setTimeout(resolve, 900));
    toast.success("Code resent", { id: "resend-sim" });
  };

  const handleSetNewPassword = () => {
    router.push(`/auth/set-new-password?email=${encodeURIComponent(email)}`);
  };

  return (
    <>
      <div className="w-[600px] rounded-2xl border bg-card p-8 py-10">
        <div className="mb-16 text-center">
          <h1 className="text-[32px] text-white font-bold mb-2">
            Recover Password
          </h1>
          <p className="text-card-foreground text-sm mx-12">
            Please provide the email address associated with your account, and
            we&apos;ll send you verification code to reset your password.
          </p>
        </div>

        <div className="text-center mx-auto w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="text-center mx-auto -mr-4">
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputOTP
                          maxLength={6}
                          {...field}
                          onChange={(value) => field.onChange(value)}
                          className="flex !justify-center"
                        >
                          <InputOTPGroup className="space-x-2 -ml-4">
                            <InputOTPSlot
                              index={0}
                              className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                            />
                            <InputOTPSlot
                              index={1}
                              className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                            />
                            <InputOTPSlot
                              index={2}
                              className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                            />
                          </InputOTPGroup>
                          <InputOTPSeparator className="text-muted-foreground" />
                          <InputOTPGroup className="space-x-2">
                            <InputOTPSlot
                              index={3}
                              className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                            />
                            <InputOTPSlot
                              index={4}
                              className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                            />
                            <InputOTPSlot
                              index={5}
                              className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                            />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <p className="text-muted-foreground text-sm mb-2">
                  Didn&apos;t receive the code?{" "}
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="text-primary hover:underline"
                  >
                    Resend Code
                  </button>
                </p>
              </div>

              <Button
                type="submit"
                className="w-full h-12"
                disabled={showSuccessModal}
              >
                Verify OTP
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <OtpVerificationSuccessModal
        open={showSuccessModal}
        onSetNewPassword={handleSetNewPassword}
      />
    </>
  );
};

export default OtpVerificationForm;
