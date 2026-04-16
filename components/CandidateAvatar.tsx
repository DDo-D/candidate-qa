"use client";

import Image from "next/image";
import { useState } from "react";

export default function CandidateAvatar() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="size-28 shrink-0 rounded-full bg-zinc-800 flex items-center justify-center">
        <span className="text-2xl font-medium text-zinc-200 leading-none">
          종
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/avatar.png"
      alt="후보자 아바타"
      width={224}
      height={224}
      quality={100}
      className="size-28 shrink-0 rounded-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}
