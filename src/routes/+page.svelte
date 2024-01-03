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
    /* div style classes */
    div.cover {
        --gradient1: hsl(256deg, 76%, 16%) 0%;
        --gradient2: hsl(320deg, 48%, 16%) 100%;

        height: 100vh;
        width: 100vw;

        display: grid;
        background: linear-gradient(90deg, var(--gradient1), var(--gradient2));
    }
    div.cover.horizontal {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
    div.cover.vertical {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
    div.info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    /* Element style classes in div.cover */
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
    div.cover.vertical > div.info {
        --gradient1: rgba(17, 17, 17, 1) 0%;
        --gradient2: rgba(17, 17, 17, 0.75) 60%;
        --gradient3: rgba(17, 17, 17, 0.5) 80%;
        --gradient4: rgba(17, 17, 17, 0) 100%;

        grid-row: -1;
        padding-top: 12vh;
        padding-bottom: 6vh;
        background: linear-gradient(0deg, var(--gradient1), var(--gradient2), var(--gradient3), var(--gradient4));
    }

    /* Element style classes in div.info */
    div.info h1 {
        --space: 36px;
        margin-bottom: calc(var(--space) / 2);
        padding: 0 var(--space);
        padding-bottom: calc(var(--space) / 2);

        border-bottom: 1px solid;
        font-family: "Major Mono Display", sans-serif;
        font-size: 2.4em;
    }
    div.info p {
        margin-bottom: 4px;
    }
</style>
