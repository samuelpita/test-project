<script context="module">
    // @typedef Declarations

    /** @typedef {{ DEFAULT: string,
     *              top?: string,
     *              bottom?: string,
     *              left?: string,
     *              right?: string }} ScrollTransition */

    /** @typedef {{ true: string | ScrollTransition,
     *              false: string | ScrollTransition }} ObservingTransitionData */
</script>

<script>
    import { lerp } from "$lib/scripts/functions";
    import IntersectionObserver from "svelte-intersection-observer";

    // Export Variables //

    /** @type {ObservingTransitionData} */
    export let observing = { true: "opacity-100", false: "opacity-0" };

    /** @type {string} */
    export let transition = "transition-all duration-300";

    export let once = false;
    export let threshold = 1;

    // Visibility Behaviours //

    /** @type {HTMLElement} */
    let self;

    /** @param {CustomEvent<IntersectionObserverEntry>} e */
    export let onObserve = (e) => {
        //
    };

    /** @param {CustomEvent<IntersectionObserverEntry>} e */
    const defaultOnObserve = (e) => {
        self.className = transition;

        let data = e.detail.isIntersecting ? observing.true : observing.false;
        if (typeof data == "string") self.className += " " + data;
        else {
            let rect = self.getBoundingClientRect();
            let dataX = lerp(rect.left, rect.right, 0.5) < innerWidth / 2 ? data.left : data.right;
            let dataY = lerp(rect.top, rect.bottom, 0.5) < innerHeight / 2 ? data.top : data.bottom;

            self.className += " " + data.DEFAULT;
            if (dataX != undefined) self.className += " " + dataX;
            if (dataY != undefined) self.className += " " + dataY;
        }
    };

    $: innerHeight = 0;
    $: innerWidth = 0;
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div bind:this={self} class={transition}>
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
