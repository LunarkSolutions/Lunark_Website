export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Try to serve the requested static asset first (from dist/)
    let res = await env.ASSETS.fetch(request);

    // If not found and the path doesn't look like a file, serve index.html (SPA fallback)
    if (res.status === 404 && !/\.[a-z0-9]+$/i.test(url.pathname)) {
      const indexReq = new Request(`${url.origin}/`, request); // "/" -> index.html
      res = await env.ASSETS.fetch(indexReq);
    }

    return res;
  }
}
