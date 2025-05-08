"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { memo } from "react";

const about = memo(() => {
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName);
  const searchParams = useSearchParams();

  function update(s: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("name", s);
    window.history.pushState(null, "", `?${params.toString()}`);
  }
  return (
    <div>
      about Page
      <div>
        <button onClick={() => router.back()}>go back</button>
        <button onClick={() => update("abc")}>修改</button>
      </div>
    </div>
  );
});

about.displayName = "about";

export default about;
