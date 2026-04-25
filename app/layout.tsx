import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eltek.az"),
  title: {
    default: "ElTek – IT Solutions | İnnovativ Texnologiya Tərəfdaşı",
    template: "%s | ElTek IT Solutions",
  },
  description:
    "ElTek Azərbaycanın aparıcı IT şirkətidir. IT konsaltinq, kibertəhlükəsizlik, şəbəkə həlləri və fərdi proqram təminatı xidmətləri göstəririk.",
  keywords: ["IT həlləri", "IT konsaltinq", "kibertəhlükəsizlik", "şəbəkə həlləri", "proqram təminatı", "ElTek", "Azərbaycan IT"],
  authors: [{ name: "ElTek IT Solutions" }],
  creator: "ElTek IT Solutions",
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: "https://eltek.az",
    siteName: "ElTek IT Solutions",
    title: "ElTek – Rəqəmsal Gələcəyiniz üçün İnnovativ IT Həlləri",
    description: "Korporativ IT konsaltinq, kibertəhlükəsizlik və fərdi proqram təminatı.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=cabinet-grotesk@400,500,700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('eltek-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased font-body bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
