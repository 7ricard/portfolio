import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex w-full justify-center bg-background px-6 py-10 sm:px-12">
      <div className="w-full max-w-[720px]">
        <Link
          href="/"
          aria-label="Home"
          className="inline-flex opacity-100 transition-opacity hover:opacity-80"
        >
          <Image
            src="/android-chrome-192x192.png"
            alt=""
            width={32}
            height={32}
            className="rounded-md"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
