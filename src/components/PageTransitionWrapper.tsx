"use client";

import { Suspense } from "react";
import PageTransitionLoader from "./PageTransitionLoader";

export default function PageTransitionWrapper() {
  return (
    <Suspense fallback={null}>
      <PageTransitionLoader />
    </Suspense>
  );
}
