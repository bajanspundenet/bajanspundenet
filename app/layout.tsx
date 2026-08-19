import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bajans Pun De ’Net | Barbados with Context",
  description: "Bajan history, culture and current affairs with context. Created and presented by Xannah Moniq.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
