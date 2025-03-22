import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export function useRouterReplace() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [resolveFn, setResolveFn] = useState(null);
  const [isTriggered, setIsTriggered] = useState(false);

  const routerReplace = (url) => {
    return new Promise((resolve, reject) => {
      setResolveFn(() => resolve);
      startTransition(() => {
        router.replace(url, { scroll: false });
      });
    });
  };

  useEffect(() => {
    if (isTriggered && !isPending) {
      if (resolveFn) {
        resolveFn(null);
        setIsTriggered(false);
        setResolveFn(null);
      }
    }
    if (isPending) {
      setIsTriggered(true);
    }
  }, [isTriggered, isPending, resolveFn]);

  return routerReplace;
}
