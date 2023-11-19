<script lang="ts">
	import type { ActionData } from "./$types";
	import CallToAction from "./CallToAction.svelte";
	import Thanks from "./Thanks.svelte";

	export let form: ActionData;
</script>

{#if form?.success}
	<Thanks email={form.email} />
{:else}
	<CallToAction email={form?.email} errorMessage={form?.error} />
{/if}
