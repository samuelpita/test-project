<script>
    export let layout = "";
    export let margin = "m-main-b";
    export let maxHeight = "";
    export let maxWidth = "max-w-main";
    export let padding = "p-main-x";
    export let sizing = "w-full";
</script>

<div class="{margin} {layout} {maxHeight} {maxWidth} {padding} {sizing}">
    <slot />
</div>
