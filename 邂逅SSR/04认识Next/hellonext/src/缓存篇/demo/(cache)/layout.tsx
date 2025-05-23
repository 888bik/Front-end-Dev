import Link from "next/link";
import React from "react";

// export const dynamic = "force-dynamic";

export default function CacheLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <section className="p-5">
      <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
        <Link href="/demo/about">About</Link>
        <Link href="/demo/settings">Settings</Link>
      </nav>
      {children}
    </section>
  );
}
