<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    export let delay = 100;
    export let fadeDuration = 300;

    let loading = true;

    onMount(() => {
        loading = false;
    });
</script>

{#if loading}
    <div class="fixed size-full z-50" transition:fade={{ delay: delay, duration: fadeDuration }}>
        <slot>
            <div class="size-full flex items-center justify-center bg-black">
                <div class="size-16 animate-spin rounded-lg bg-primary-500/70"></div>
                <div class="size-24 animate-spin rounded-lg bg-secondary-500/70"></div>
                <div class="size-32 animate-spin rounded-lg bg-tertiary-500/70"></div>
            </div>
        </slot>
    </div>
{/if}
