<script>
    import { determineInnerWidthType } from "$lib";

    import Card from "../Card.svelte";
    import CardImage from "../Card_Image.svelte";
    import Cover from "../Cover.svelte";
    import IconVideo from "../IconVideo.svelte";
    import Section from "../Section.svelte";
    import Visibility from "../Visibility.svelte";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<Section icon="./portfolio/icon-family.png">
    <h2 slot="header" class="font-sans">My Family</h2>
</Section>

<!--  -->

<Section icon="./favicon.png" styleHeader="flex-row-reverse" styleIconDiv="ml-4">
    <h2 slot="header" class="font-sans">Where I've been</h2>
    <svelte:fragment slot="content">
        <!--  -->
    </svelte:fragment>
</Section>

<Section icon="./favicon.png">
    <h2 slot="header" class="font-sans">Where I'm going</h2>
    <svelte:fragment slot="content">
        <!--  -->
    </svelte:fragment>
</Section>
