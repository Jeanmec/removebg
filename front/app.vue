<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Vos styles globaux */
body {
  padding: 0;
  margin: 0;
}
</style>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(248, 0, 0, 0.5);
  border-radius: 5px;
}
</style>
