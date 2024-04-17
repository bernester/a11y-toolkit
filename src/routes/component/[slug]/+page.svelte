<script lang="ts">
	import BackButton from '$components/BackButton.svelte';
	import LevelTag from '$components/LevelTag.svelte';
	import * as config from '$lib/config';
	export let data: {
		posts: any;
		slug: string;
		introText?: string;
	};
</script>

<svelte:head>
	<title>{config.title} - techniques for {data.slug}</title>
</svelte:head>

<!-- Posts -->
<section>
	<hgroup>
		<BackButton />
		<h1 class="page-title space-2">{data.slug}</h1>
		{#if data.introText}
			{@html data.introText}
		{/if}
	</hgroup>

	<h2 class="page-subheader">Accessibility Techniques:</h2>

	<ul class="techniques">
		{#each data.posts as post}
			<li class="technique">
				<a href="/{post.slug}" class="technique-title">{post.title}</a>
				{#if post.description}
					<p>{post.description}</p>
				{/if}
				{#if post.level}
					<LevelTag level={post.level} />
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	hgroup {
		margin-bottom: var(--size-5);
	}

	.techniques {
		list-style: none;
		padding: 0;
	}

	.technique {
		padding-left: 0;
		padding-block: var(--size-4);
		max-inline-size: inherit;

		&:not(:last-child) {
			background-image: linear-gradient(
				90deg,
				var(--border),
				var(--border) 50%,
				transparent 50%,
				transparent 100%
			);
			background-size: 16px 2px;
			background-position: bottom;
			background-repeat: repeat-x;
		}

		p {
			text-wrap: balance;
			font-size: var(--font-size-1);
			color: var(--text-2);
			margin-bottom: var(--size-2);
		}

		.technique-title {
			display: block;
			font-size: 2rem;
			text-wrap: balance;

			// &::before {
			// 	content: '';
			// 	display: inline-block;
			// 	background-color: var(--surface-2);
			// 	width: 0.75em;
			// 	height: 0.75em;
			// 	border-radius: var(--radius-2);
			// 	margin-right: 0.5em;
			// }
		}
	}
</style>
