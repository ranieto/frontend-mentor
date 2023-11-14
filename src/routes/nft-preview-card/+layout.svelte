<div class="app">
  <slot />
</div>

<style>
  @font-face {
    font-family: Outfit;
    font-weight: 300;
    src:
      local("Outfit Light"),
      url("/src/lib/assets/fonts/Outfit-Light.woff2") format("woff2");
  }

  @font-face {
    font-family: Outfit;
    font-weight: 400;
    src:
      local("Outfit Regular"),
      url("/src/lib/assets/fonts/Outfit-Regular.woff2") format("woff2");
  }

  @font-face {
    font-family: Outfit;
    font-weight: 600;
    src:
      local("Outfit Semi Bold"),
      url("/src/lib/assets/fonts/Outfit-SemiBold.woff2") format("woff2");
  }

  .app {
    /* Primary */
    --soft-blue: hsl(215deg 51% 70%);
    --cyan: hsl(178deg 100% 50%);
    --cyan-overlay: hsl(178deg 100% 50% / 50%);

    /* Neutral */
    --very-dark-blue-main-bg: hsl(217deg 54% 11%);
    --very-dark-blue-card-bg: hsl(216deg 50% 16%);
    --very-dark-blue-line: hsl(215deg 32% 27%);
    --white: hsl(0deg 0% 100%);

    font-family: Outfit, sans-serif;
    font-weight: 400;
    min-height: 100dvh;
    display: grid;
    place-items: center;
    background: var(--very-dark-blue-main-bg);
  }
</style>
