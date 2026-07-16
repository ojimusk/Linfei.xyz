import Header from "@/components/layout/Header";
import Card from "@/components/ui/Card";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0B0E11] text-white">
      <Header />

      <div className="space-y-5 p-5">

        <Card title="Portfolio">
          <h1 className="text-3xl font-bold">$0.00</h1>

          <p className="mt-2 text-sm text-gray-400">
            Connect your wallet to start trading.
          </p>
        </Card>

        <Card title="Top Markets">
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
        </Card>

      </div>
    </main>
  );
}
