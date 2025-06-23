async function postRemoveBackground(file) {
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4445/api/remove-background"
      : "https://api.remove-my-background.com/api/remove-background";

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
