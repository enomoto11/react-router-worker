export function SlowSSR({ serverTime, userAgent }: { serverTime: string; userAgent: string }) {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <h1 className="text-2xl font-bold mb-4">SSR Delay Mock</h1>
      <ul className="space-y-2">
        <li><strong>Server Time (SSR):</strong> {serverTime}</li>
        <li><strong>User-Agent (SSR):</strong> {userAgent}</li>
        <li className="text-yellow-700 font-bold">⏳ This page was server-side rendered with a 2s delay!</li>
      </ul>
    </main>
  );
} 