<script lang="ts">
  import JamFacebook from "~icons/jam/facebook";
  import JamInstagram from "~icons/jam/instagram";
  import JamTwitter from "~icons/jam/twitter";
  import mockups from "./illustration-mockups.svg";
  import logo from "./logo.svg";
</script>

<div class="container">
  <header><img src={logo} alt="" /></header>
  <main>
    <img src={mockups} alt="" />
    <div class="content">
      <h1 class="title">Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <a class="register-button" href="/">Register</a>
    </div>
    <div class="social-icons">
      <a href="/" class="social-icon">
        <JamFacebook />
      </a>
      <a href="/" class="social-icon">
        <JamTwitter />
      </a>
      <a href="/" class="social-icon">
        <JamInstagram />
      </a>
    </div>
  </main>
</div>

<style>
  .container {
    padding: 3rem;
    margin: 1rem;
  }

  header {
    text-align: left;
    margin-bottom: 3rem;
  }

  main {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 3rem;
  }

  h1 {
    font-family: Poppins, sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }

  .register-button {
    margin-top: 2rem;
    display: inline-block;
    background: var(--white);
    color: var(--violet);
    border-radius: 50px;
    padding: 0.8rem 3.5rem;
    text-decoration: none;
    font-family: Poppins, sans-serif;
    box-shadow: hsl(0deg 0% 0% / 20%) 0 10px 10px;

    &:hover {
      background: var(--soft-magenta);
      color: var(--white);
    }
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    justify-content: end;
    grid-column: 1 / -1;
  }

  .social-icon {
    border: 1px solid #fff;
    color: #fff;
    padding: 0.5rem;
    border-radius: 50%;

    &:hover {
      background: var(--soft-magenta);
      border: 1px solid var(--soft-magenta);

      /* background: #fff; */
    }
  }

  @media (width < 131ch) {
    .container {
      padding: 1.5rem;
    }

    main {
      grid-template-columns: 1fr;
      text-align: center;
      justify-items: center;
    }

    a {
      padding: 0.8rem 5.5rem;
    }

    .social-icons {
      justify-self: center;
    }
  }
</style>
