<script lang="ts">
  import type { ActionData } from "./$types";

  export let form: ActionData;

  $: isFirstNameError = form?.firstNameError !== undefined;
  $: isLastNameError = form?.lastNameError !== undefined;
  $: isEmailError = form?.emailError !== undefined;
  $: isPasswordError = form?.passwordError !== undefined;
</script>

<main>
  {#if form?.success}
    <p>Nice job. (This wasn't part of the challenge, that's why it's ugly)</p>
    <a href="/" style:color="white" style:text-decoration="underline">
      Return home
    </a>
  {:else}
    <div class="text">
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>

    <div class="call-to-action">
      <p class="try">
        <strong>Try it free 7 days</strong>
        then $20/mo. thereafter
      </p>

      <form action="?/register" method="post">
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          class:error={isFirstNameError}
          value={form?.firstName || ""}
        />
        {#if form?.firstNameError}
          <p class="error-message">{form.firstNameError}</p>
        {/if}
        <input
          type="text"
          name="last-name"
          placeholder="Last Name"
          class:error={isLastNameError}
          value={form?.lastName || ""}
        />
        {#if form?.lastNameError}
          <p class="error-message">{form.lastNameError}</p>
        {/if}
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          class:error={isEmailError}
          value={form?.email || ""}
        />
        {#if form?.emailError}
          <p class="error-message">{form.emailError}</p>
        {/if}
        <input
          type="password"
          name="password"
          placeholder="Password"
          class:error={isPasswordError}
        />
        {#if form?.passwordError}
          <p class="error-message">{form.passwordError}</p>
        {/if}
        <button>Claim your free trial</button>
        <p class="terms">
          By clicking the button, you are agreeing to our <a href="/">
            Terms and Services
          </a>
        </p>
      </form>
    </div>
  {/if}
</main>

<style>
  main {
    --main-box-shadow: var(--shadow) 0 7px;
    --main-border-radius: 10px;
    --inner-border-radius: 5px;

    padding: 4rem 1rem;
    display: grid;
    gap: 4rem;
    text-align: center;
    max-width: 60ch;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3.5rem;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: var(--red);
    font-weight: 600;
    text-decoration: none;
  }

  form {
    background: var(--white);
    box-shadow: var(--main-box-shadow);
    color: var(--grayish-blue);
    padding: 1.5rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    border-radius: var(--main-border-radius);
  }

  .error {
    outline: solid var(--red);
  }

  .error-message {
    color: var(--red);
    font-size: 0.7rem;
    font-style: italic;
    text-align: right;
    margin-top: -0.8rem;
  }

  input {
    padding: 1rem;
    border: 1px solid var(--grayish-blue);
    border-radius: var(--inner-border-radius);
    font-weight: 600;

    &:active,
    &:focus {
      outline: solid var(--dark-blue);
    }
  }

  button {
    padding: 1rem;
    color: var(--white);
    border: none;
    background: var(--green);
    box-shadow: var(--green-shadow) 0 7px;
    border-radius: var(--inner-border-radius);
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .call-to-action {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .try {
    background: var(--accent);
    padding: 1rem;
    border-radius: var(--main-border-radius);
    box-shadow: var(--main-box-shadow);
  }

  .terms {
    font-size: 0.8rem;
    text-align: center;
  }

  @media (width > 100ch) {
    main {
      grid-template-columns: minmax(40ch, 1fr) minmax(30ch, 50ch);
      max-width: 120ch;
    }

    h1 {
      font-size: 3rem;
    }

    .text {
      text-align: left;
      justify-content: center;
    }
  }
</style>
