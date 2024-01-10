<script>
    import { onMount } from "svelte";
    import { determineAspectRatioType } from "$lib";

    import testImage from "$lib/assets/images/test-image.jpg";
    import titleCoverImage from "$lib/assets/images/title-cover-image.jpeg";
    import portfolioCoverImage from "$lib/assets/images/portfolio-cover-image.jpeg";

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

<div class="title cover {aspectRatioType}">
    <img src={titleCoverImage} alt="Samuel Pita" />
    <div class="content">
        <h1>Samuel Pita</h1>
        <p>Programmer & Graphics Designer</p>
        <p>Grade 12 Student in Whistler Secondary</p>
    </div>
</div>

<div class="cover {aspectRatioType} flipped">
    <img src={portfolioCoverImage} alt="River near Nairn Falls, British Columbia" />
    <div class="content">
        <h1>My Capstone Portfolio</h1>
        <p>Check it out!</p>
    </div>
</div>

<style lang="sass">

@use "sass:color"
@use "sass:math"

@use "../lib/styles/global"
@use "../lib/styles/Cover"

div.cover
    &.title
        & h1
            margin-bottom: 8px
            font-family: "Major Mono Display", sans-serif
            font-size: 2.2em
        &.horizontal
            & > .content
                $color: color.change(global.$colorAccent, $lightness: 24%)
                $arg1: $color 0%
                $arg2: color.adjust($color, $hue: 20deg) 32%
                $arg3: color.adjust($color, $hue: 40deg) 64%
                $arg4: color.adjust($color, $hue: 64deg) 100%
                background: linear-gradient(90deg, $arg1, $arg2, $arg3, $arg4)
    &.vertical
        & > .content
            @include Cover.gradientBackgroundFade(0deg)

</style>
