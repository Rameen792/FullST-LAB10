import Link from "next/link";
import { routes } from "@/app/routes.js";

export default function RoutesPage() {
  return (
    <div>
      <h2 className="page-title">Routes</h2>
      <ul className="route-list">
        {routes.map((r) => (
          <li key={r.id}>
            <Link href={`/routes/${r.id}`} className="route-link">
              {r.city}, {r.time}, {r.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}