<script>
    import { determineInnerWidthType } from "$lib";

    import Card from "./Card.svelte";
    import CardImage from "./Card_Image.svelte";
    import Cover from "./Cover.svelte";
    import Section from "./Section.svelte";
    import Video from "./Video.svelte";
    import Visibility from "./Visibility.svelte";

    $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="w-full h-svh">
    <Cover styleGraphic="border-x-8 border-t-8 md:border-b-8 border-white">
        <!--  -->
    </Cover>
</div>
