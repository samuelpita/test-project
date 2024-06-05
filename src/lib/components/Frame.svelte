<script>
    export let layout = "";
    export let margin = "mb-main";
    export let maxHeight = "";
    export let maxWidth = "max-w-main";
    export let padding = "px-main";
    export let sizing = "w-full";
</script>

<div class="{margin} {layout} {maxHeight} {maxWidth} {padding} {sizing}">
    <slot />
</div>
