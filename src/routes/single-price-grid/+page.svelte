<div class="container">
  <div class="block main-block">
    <h1>Join our community</h1>
    <h2 class="lead">30-day, hassle-free money back guarantee</h2>
    <p>
      Gain access to our full library of tutorials along with expert code
      reviews. Perfect for any developers who are serious about honing their
      skills.
    </p>
  </div>
  <div class="block subscription-block">
    <h1>Monthly Subscription</h1>
    <div class="subscription-info">
      <p class="price-container">
        <span class="price">$29</span>
        <span class="price-period">per month</span>
      </p>
      <p>Full access for less than $1 a day</p>
    </div>
    <a href="/">Sign Up</a>
  </div>
  <div class="block motivation-block">
    <h1>Why Us</h1>
    <ul>
      <li>Tutorials by industry experts</li>
      <li>Peer & expert code review</li>
      <li>Coding exercises</li>
      <li>Access to our GitHub repos</li>
      <li>Community forum</li>
      <li>Flashcard decks</li>
      <li>New videos every week</li>
    </ul>
  </div>
</div>

<style>
  .container {
    --block-padding: 2.5rem;

    display: grid;
    margin: 1rem;
    max-width: 70ch;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 4fr 5fr;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: hsl(0deg 0% 0% / 20%) 0 10px 25px;

    @media (width < 78ch) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      max-width: 40ch;
      min-width: 25ch;
    }
  }

  .block {
    padding: var(--block-padding);
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  a {
    text-decoration: none;
    padding: 1rem;
    background: var(--bright-yellow);
    color: var(--white);
    display: block;
    border-radius: 5px;
    box-shadow: hsl(0deg 0% 0% / 10%) 0 10px 15px;
    text-align: center;
    font-weight: 700;

    &:hover {
      background: var(--bright-yellow-darker);
    }
  }

  h1 {
    font-weight: 700;
    font-size: 1.3rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1.1rem;
  }

  .main-block {
    background: var(--white);
    color: var(--grayish-blue);
    grid-column: 1 / -1;

    & h1 {
      color: var(--cyan);
    }

    & .lead {
      color: var(--bright-yellow);
    }
  }

  .subscription-block {
    background: var(--cyan);
  }

  .motivation-block {
    background: var(--light-cyan);

    & ul {
      opacity: 0.7;
    }
  }

  .subscription-info {
    flex: 1;
  }

  .price-container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .price {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .price-period {
    opacity: 0.5;
  }
</style>
