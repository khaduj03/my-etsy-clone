"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { PiGoogleCardboardLogo } from "react-icons/pi";
import { MdClose } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { Apple } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedButton } from "../Animations/AnimatedButton";
import Image from "next/image";

export default function SignIn({
  isSignUp,
  setIsSignUp,
}: {
  isSignUp: boolean;
  setIsSignUp: (value: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <AnimatedButton>
        <button className="cursor-pointer" onClick={() => setOpen(true)}>
          Sign In
        </button>
      </AnimatedButton>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-[400px]  mt-10 mb-10 bg-white rounded-3xl shadow-xl p-6 relative"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                aria-label="close icon"
                className="absolute  top-1 -right-14 text-white hover:bg-wite/50 rounded-full cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  setIsSignUp(false);
                }}
              >
                <MdClose size={30} />
              </button>

              {/* Header */}
              {!isSignUp ? (
                <div className="flex justify-between items-center mb-4">
                  <p className="font-semibold text-lg">Sign in</p>
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="border text-sm font-medium flex justify-center items-center border-black rounded-full px-4 py-2 shadow hover:shadow-md"
                  >
                    Register
                  </button>
                </div>
              ) : (
                <div className="mb-4">
                  <p className="text-xl font-semibold text-black">
                    Create your account
                  </p>
                  <p className="text-base">Registration is easy.</p>
                </div>
              )}

              {/* Form */}
              <form className="space-y-4">
                <label htmlFor="email" className="text-black">
                  Email address{" "}
                  {isSignUp && <span className="text-red-700">*</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-400 shadow-inner rounded-md"
                  required
                />

                {isSignUp && (
                  <>
                    <label htmlFor="First Name" className="text-black">
                      First Name{" "}
                      {isSignUp && <span className="text-red-700">*</span>}
                    </label>
                    <input
                      type="text"
                      id="First Name"
                      className="w-full px-4 py-3 border shadow-inner border-gray-400 rounded-md"
                      required
                    />
                  </>
                )}

                <label htmlFor="Password" className="text-black">
                  Password {isSignUp && <span className="text-red-700">*</span>}
                </label>
                <input
                  type="password"
                  id="Password"
                  className="w-full px-4 py-3 border border-gray-400 shadow-inner rounded-md"
                  required
                />

                {!isSignUp && (
                  <div className="flex items-center gap-2 mb-4">
                    <Checkbox id="stay-signed-in" />
                    <label
                      htmlFor="stay-signed-in"
                      className="text-black text-base"
                    >
                      Stay signed in
                    </label>
                    <Link
                      href="#"
                      className="ml-auto text-sm underline text-gray-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                )}

                {isSignUp && (
                  <p className="text-base">
                    By clicking Register or Continue with Google, Facebook, or
                    Apple, you agree to {"Etsy's "}
                    <Link href="#" className="underline text-blue-500">
                      Terms of Use
                    </Link>
                    and
                    <Link href="#" className="underline text-blue-500 ml-1">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                )}

                <Button
                  disabled={true}
                  className="w-full rounded-full py-6 text-base font-semibold"
                  type="submit"
                >
                  {isSignUp ? "Register" : "Sign In"}
                </Button>
                {!isSignUp && (
                  <Link
                    href="#"
                    className="text-sm flex justify-center underline text-gray-500"
                  >
                    Trouble signing in?
                  </Link>
                )}
              </form>

              {/* OR Divider */}
              <div className="flex items-center gap-2 my-6">
                <div className="flex-grow h-px bg-gray-200" />
                <span className="text-xs text-gray-700">OR</span>
                <div className="flex-grow h-px bg-gray-200" />
              </div>

              {/* Social Logins */}
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  className="flex gap-2 justify-center py-6 border border-black rounded-full"
                >
                  <Image src="/google.svg" width={23} height={23} alt="apple" />
                  <span>Continue with Google</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex py-6 border border-black  gap-2 justify-center rounded-full"
                >
                  <Image
                    src="/facebook.svg"
                    width={23}
                    height={23}
                    alt="facebook"
                  />
                  <span>Continue with Facebook</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex py-6 border border-black  gap-2 justify-center rounded-full"
                >
                  <Image src="/apple.svg" width={23} height={23} alt="apple" />

                  <span>Continue with Apple</span>
                </Button>
              </div>
              {!isSignUp && (
                <p className="text-base pt-5">
                  By clicking Register or Continue with Google, Facebook, or
                  Apple, you agree to {"Etsy's "}
                  <Link href="#" className="underline text-blue-500">
                    Terms of Use
                  </Link>
                  and
                  <Link href="#" className="underline text-blue-500 ml-1">
                    Privacy Policy
                  </Link>
                  .
                </p>
              )}
              <p className="py-5">
                Etsy may send you communications; you may change your
                preferences in your account settings. {"We'll "}never post
                without your permission.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
