"use client";

export function SignalField({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${compact ? "opacity-60" : ""}`} aria-hidden="true">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(127,159,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(127,159,255,.08)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      <div
        className="absolute -right-32 top-[7%] size-[34rem] rounded-full border border-indigo-300/15"
        style={{ animation: "orbit-cw 80s linear infinite" }}
      />
      <div
        className="absolute -right-20 top-[12%] size-[24rem] rounded-full border border-cyan-200/10"
        style={{ animation: "orbit-ccw 55s linear infinite" }}
      />
      <svg className="absolute right-[7%] top-[20%] h-60 w-80 max-w-[60vw] opacity-50" viewBox="0 0 320 240" fill="none">
        <path d="M10 181C70 181 59 102 122 102C178 102 181 157 239 157C268 157 286 138 310 105" stroke="url(#signal-gradient)" strokeWidth="1.5" />
        <path d="M10 204C83 204 80 147 145 147C202 147 211 74 310 74" stroke="url(#signal-gradient)" strokeWidth="1" strokeDasharray="5 7" />
        {[[10, 181], [122, 102], [239, 157], [310, 105], [145, 147], [310, 74]].map(([cx, cy], index) => (
          <circle key={index} cx={cx} cy={cy} r="3" fill="#9bb5ff" />
        ))}
        <defs>
          <linearGradient id="signal-gradient" x1="0" x2="320" y1="0" y2="0">
            <stop stopColor="#6f8cff" stopOpacity="0" />
            <stop offset=".5" stopColor="#88bbff" />
            <stop offset="1" stopColor="#7de7e6" stopOpacity=".3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
