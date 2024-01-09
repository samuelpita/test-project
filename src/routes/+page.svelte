<script>
    import { onMount } from "svelte";
    import { determineAspectRatioType } from "$lib";

    $: innerWidth = 0;
    $: innerHeight = 0;
    let aspectRatioType = "";

    const updateAspectRatioType = () => {
        aspectRatioType = determineAspectRatioType(innerWidth, innerHeight);
    };

    onMount(() => {
        updateAspectRatioType();
    });
</script>

<svelte:window bind:innerWidth bind:innerHeight on:resize={updateAspectRatioType} />
