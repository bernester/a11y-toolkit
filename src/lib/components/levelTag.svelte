<script lang="ts">
	export let level: string;
</script>

<div class="tag accent">
	{level}
	{#if level === 'basic'}
		(A)
	{:else if level === 'recommended'}
		(AA)
	{:else if level === 'advanced'}
		(AAA)
	{/if}
</div>
