"use client";

import { useState } from "react";

const EMAIL = "theartofnectar@gmail.com";

export default function ContactLink({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard API unavailable — the tooltip still surfaces the address to copy by hand.
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <span className="relative inline-flex items-center">
      {/* Not an <a href="mailto:">: activating a mailto href resets the page's
          script state before the confirmation tooltip below can render. */}
      <button type="button" onClick={handleClick} className={className}>
        Contact
      </button>
      {copied && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap rounded bg-cream px-3 py-1.5 text-[11px] tracking-wide text-bark shadow-lg">
          Copied {EMAIL}
        </span>
      )}
    </span>
  );
}
