<script>
    import { glob } from "./Global.svelte";

    export let layout = "";
    export let margin = "";
    export let maxHeight = "";
    export let maxWidth = glob.width.main;
    export let padding = "";
    export let sizing = "w-full";
</script>

<div class="{layout} {margin} {maxHeight} {maxWidth} {padding} {sizing}">
    <slot />
</div>
