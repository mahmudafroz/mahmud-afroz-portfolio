/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";

export function ThemeScript() {
  const code = [
    "(function() {",
    "  try {",
    "    var stored = localStorage.getItem('theme');",
    "    var theme = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'dark';",
    "    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;",
    "    var useDark = theme === 'dark' || (theme === 'system' && prefersDark);",
    "    document.documentElement.classList.toggle('dark', useDark);",
    "    document.documentElement.dataset.theme = theme;",
    "  } catch (error) {",
    "    document.documentElement.classList.add('dark');",
    "    document.documentElement.dataset.theme = 'system';",
    "  }",
    "})();"
  ].join("\n");

  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {code}
    </Script>
  );
}
