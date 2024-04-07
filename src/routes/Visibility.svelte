<script>
    import IntersectionObserver from "svelte-intersection-observer";

    /** @type {HTMLElement} */
    let self;

    export let style = "";
    export let styleObserving = "";
    export let styleNotObserving = "";

    export let once = false;
    export let threshold = 1;

    /**
     * @param {CustomEvent<IntersectionObserverEntry>} e
     */
    export let onObserve = (e) => {
        console.log(self.className);
    };

    /**
     * @param {CustomEvent<IntersectionObserverEntry>} e
     */
    const defaultOnObserve = (e) => {
        self.className =
            style + " " + (e.detail.isIntersecting ? styleObserving : styleNotObserving);
    };
</script>

<div bind:this={self}>
    <IntersectionObserver
        element={self}
        on:observe={(e) => {
            defaultOnObserve(e);
            onObserve(e);
        }}
        {once}
        {threshold}
        let:entry
        let:intersecting
        let:observer
    >
        <slot {entry} {intersecting} {observer} {self} />
    </IntersectionObserver>
</div>
