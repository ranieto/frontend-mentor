<div class="app">
  <slot />
</div>

<style>
  @font-face {
    font-family: "Libre Franklin";
    font-weight: 300;
    src:
      local("Libre Franklin Thin"),
      url("/src/lib/assets/fonts/LibreFranklin-Thin.woff2") format("woff2");
  }

  @font-face {
    font-family: "Libre Franklin";
    font-weight: 600;
    src:
      local("Libre Franklin Medium"),
      url("/src/lib/assets/fonts/LibreFranklin-Medium.woff2") format("woff2");
  }

  @font-face {
    font-family: "Libre Franklin";
    font-weight: 700;
    src:
      local("Libre Franklin Bold"),
      url("/src/lib/assets/fonts/LibreFranklin-Bold.woff2") format("woff2");
  }

  .app {
    /* Primary */
    --blue: hsl(223deg 87% 63%);
    --blue-shadow: hsl(223deg 87% 63% / 30%);

    /* Secondary */
    --pale-blue: hsl(223deg 100% 88%);
    --light-red: hsl(354deg 100% 66%);
    --green: hsl(154deg 60% 40%);

    /* Neutral */
    --white: hsl(0deg 0% 100%);
    --gray: hsl(0deg 0% 59%);
    --very-dark-blue: hsl(209deg 33% 12%);

    font-family: "Libre Franklin", sans-serif;
    font-weight: 300;
    min-height: 100dvh;
    display: grid;

    /* place-items: center; */
    justify-items: center;
    background: var(--white);
    color: var(--very-dark-blue);
  }
</style>
