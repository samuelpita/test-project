<script>
    let hover = false;

    /** @type {HTMLElement} */
    let self;

    export let onHoverEnter = () => {};
    export let onHoverLeave = () => {};

    export let role = "tooltip";
    export let style = "";
</script>

<div
    bind:this={self}
    class={style}
    {role}
    on:click={() => {
        hover = !hover;
        if (hover) onHoverEnter();
        else onHoverLeave();
    }}
    on:mouseenter={() => {
        if (hover) return;
        hover = true;
        onHoverEnter();
    }}
    on:mouseleave={() => {
        if (!hover) return;
        hover = false;
        onHoverLeave();
    }}
>
    <slot {hover} {self} />
</div>
