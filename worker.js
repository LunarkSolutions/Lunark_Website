export default {
  async fetch(request, env) {
    // try to serve a static asset first
    let res = await env.ASSETS.fetch(request);

    // If not found and it looks like a page navigation, serve index.html
    if (res.status === 404 && request.method === "GET") {
      const accept = request.headers.get("accept") || "";
      if (accept.includes("text/html")) {
        const url = new URL(request.url);
        return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
      }
    }
    return res;
  },
};
