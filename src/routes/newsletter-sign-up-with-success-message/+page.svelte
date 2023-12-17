<script lang="ts">
	import { superForm } from "sveltekit-superforms/client";
	import CallToAction from "./CallToAction.svelte";
	import Thanks from "./Thanks.svelte";

	export let data;
	const { form, errors } = superForm(data.form);
</script>

{#if $form.email && !$errors.email}
	<Thanks email={$form.email} />
{:else}
	<CallToAction email={$form.email} errorMessage={$errors.email?.at(0) || ""} />
{/if}
