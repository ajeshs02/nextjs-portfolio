"use client";
import { useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { LuArrowUpRight, LuCheck, LuCopy, LuMail } from "react-icons/lu";

const EMAIL = "ajeshs.dev@gmail.com";

const CONTACT_LINKS = [
  { label: "Email", text: EMAIL, copy: EMAIL, href: `mailto:${EMAIL}`, Icon: LuMail },
  { label: "LinkedIn", text: "in/ajesh02", copy: "https://www.linkedin.com/in/ajesh02/", href: "https://www.linkedin.com/in/ajesh02/", Icon: FaLinkedinIn },
  { label: "GitHub", text: "ajeshs02", copy: "https://github.com/ajeshs02", href: "https://github.com/ajeshs02", Icon: FaGithub },
  { label: "Phone / WhatsApp", text: "+91 98957 65329", copy: "+91 98957 65329", href: "https://wa.me/919895765329", Icon: FaWhatsapp },
];

const actionBtn =
  "flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-white/10 text-white-100 transition duration-300 hover:border-yellow/60 hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow";

export default function ContactCards() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied((c) => (c === label ? null : c)), 1800);
    } catch {
      // clipboard blocked: the open link still works
    }
  };

  return (
    <div className="relative z-10 mt-14 mx-auto grid w-full max-w-3xl grid-cols-1 sm:grid-cols-2 gap-4">
      {CONTACT_LINKS.map(({ label, text, copy: value, href, Icon }) => (
        <div
          key={label}
          data-rv
          className="pf-glow flex items-center gap-3 rounded-2xl border border-white/10 bg-black-200/60 px-4 py-4"
        >
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-white/10 text-white">
            <Icon size={18} aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] text-white-100">
              {label}
            </span>
            <span className="block truncate text-sm text-white">{text}</span>
          </span>
          <button
            type="button"
            onClick={() => copy(label, value)}
            aria-label={`Copy ${label}`}
            title={copied === label ? "Copied" : "Copy"}
            className={actionBtn}
          >
            {copied === label ? <LuCheck size={16} className="text-yellow" /> : <LuCopy size={16} />}
          </button>
          <a
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={`Open ${label}`}
            title="Open"
            className={actionBtn}
          >
            <LuArrowUpRight size={16} />
          </a>
        </div>
      ))}
      <span className="sr-only" aria-live="polite">{copied ? `${copied} copied` : ""}</span>
    </div>
  );
}
