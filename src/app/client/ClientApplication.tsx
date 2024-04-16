"use client";

import {ReactNode, useEffect} from "react";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function ClientApplication({ children }: { children: ReactNode }) {
  const router:AppRouterInstance = useRouter();
  function handleKeyUp(e:KeyboardEvent) {
    console.log(`e`, e);
    // router.push("/dashboard");
  }

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, []);

  return children;
}