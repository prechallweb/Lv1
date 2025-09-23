"use client";

import Image from "next/image";
import { useState } from "react";

export default function Pagination({ total = 10, initial = 1 }: { total?: number; initial?: number }) {
  const [page, setPage] = useState(initial);
  const go = (p: number) => setPage(Math.max(1, Math.min(total, p)));

  const nums = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="pager" role="navigation" aria-label="페이지네이션">
      <button onClick={() => go(1)} aria-label="첫 페이지">
        <Image src="/media/icon_prev_double.4e91a2a5.svg" alt="≪" width={16} height={16} />
      </button>
      <button onClick={() => go(page - 1)} aria-label="이전 페이지">
        <Image src="/media/icon_prev.b52d4a24.svg" alt="◀" width={16} height={16} />
      </button>

      {nums.map((n) => (
        <button key={n} className={n === page ? "active" : ""} onClick={() => go(n)}>{n}</button>
      ))}

      <button onClick={() => go(page + 1)} aria-label="다음 페이지">
        <Image src="/media/icon_next.f3c68e84.svg" alt="▶" width={16} height={16} />
      </button>
      <button onClick={() => go(total)} aria-label="마지막 페이지">
        <Image src="/media/icon_next_double.e9b065d9.svg" alt="≫" width={16} height={16} />
      </button>
    </div>
  );
}
