<script lang="ts">
	import Link from '$components/Link.svelte';
</script>

<svelte:head>
	<title>What is the A11y toolkit?</title>
	<meta
		name="description"
		content="A quick introduction to the A11y toolkit. An open source collection for techniques to avoid the most common accessibility failures."
	/>
</svelte:head>

<h1>What's the A11y toolkit?</h1>
<p>
	The A11y toolkit is an open source collection of techniques to avoid the most common accessibility
	failures. The A11y toolkit started as a community project at <Link
		href="https://www.thoughtworks.com/"
		target="_blank">Thoughtworks</Link
	> and later was launched as an open source project to help other to build better products for more
	people.
</p>
<p>
	The inspiration for the A11y toolkit came from the <Link
		href="https://webaim.org/projects/million/"
		target="_blank">WebAim Million report</Link
	>. Since 2019 WebAIM (Web Accessibility In Mind) conducts this yearly accessibility evaluation of
	the homepages for the top 1,000,000 web sites.
</p>
<p>
	The report consistently shows that most homepages have accessibility failures (95.9% in 2024) and
	that most failures belong to five categories: Low contrast text (81%), missing alternative text
	for images (54.5%), missing form input labels (48.6%), empty links (44.6%), empty buttons (28.2%)
	and missing document language (17.1%). Which is great news, because all of them are really easy to
	fix.
</p>

<style>
	p {
		margin-block: 1em 0.5em;
	}
</style>
