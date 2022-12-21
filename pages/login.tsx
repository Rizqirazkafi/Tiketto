import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LoginRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/api/auth/signin");
  }, []);

  return null;
}
