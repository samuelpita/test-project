<script>
    let hover = false;

    /** @type {HTMLElement} */
    let self;

    export let buttonMode = true;

    export let onHoverEnter = () => {};
    export let onHoverLeave = () => {};

    export let role = "tooltip";
    export let style = "";
</script>

{#if buttonMode}
    <button
        bind:this={self}
        class="min-w-0 min-h-0 overflow-hidden relative {style}"
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
    </button>
{:else}
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
{/if}
