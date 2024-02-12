async function postRemoveBackground(file) {
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3003/api/remove-background"
      : "URL_PROD";

  return await $fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ file }),
  });
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      postRemoveBackground,
    },
  };
});
