import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>This page could not be found.</p>
      <Link href="/routes" className="btn">
        Back
      </Link>
    </div>
  );
}