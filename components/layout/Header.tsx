export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-4 border-b border-neutral-800 bg-[#0B0E11]">
      <div>
        <h1 className="text-xl font-bold text-white">LinFei</h1>
        <p className="text-xs text-gray-400">
          Perpetual DEX on Hyperliquid
        </p>
      </div>

      <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition">
        Connect Wallet
      </button>
    </header>
  );
}
