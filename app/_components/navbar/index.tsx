"use client";

import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="/financeAI.svg" width={160} height={39} alt="Finance IA" />
        <Link
          href="/"
          className={
            pathname === "/" ? "text-primary" : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>

      <div>
        <UserButton showName />
      </div>
    </nav>
  );
};

export default Navbar;
