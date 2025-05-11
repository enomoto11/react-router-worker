import type { Route } from "./+types/slow";
import { SlowSSR } from "../slow-ssr/slow-ssr";

export async function loader({ request }: Route.LoaderArgs) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    serverTime: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") || "unknown",
  };
}

export default function Slow({ loaderData }: Route.ComponentProps) {
  return <SlowSSR serverTime={loaderData.serverTime} userAgent={loaderData.userAgent} />;
} 