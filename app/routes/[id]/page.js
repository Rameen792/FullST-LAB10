import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/app/routes.js";

export default async function RoutePage({ params }) {
  const { id } = await params;
  const route = routes.find((r) => r.id === Number(id));

  if (!route) {
    notFound();
  }

  return (
    <div className="route-card">
      <p className="route-info">
        {route.city}, {route.time}, {route.price}
      </p>
      <Link href="/routes" className="btn">
        Back
      </Link>
    </div>
  );
}