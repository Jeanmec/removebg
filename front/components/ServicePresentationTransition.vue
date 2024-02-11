<template>
  <div class="service-presentation-container">
    <div class="service-presentation">
      <div class="service-presentation-illustration">
        <img src="https://via.placeholder.com/300" alt="Illustration" />
      </div>
      <div class="service-presentation-text">
        <h2>Remove the background from your images in one click</h2>
        <p>
          Our Albackaround remover can automaticallvdetectithe subiect.an once
          from anvohoto. remove bain smooth cutout wav without anv manul work
          with artificialintellioence too. its easv to handling hair, animal
          turo any comolext edoes in a tew seconds. Save vour time and eneravito
          make high quality transparent PNG or add the #f3f3f3 background to
          photo
        </p>
        <button>Try it now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.service-presentation-container {
  width: 100%;
  .service-presentation {
    display: flex;
    gap: 2rem;
    .service-presentation-illustration {
      img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin: 0;
  }
}
</style>
