<script>
    import imageCover from "$lib/assets/images/cover-image.jpg";

    $: innerHeight = 0;
    $: innerWidth = 0;
    let cover = "";

    function setCover() {
        if (innerHeight / innerWidth > 1) cover = "cover vertical";
        else cover = "cover horizontal";
    }
</script>

<svelte:window bind:innerHeight bind:innerWidth on:load={setCover} on:resize={setCover} />

<div class={cover}>
    <img src={imageCover} alt="Samuel Pita" />
    <div class="info">
        <h1>Samuel Pita</h1>
        <p>Programmer & Graphics Designer</p>
        <p>Grade 12 Student in Whistler Secondary</p>
    </div>
</div>

<style>
    div.cover {
        height: 100vh;
        width: 100vw;

        display: grid;
        /*  */
    }
    div.cover.horizontal {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
    div.cover.vertical {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

    div.cover img {
        object-fit: cover;
    }
    div.cover.horizontal > img {
        min-height: 100vh;
        max-height: 100vh;
        min-width: 50vw;
        max-width: 50vw;
    }
    div.cover.vertical > img {
        grid-row: 1 / -1;
        min-height: 100vh;
        max-height: 100vh;
        min-width: 100vw;
        max-width: 100vw;
    }
</style>
