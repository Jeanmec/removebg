async function postRemoveBackground(base64) {
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3003/api/remove-background/"
      : "URL_PROD";

  return await $fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ base64 }),
  });
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      postRemoveBackground,
    },
  };
});
