import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminIndexRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/tiket");
  }, []);

  return null;
}
