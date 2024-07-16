"use server"
export async function POST(request) {
  try {
    const Data = await request.json();
    console.log(Data);
    const { url, headers } = Data;
    const key = process.env.TOMTOM_API_KEY;
    //bussca la palabra key y la reemplaza por el valor de la variable key
    const completedUrl = url.replace("key=apikey", `key=${key}`);
    console.log("Completa: " + completedUrl);
    const resp = await fetch(completedUrl, {
      method: "GET",
      headers: headers,
    });
    if (!resp.ok) {
      throw new Error(`Network response was not ok, status: ${resp.status}`);
    }

    const contentType = resp.headers.get("Content-Type");
    console.log(contentType);
    if (contentType && contentType.includes("application/json")) {
      // Devolver directamente la respuesta JSON
      return new Response(await resp.text(), {
        status: resp.status,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else if (
      contentType &&
      (contentType.startsWith("image/") ||
        contentType === "application/octet-stream")
    ) {
      // Devolver la imagen o datos binarios como blob sin convertir
      const blob = await resp.blob();
      return new Response(blob, {
        status: resp.status,
        headers: {
          "Content-Type": contentType, // Mantener el tipo de contenido original
        },
      });
    } else {
      // Devolver como texto por defecto para cualquier otro tipo de contenido
      return new Response(await resp.text(), {
        status: resp.status,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
