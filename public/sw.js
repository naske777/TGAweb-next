self.addEventListener("fetch", (event) => {
  const requestUrl = event.request.url;

  if (!requestUrl.includes("key=")) {
    console.log(requestUrl);
    return;
  }

  // Immediately call event.respondWith with a promise that resolves to the response
  event.respondWith(
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/api/map", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: event.request.url,
            headers: Array.from(event.request.headers.entries()),
          }),
        });
        return res;
      } catch (error) {
        console.error("Fetching failed:", error);
        // Respond with a fallback or error response here, if necessary
        return new Response("An error occurred", { status: 500 });
      }
    })()
  );
});
