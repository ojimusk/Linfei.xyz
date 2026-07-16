import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-neutral-800 bg-[#0B0E11]">
      <div className="mx-auto flex max-w-md justify-around py-3 text-sm text-gray-400">

        <Link href="/dashboard" className="text-white font-semibold">
          Dashboard
        </Link>

        <Link href="/markets">
          Markets
        </Link>

        <Link href="/trade">
          Trade
        </Link>

        <Link href="/points">
          Points
        </Link>

        <Link href="/account">
          Account
        </Link>

      </div>
    </nav>
  );
}
