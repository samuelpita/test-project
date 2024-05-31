<script>
    export let layout = "";
    export let margin = "m-main-b";
    export let maxHeight = "";
    export let maxWidth = "max-w-main";
    export let innerPadding = "";
    export let outerPadding = "p-main-x";
    export let sizing = "w-full";
</script>

<div class="{margin} {outerPadding}">
    <div class="{layout} {maxHeight} {maxWidth} {innerPadding} {sizing}">
        <slot />
    </div>
</div>
