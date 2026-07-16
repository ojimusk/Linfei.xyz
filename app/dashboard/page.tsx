export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B0E11",
        color: "white",
        padding: 20,
        fontFamily: "sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <h1>LinFei</h1>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: 10,
          }}
        >
          Connect Wallet
        </button>
      </header>

      <section
        style={{
          background: "#111827",
          padding: 20,
          borderRadius: 16,
          marginBottom: 20,
        }}
      >
        <p style={{ color: "#9CA3AF" }}>Portfolio</p>
        <h2>$0.00</h2>
      </section>

      <section
        style={{
          background: "#111827",
          padding: 20,
          borderRadius: 16,
        }}
      >
        <h3>Markets</h3>

        <div style={{ marginTop: 16 }}>
          <p>BTC • $118,000</p>
          <p>ETH • $3,700</p>
          <p>SOL • $190</p>
        </div>
      </section>
    </main>
  );
}
