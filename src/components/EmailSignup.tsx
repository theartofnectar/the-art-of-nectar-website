"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://art-of-nectar-email.theartofnectar.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center space-y-2">
        <p className="font-serif text-2xl text-cream italic">
          Thank you for joining us.
        </p>
        <p className="font-sans text-sm text-cream/50 tracking-wide">
          We&apos;ll be in touch when our honey is ready.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-0 w-full max-w-md border border-honey/30"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-5 py-4 bg-transparent border-r-0 sm:border-r border-honey/30 text-cream placeholder:text-cream/30 font-sans text-sm outline-none focus:bg-white/5 transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-4 bg-honey text-bark font-sans text-xs font-bold tracking-[0.3em] uppercase hover:bg-honey-light transition-colors duration-300 disabled:opacity-60 whitespace-nowrap"
      >
        {status === "loading" ? "···" : "Join Us"}
      </button>
    </form>
  );
}
