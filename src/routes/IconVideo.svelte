<script>
    import Visibility from "./Visibility.svelte";

    /** @type {HTMLVideoElement} */
    let self;

    export let once = false;
    export let poster = "";
    export let src = { mov: "", webm: "" };
    export let style = "";
    export let styleObserving = "";
    export let styleNotObserving = "";
    export let threshold = 0;

    /**
     *
     * @param {CustomEvent<IntersectionObserverEntry>} e
     */
    export let onObserve = (e) => {
        if (e.detail.isIntersecting) {
            self.currentTime = 0;
            self.play();
        }
    };
</script>

<Visibility
    {once}
    {style}
    {styleObserving}
    {styleNotObserving}
    {threshold}
    {onObserve}
    let:entry
    let:intersecting
    let:observer
>
    <video bind:this={self} autoplay muted playsinline {poster}>
        {#if src.mov != ""}
            <source src={src.mov} type="video/mp4; codecs='hvc1'" />
        {/if}
        {#if src.webm != ""}
            <source src={src.webm} type="video/webm" />
        {/if}
    </video>

    <slot {entry} {intersecting} {observer} {self} />
</Visibility>
