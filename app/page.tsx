import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B0E11",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        fontFamily: "sans-serif",
        padding: "24px",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        LinFei
      </h1>

      <p
        style={{
          color: "#9CA3AF",
          fontSize: "18px",
          marginBottom: "40px",
          lineHeight: 1.6,
        }}
      >
        Fast. Beautiful. Decentralized.
        <br />
        Built on Hyperliquid.
      </p>

      <Link href="/dashboard">
        <button
          style={{
            background: "#5B8CFF",
            color: "white",
            border: "none",
            padding: "14px 32px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Launch App
        </button>
      </Link>
    </main>
  );
}
