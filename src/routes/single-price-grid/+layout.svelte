<div class="app">
  <slot />
</div>

<style>
  @font-face {
    font-family: Karla;
    font-weight: 400;
    src:
      local("Karla Regular"),
      url("/src/lib/assets/fonts/Karla-Regular.woff2") format("woff2");
  }

  @font-face {
    font-family: Karla;
    font-weight: 700;
    src:
      local("Karla Bold"),
      url("/src/lib/assets/fonts/Karla-Bold.woff2") format("woff2");
  }

  .app {
    /* Primary */
    --white: #fff;
    --cyan: hsl(179deg 62% 43%);
    --light-cyan: hsl(180deg 38% 58%);
    --bright-yellow: hsl(71deg 73% 54%);
    --bright-yellow-darker: hsl(71deg 73% 47%);

    /* Neutral */
    --light-gray: hsl(204deg 43% 93%);
    --grayish-blue: hsl(218deg 22% 67%);

    font-family: Karla, sans-serif;
    min-height: 100dvh;
    display: grid;
    place-items: center;
    background: var(--light-gray);
    color: var(--white);
  }
</style>
