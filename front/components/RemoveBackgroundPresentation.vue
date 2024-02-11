<template>
  <div class="remove-background-form-contrainer">
    <span class="description"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorum aut
      quam nisi eaque quod molestias voluptatem eveniet deserunt distinctio
      adipisci a asperiores, amet saepe obcaecati aliquam tenetur corrupti
      facilis?</span
    >
    <div class="form-presentation-container">
      <div class="form-container">
        <form-remove-background />
      </div>
    </div>
  </div>
</template>

<script>
import RemoveBackgroundForm from "../components/FormRemoveBackground.vue";
export default {
  components: { RemoveBackgroundForm },
};
</script>

<style lang="scss" scoped>
.remove-background-form-contrainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .advantages-container {
    display: flex;
    width: 50%;
  }

  .form-presentation-container {
    width: 80%;
    display: flex;
    column-gap: 3em;
    .form-container {
      width: 50%;
    }
  }
  .description {
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
    display: block;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 75%;
  }
}
</style>
