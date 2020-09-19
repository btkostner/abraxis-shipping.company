<template>
  <div class="container">
    <nuxt-link class="discord" to="/discord">
      Discord
    </nuxt-link>

    <nuxt-link class="star-citizen" to="/star-citizen">
      Star Citizen
    </nuxt-link>
  </div>
</template>

<style scoped>
  .container {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    min-height: 100vh;
    min-width: 100%;
  }

  a {
    align-content: center;
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1 1 auto;
    font-size: 5vh;
    justify-content: center;
    margin: 1px 0;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
  }

  .discord {
    background: linear-gradient(151deg, #8c9ffc 0%, #8392ec 100%);
    text-shadow: 0 1px 1px #242738;
  }

  .minecraft {
    background: linear-gradient(151deg, #61a530 0%, #447c1a 100%);
    text-shadow: 0 1px 1px #070e02;
  }

  .star-citizen {
    background: linear-gradient(151deg, #4c87a2 0%, #2f4a63 100%);
    text-shadow: 0 1px 1px #0d1822;
  }
</style>
