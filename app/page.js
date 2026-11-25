import Link from "next/link";

export default function Home() {
  return (
    <div className="home-card">
      <p>Welcome to the City Stand Bus Office.</p>
      <Link href="/routes" className="btn">
        See all routes
      </Link>
    </div>
  );
}