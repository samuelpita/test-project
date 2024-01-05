<script>
    import { onMount } from "svelte";
    import imageCover from "$lib/assets/images/cover-image.jpg";

    $: innerHeight = 0;
    $: innerWidth = 0;
    let viewRatio = "";

    const updateViewRatio = () => {
        if (innerWidth / innerHeight > 1) viewRatio = "horizontal";
        else viewRatio = "vertical";
    }

    onMount(() => {
        updateViewRatio();
    });
</script>

<svelte:window bind:innerHeight bind:innerWidth on:resize={updateViewRatio} />

<div class="page cover {viewRatio}">
    <img src={imageCover} alt="Samuel Pita" />
    <div class="content">
        <h1>Samuel Pita</h1>
        <p>Programmer & Graphics Designer</p>
        <p>Grade 12 Student in Whistler Secondary</p>
    </div>
</div>

<style lang="sass">
    @use "../lib/styles/global"

    div.content
        display: flex
        flex-direction: column

    div.cover
        display: grid

        & img
            min-height: 100vh
            max-height: 100vh
            object-fit: cover
        
        & div.content
            align-items: center
            justify-content: center
            text-align: center

        &.horizontal
            grid-template-columns: 1fr 1fr
            grid-template-rows: 1fr

            & > img
                min-width: 100%
                max-width: 100%

        &.vertical
            grid-template-columns: 1fr
            grid-template-rows: 1fr 1fr

            & > img
                min-width: 100vw
                max-width: 100vw
</style>
