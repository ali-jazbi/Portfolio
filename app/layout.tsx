import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.position}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Ali Jazbi, a frontend-focused full-stack developer in Tehran. Selected healthcare, e-commerce and application work with React, Next.js, TypeScript and Node.js.",
  metadataBase: siteUrl ?? new URL("http://localhost:3010"),
  authors: [{ name: profile.name }],
  openGraph: {
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
