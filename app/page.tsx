export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex flex-col justify-center items-center px-6">

      <div className="max-w-md text-center">

        <h1 className="text-5xl font-bold mb-4">
          LinFei
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Fast. Beautiful. Decentralized Perpetual Exchange built on Hyperliquid.
        </p>

        <button
          className="
          w-full
          bg-[#5B8CFF]
          py-4
          rounded-xl
          font-semibold
          text-lg
          hover:opacity-90
          transition"
        >
          Launch App
        </button>

      </div>

    </main>
  );
}
