export default function Dashboard() {
  return (
    <main
      style={{
        background: "#0B0E11",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h2 style={{ margin: 0 }}>LinFei</h2>

        <button
          style={{
            background: "#2563EB",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Connect Wallet
        </button>
      </div>

      {/* Portfolio */}
      <div
        style={{
          background: "#111827",
          borderRadius: "16px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <p style={{ color: "#9CA3AF", marginBottom: "6px" }}>
          Total Portfolio
        </p>

        <h1 style={{ margin: 0 }}>$0.00</h1>

        <p style={{ color: "#6B7280" }}>
          Connect your wallet to begin trading.
        </p>
      </div>

      {/* Markets */}
      <div
        style={{
          background: "#111827",
          borderRadius: "16px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h3>Markets</h3>

        <div style={{ marginTop: "14px" }}>
          <p>🟠 BTC &nbsp;&nbsp;&nbsp; $118,000</p>
          <p>🟣 ETH &nbsp;&nbsp;&nbsp; $3,700</p>
          <p>🟢 SOL &nbsp;&nbsp;&nbsp; $190</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        <button
          style={{
            padding: "14px",
            borderRadius: "12px",
            background: "#2563EB",
            color: "white",
            border: "none",
          }}
        >
          Trade
        </button>

        <button
          style={{
            padding: "14px",
            borderRadius: "12px",
            background: "#1F2937",
            color: "white",
            border: "none",
          }}
        >
          Points
        </button>

        <button
          style={{
            padding: "14px",
            borderRadius: "12px",
            background: "#1F2937",
            color: "white",
            border: "none",
          }}
        >
          Markets
        </button>

        <button
          style={{
            padding: "14px",
            borderRadius: "12px",
            background: "#1F2937",
            color: "white",
            border: "none",
          }}
        >
          Account
        </button>
      </div>
    </main>
  );
}
