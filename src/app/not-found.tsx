"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import planet404 from "@/../public/assets/lottie/404.json";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-12">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <div className="w-full max-w-xl sm:max-w-2xl">
          <Lottie animationData={planet404} loop autoplay />
        </div>
      </Suspense>
      <p className="mt-6 text-center text-base sm:text-lg text-muted-foreground max-w-xl">
        You found the secret level where even the 404 aliens got lost. Let&rsquo;s beam you back home.
      </p>
      <Link href="/" className="mt-6">
        <Button size="lg" className="px-6">
          Take me home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
