<template>
  <div class="service-presentation-container">
    <div class="service-presentation">
      <div class="service-presentation-illustration">
        <img src="/hand-bg-remove.jpg" alt="Illustration" />
      </div>
      <div class="service-presentation-text">
        <h2>Remove the background from your images in one click</h2>
        <p>
          Elevate your digital content by bidding farewell to distracting
          backgrounds that hinder integration. Our background removal service
          seamlessly adapts images for emails, websites, and more. Impress your
          email subscribers with captivating visuals, enhancing your marketing
          efforts. Optimize your website's visual appeal and boost social media
          engagement with clean, professional images. Unlock the full potential
          of your online presence through our precise and affordable background
          removal solutions.
        </p>
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
