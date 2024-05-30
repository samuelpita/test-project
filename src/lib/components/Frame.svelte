<script>
    import { glob } from "./Global.svelte";

    export let layout = "";
    export let margin = glob.margin.main.b;
    export let maxHeight = "";
    export let maxWidth = glob.width.main;
    export let innerPadding = "";
    export let outerPadding = glob.padding.main.x;
    export let sizing = "w-full";
</script>

<div class="{margin} {outerPadding}">
    <div class="{layout} {maxHeight} {maxWidth} {innerPadding} {sizing}">
        <slot />
    </div>
</div>
