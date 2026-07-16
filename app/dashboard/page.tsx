import Header from "@/components/layout/Header";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0B0E11] text-white">
      <Header />

      <div className="p-5">
        <div className="rounded-2xl bg-[#151A21] p-5 mb-5">
          <p className="text-sm text-gray-400">Portfolio</p>

          <h2 className="mt-2 text-3xl font-bold">$0.00</h2>

          <p className="mt-2 text-sm text-gray-500">
            Connect your wallet to start trading.
          </p>
        </div>

        <div className="rounded-2xl bg-[#151A21] p-5">
          <h3 className="mb-4 text-lg font-semibold">
            Top Markets
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>BTC</span>
              <span>$118,000</span>
            </div>

            <div className="flex justify-between">
              <span>ETH</span>
              <span>$3,700</span>
            </div>

            <div className="flex justify-between">
              <span>SOL</span>
              <span>$190</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
