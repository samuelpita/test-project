<script>
    import Visibility from "./Visibility.svelte";

    /** @type {{ [key: string]: import("./Visibility.svelte").ObservingTransitionData }} */
    const transitions = {
        "fade-translate-y-8": {
            true: "opacity-100 translate-y-0",
            false: {
                DEFAULT: "opacity-0",
                top: "-translate-y-8",
                bottom: "translate-y-8",
            },
        },
        "fade-translate-y-12": {
            true: "opacity-100 translate-y-0",
            false: {
                DEFAULT: "opacity-0",
                top: "-translate-y-12",
                bottom: "translate-y-12",
            },
        },
    };

    export let duration = "duration-300";
    export let setting = "fade-translate-y-8";
    export let style = "w-full";

    export let once = false;
    export let threshold = 0.25;

    /** @param {CustomEvent<IntersectionObserverEntry>} e */
    export let onObserve = (e) => {
        //
    };
</script>

<Visibility
    observing={transitions[setting]}
    {style}
    transition="transition-all {duration}"
    {once}
    {threshold}
    {onObserve}
    let:entry
    let:intersecting
    let:observer
    let:self
>
    <slot {entry} {intersecting} {observer} {self} />
</Visibility>
