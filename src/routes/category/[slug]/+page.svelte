<script lang="ts">
	import BackButton from '$components/BackButton.svelte';
	import LevelTag from '$components/LevelTag.svelte';

	export let data: {
		techniques: any;
		category: string;
		level: string;
	};
</script>

<svelte:head>
	<title>{data.level} techniques for {data.category}</title>
</svelte:head>
<section>
	<hgroup>
		<BackButton />
		<h1 class="page-title space-2">{data.level} techniques for {data.category}</h1>
	</hgroup>

	{#if data.techniques && data.techniques.length > 0}
		<ul class="techniques unstyled">
			{#each data.techniques as technique}
				<li class="technique">
					<div class="technique--left">
						<a href={`/${technique.slug}`} class="technique-title">{technique.title}</a>
						{#if technique.description}
							<p>{technique.description || 'No description available.'}</p>
						{/if}
						{#if technique.components.length > 0}
							<ul class="components-list">
								{#each technique.components as component}
									<li>
										<a href="/component/{component}" class="tag surface-4">&num;{component}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
					<div class="technique--right">
						{#if technique.level}
							<LevelTag value={technique.level} />
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No techniques found for this category and level.</p>
	{/if}
</section>

<style lang="scss">
	hgroup {
		margin-bottom: var(--size-5);
	}

	.techniques {
		list-style: none;
		display: flex;
		flex-direction: column;
		padding: 0;
		gap: var(--size-4);
	}

	.technique {
		padding-left: 0;
		padding-block: var(--size-3);
		padding-inline: var(--size-4);
		border-color: var(--border);
		border-width: var(--border-size-1);
		border-radius: var(--radius-3);
		max-inline-size: inherit;
		display: flex;
		gap: var(--size-4);

		&--left {
			flex: 1;
		}

		&--right {
			flex: 0;
		}

		p {
			text-wrap: balance;
			font-size: var(--font-size-1);
			line-height: var(--font-lineheight-1);
			color: var(--text-2);
		}

		.technique-title {
			display: block;
			font-size: var(--font-size-fluid-1);
			line-height: var(--font-lineheight-1);
			text-wrap: balance;
			margin-bottom: var(--size-2);
		}
	}

	.components-list {
		list-style: none;
		display: flex;
		gap: var(--size-2);
		padding: 0;
		margin-top: var(--size-2);

		li {
			padding: 0;
		}
	}
</style>
