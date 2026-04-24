import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://elguntech.github.io'),
  title: {
    default: "ElTek – IT Solutions | Innovative Technology Partner",
    template: "%s | ElTek IT Solutions",
  },
  description:
    "ElTek delivers enterprise-grade IT consulting, cybersecurity, network solutions, and custom software development. Your trusted technology partner for digital transformation.",
  keywords: [
    "IT solutions",
    "IT consulting",
    "cybersecurity",
    "network solutions",
    "software development",
    "ElTek",
    "digital transformation",
  ],
  authors: [{ name: "ElTek IT Solutions" }],
  creator: "ElTek IT Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eltek.solutions",
    siteName: "ElTek IT Solutions",
    title: "ElTek – Innovative IT Solutions for Your Digital Growth",
    description:
      "Enterprise IT consulting, cybersecurity, and custom software development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ElTek IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ElTek IT Solutions",
    description: "Your trusted technology partner for digital transformation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=cabinet-grotesk@400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* Dark mode script (runs before paint to prevent flash) */}
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
