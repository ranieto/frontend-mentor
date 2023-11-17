<script lang="ts">
  import MaterialSymbolsErrorCircleRounded from "~icons/material-symbols/error-circle-rounded";
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
        <div class="input-wrapper" class:error={isFirstNameError}>
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            value={form?.firstName || ""}
          />

          <div class="error-icon">
            {#if isFirstNameError}
              <MaterialSymbolsErrorCircleRounded />
            {/if}
          </div>
        </div>
        {#if form?.firstNameError}
          <p class="error-message">{form.firstNameError}</p>
        {/if}
        <div class="input-wrapper" class:error={isLastNameError}>
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            value={form?.lastName || ""}
          />
          <div class="error-icon">
            {#if isLastNameError}
              <MaterialSymbolsErrorCircleRounded />
            {/if}
          </div>
        </div>
        {#if form?.lastNameError}
          <p class="error-message">{form.lastNameError}</p>
        {/if}
        <div class="input-wrapper" class:error={isEmailError}>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={form?.email || ""}
          />

          <div class="error-icon">
            {#if isEmailError}
              <MaterialSymbolsErrorCircleRounded />
            {/if}
          </div>
        </div>
        {#if form?.emailError}
          <p class="error-message">{form.emailError}</p>
        {/if}
        <div class="input-wrapper" class:error={isPasswordError}>
          <input type="password" name="password" placeholder="Password" />
          <div class="error-icon">
            {#if isPasswordError}
              <MaterialSymbolsErrorCircleRounded />
            {/if}
          </div>
        </div>
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
    border: none;
    font-weight: 600;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  .input-wrapper {
    padding: 1rem;
    border: 1px solid var(--grayish-blue);
    border-radius: var(--inner-border-radius);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:focus-within {
      outline: solid var(--dark-blue);
    }
  }

  .error-icon {
    font-size: 1.4rem;
    color: var(--red);
    min-width: 2ch;
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
