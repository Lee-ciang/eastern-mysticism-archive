import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Eastern Mysticism Archive",
  description:
    "Research archive exploring Eastern mystical traditions, symbols, feng shui, folklore, and Taoist cosmology.",
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

            <nav className="flex items-center gap-6 text-sm text-neutral-400">
              <Link
                href="/symbols"
                className="hover:text-neutral-200"
              >
                Symbols
              </Link>

              <Link
                href="/feng-shui"
                className="hover:text-neutral-200"
              >
                Feng Shui
              </Link>

              <Link
  href="/folk-beliefs"
  className="hover:text-neutral-200"
>
  Folk Beliefs
</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}