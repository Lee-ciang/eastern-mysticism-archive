import Link from "next/link";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://eastern-mysticism-archive.vercel.app"),
  title: "Eastern Mysticism Archive",
  description:
    "Research archive exploring Eastern mystical traditions, symbols, feng shui, folklore, and Taoist cosmology.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "XjoiYPpNdTrSD7_K7mYmA2_6RtlOqMTqGnCPOVJhGxc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-neutral-100">
        <header className="border-b border-neutral-900">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="text-sm uppercase tracking-[0.3em] text-neutral-400"
            >
              Eastern Mysticism Archive
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-neutral-700">
              <Link
                href="/symbols"
                className="transition hover:text-black"
              >
                Symbols
              </Link>

              <Link
                href="/feng-shui"
                className="transition hover:text-black"
              >
                Feng Shui
              </Link>

              <Link
                href="/folk-beliefs"
                className="transition hover:text-black"
              >
               Folk Beliefs
              </Link>

              <Link
                href="/taoism"
                className="transition hover:text-black"
              >
               Taoism
              </Link>

              <Link
                href="/rituals"
                className="transition hover:text-black"
              >
               Rituals
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
