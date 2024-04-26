<script>
    import { determineInnerWidthType } from "$lib";

    import Card from "../Card.svelte";
    import CardImage from "../Card_Image.svelte";
    import Cover from "../Cover.svelte";
    import IconVideo from "../IconVideo.svelte";
    import Loading from "../Loading.svelte";
    import Section from "../Section.svelte";
    import Visibility from "../Visibility.svelte";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<!-- Loading Screen -->
<Loading />

<!-- Add Cover -->

<!-- Add Nav -->

<Section icon="./portfolio/icon-family.png">
    <h2 slot="header" class="font-sans">My Family</h2>
</Section>

<Section icon="./portfolio/icon-past.png" headerFlipped={true}>
    <h2 slot="header" class="font-sans text-right">Where I've been</h2>
    <svelte:fragment slot="content">
        <!--  -->
    </svelte:fragment>
</Section>

<Section icon="./portfolio/icon-future.png">
    <h2 slot="header" class="font-sans">Where I'm going</h2>
    <svelte:fragment slot="content">
        <!--  -->
    </svelte:fragment>
</Section>

<Section icon="./portfolio/icon-collaboration.svg" headerFlipped={true}>
    <div slot="header">
        <h2 class="font-sans text-right">Collaboration</h2>
        <h3 class="font-sans text-right">Core Competencies</h3>
    </div>
    <svelte:fragment slot="content">
        <!--  -->
    </svelte:fragment>
</Section>

<Section icon="./portfolio/icon-critical-thinking.svg">
    <div slot="header">
        <h2 class="font-sans">Critical Thinking</h2>
        <h3 class="font-sans">Core Competencies</h3>
    </div>
    <svelte:fragment slot="content">
        <!--  -->
    </svelte:fragment>
</Section>
