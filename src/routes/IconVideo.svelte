<script>
    import Visibility from "./Visibility.svelte";

    /** @type {HTMLVideoElement} */
    let self;

    export let once = false;
    export let poster = "";
    export let src = { mov: "", webm: "" };
    export let style = "";
    export let threshold = 0;
</script>

<Visibility
    {once}
    {style}
    {threshold}
    onObserve={(e) => {
        if (e.detail.isIntersecting) self.currentTime = 0;
    }}
>
    <video bind:this={self} autoplay muted {poster}>
        {#if "mov" in src}
            <source src={src.mov} type="video/mp4" />
        {/if}
        {#if "webm" in src}
            <source src={src.webm} type="video/webm" />
        {/if}
    </video>

    <slot />
</Visibility>
