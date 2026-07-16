export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0B0B0B",
        color: "white",
        flexDirection: "column",
        padding: "24px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        LinFei
      </h1>

      <p
        style={{
          color: "#A0A0A0",
          marginBottom: "32px",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        Fast. Beautiful. Decentralized.
        <br />
        Built on Hyperliquid.
      </p>

      <button
        style={{
          background: "#5B8CFF",
          color: "white",
          border: "none",
          padding: "14px 32px",
          borderRadius: "12px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Launch App
      </button>
    </main>
  );
}
