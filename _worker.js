export default {
  async fetch(request, env, ctx) {
    try {
      if (!env || !env.ASSETS || typeof env.ASSETS.fetch !== "function") {
        return new Response(
          "ASSETS binding missing. Check wrangler.toml: [assets] directory must point to your built folder.",
          { status: 500 }
        );
      }

      const url = new URL(request.url);

      // 1) Try to serve the requested static asset first
      let res = await env.ASSETS.fetch(request);

      // 2) If not found and path does NOT look like a file (no extension), serve the SPA shell (index.html)
      const looksLikeFile = /\.[a-z0-9]+$/i.test(url.pathname);
      if (res.status === 404 && !looksLikeFile) {
        // Convert HEAD to GET for the fallback so index.html is returned properly
        const method = request.method === "HEAD" ? "GET" : request.method;

        // Request "/" from assets → resolves to index.html
        const indexUrl = new URL("/", url.origin).toString();
        const indexReq = new Request(indexUrl, {
          method,
          headers: request.headers,
          redirect: "follow",
        });

        res = await env.ASSETS.fetch(indexReq);

        // If index.html is also missing, make it obvious
        if (res.status === 404) {
          return new Response(
            "index.html not found in your assets directory. Did you run `npm run build`?",
            { status: 500 }
          );
        }
      }

      return res;
    } catch (err) {
      // Surface the actual error text to help debug
      return new Response("Worker error: " + (err?.stack || err?.message || String(err)), {
        status: 500,
      });
    }
  }
}
