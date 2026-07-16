import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-neutral-800 bg-[#0B0E11] px-5 py-4">
      <div>
        <h1 className="text-xl font-bold text-white">
          LinFei
        </h1>

        <p className="text-xs text-gray-400">
          Perpetual DEX on Hyperliquid
        </p>
      </div>

      <div className="w-40">
        <Button>Connect Wallet</Button>
      </div>
    </header>
  );
}
