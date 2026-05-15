import { useEffect } from "react";
import { useRouter } from "next/router";

export default function CausesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/templates/template-3/initiatives?tab=campaigns");
  }, [router]);
  return null;
}
