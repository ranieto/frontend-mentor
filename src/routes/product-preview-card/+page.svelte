<script lang="ts">
  import MaterialSymbolsShoppingCartOutline from "~icons/material-symbols/shopping-cart-outline";
  import productImage from "./image-product-desktop.jpg";
</script>

<main>
  <img src={productImage} alt="A Chanel perfume" />
  <div class="content">
    <p class="category">Perfume</p>
    <h1>Gabrielle Essence Eau De Parfum</h1>
    <p class="description">
      A floral, solar and voluptuous interpretation composed by Olivier Polge,
      Perfumer-Creator for the House of CHANEL.
    </p>
    <div class="price-container">
      <div class="price">$149.99</div>
      <div class="original-price">$169.99</div>
    </div>
    <button><MaterialSymbolsShoppingCartOutline />Add to Cart</button>
  </div>
</main>

<style>
  main {
    margin: 1rem;
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 65ch;
    max-height: 43ch;

    @media (width < 90ch) {
      max-width: 35ch;
      max-height: unset;
      grid-template-columns: 1fr;
      grid-template-rows: 30ch 1fr;
    }
  }

  img {
    object-fit: cover;
  }

  .content {
    background: var(--white);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1,
  .price {
    font-family: Fraunces, serif;
    font-size: 2rem;
    font-weight: 700;
  }

  h1 {
    color: var(--very-dark-blue);
  }

  .category {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 0.8rem;
  }

  .price-container {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .price {
    color: var(--dark-cyan);
  }

  .original-price {
    text-decoration: line-through;
    font-size: 0.9rem;
  }

  button {
    color: var(--white);
    background: var(--dark-cyan);
    border: none;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    cursor: pointer;

    &:hover {
      background-color: var(--darker-cyan);
    }
  }
</style>
