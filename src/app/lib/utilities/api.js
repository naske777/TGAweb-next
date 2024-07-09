"use server";

const baseUrl = process.env.API_URL;

export async function api(url, data, method = "GET") {
  try {
    console.log("Method: " + method);
    console.log("fetch a: " + baseUrl + url);
    console.log("Data: " + JSON.stringify(data));
    const response = await fetch(baseUrl + url + "/", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
}
