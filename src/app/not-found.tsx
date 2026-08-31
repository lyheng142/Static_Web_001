import Link from "next/link";


export default function NotFound() {
  return (
    <>

      <main
        style={{
          minHeight: "60vh",
          display: "grid",
          placeItems: "center",
          padding: 40,
          textAlign: "center",
        }}
      >
        <div>
          <div style={{ fontSize: 70 }}>
            🍚
          </div>

          <p
            style={{
              color: "#f97316",
              fontWeight: 900,
              letterSpacing: ".08em",
            }}
          >
            404 · NOT FOUND
          </p>

          <h1
            style={{
              fontSize:
                "clamp(42px,7vw,70px)",
              letterSpacing: "-.05em",
              margin: "10px 0",
            }}
          >
            That dish disappeared.
          </h1>

          <p
            style={{
              color: "#6b7280",
              maxWidth: 520,
              lineHeight: 1.7,
              margin: "0 auto 24px",
            }}
          >
            We could not find this food. Let's take
            you back to the Khmer food collection.
          </p>

          <Link
            href="/foods"
            style={{
              display: "inline-flex",
              padding: "13px 20px",
              background: "#f97316",
              color: "#fff",
              borderRadius: 11,
              fontWeight: 800,
            }}
          >
            Browse Khmer Foods →
          </Link>
        </div>
      </main>

    </>
  );
}