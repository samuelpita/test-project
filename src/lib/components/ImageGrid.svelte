<script>
    import ImageTooltip from "./ImageTooltip.svelte";
    import { glob } from "./Global.svelte";

    export let border = true;
    export let cols = "grid-cols-2";
    export let gap = true;
    export let margin = glob.margin.main.b;
    export let round = "rounded-lg";
    export let rows = "auto-rows-fr";

    let DEFAULT = "w-full overflow-hidden grid";
    if (border) DEFAULT += " bg-white border-white " + glob.borderWidth.all;
    if (gap) DEFAULT += " " + glob.gap.main;
</script>

<div class="{DEFAULT} {cols} {margin} {round} {rows}">
    <slot>
        <ImageTooltip image="./home-other-0.jpeg" imageAlt="Lorem ipsum dolor sit" />
        <ImageTooltip image="./home-other-0.jpeg" imageAlt="Lorem ipsum dolor sit" />
        <ImageTooltip image="./home-other-0.jpeg" imageAlt="Lorem ipsum dolor sit" />
        <ImageTooltip image="./home-other-0.jpeg" imageAlt="Lorem ipsum dolor sit" />
    </slot>
</div>
