import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bajanspundenet.com"),
  title: "Bajans Pun De ’Net | Barbados with Context",
  description: "Bajan history, culture and current affairs with context. Created and presented by Xannah Moniq.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Bajans Pun De ’Net",
    title: "Bajans Pun De ’Net | Barbados with Context",
    description: "Bajan history, culture and current affairs with context. Created and presented by Xannah Moniq.",
    images: [{
      url: "/bpdn-social-card.png",
      width: 1200,
      height: 630,
      alt: "Bajans Pun De ’Net — Barbados with context",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bajans Pun De ’Net | Barbados with Context",
    description: "Bajan history, culture and current affairs with context. Created and presented by Xannah Moniq.",
    images: ["/bpdn-social-card.png"],
  },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
