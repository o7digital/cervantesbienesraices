import type { ScriptHTMLAttributes } from "react";

type ScriptProps = ScriptHTMLAttributes<HTMLScriptElement> & {
  strategy?: "afterInteractive" | "beforeInteractive" | "lazyOnload" | "worker";
};

export default function Script({ strategy: _strategy, children, ...props }: ScriptProps) {
  return <script {...props}>{children}</script>;
}
