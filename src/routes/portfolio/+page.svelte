<script>
    import Card from "$lib/components/Card.svelte";
    import Cover from "$lib/components/Cover.svelte";
    import CoverCard from "$lib/components/CoverCard.svelte";
    import Frame from "$lib/components/Frame.svelte";
    import HeaderBasic from "$lib/components/HeaderBasic.svelte";
    import ImageGrid from "$lib/components/ImageGrid.svelte";
    import ImageTooltip from "$lib/components/ImageTooltip.svelte";
    import VisibilityBasic from "$lib/components/VisibilityBasic.svelte";
</script>

<Cover contentColor="bg-gradient-to-tl from-cyan-900 to-emerald-700">
    <VisibilityBasic slot="content">
        <img
            src="./portfolio/title.png"
            alt="S.P. The Capstone"
            class="w-full max-w-2xl mx-auto object-contain"
        />
    </VisibilityBasic>
    <img src="./home-other-0.jpeg" alt="" slot="graphic" class="size-full object-cover" />
</Cover>

<main class="w-full flex flex-col items-center">
    <!-- 
        James, Jos, & Nat-nat
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame>
            <section class="w-full mb-main">
                <VisibilityBasic>
                    <img
                        src="./portfolio/icon-quote.png"
                        alt="Quote icon"
                        class="w-16 lg:w-20 2xl:w-24 mb-main"
                    />
                    <h3 class="mb-main">
                        <i>
                            Learn from new experiences, and learn how to use that as your strength.
                            Be the main actor for your life.
                        </i>
                    </h3>
                    <p><i>James Paguia, 2023</i></p>
                </VisibilityBasic>
            </section>

            <VisibilityBasic>
                <div class="w-full mb-main border-white border-b-2"></div>
            </VisibilityBasic>

            <section class="w-full">
                <VisibilityBasic>
                    <p class="mb-4">
                        I’d like to acknowledge James, who passed away in a car crash, along with
                        his brother-in-law, Jos, and his niece, Nat-nat, on November 26th of last
                        year. James was as much of a computer nerd as I was, and he inspired me to
                        continue following my own passions and to believe in myself. He was the
                        closest I’ll ever have to a best friend, something I've never really had for
                        a long while.
                    </p>
                    <p>
                        This has had a huge impact on my life ever since, especially since James,
                        his brother, my brother, and I had shared our own plans in the future, and
                        the things we would do in our adulthood. As much as I wish they were still
                        alive, I’m grateful for them to have been part of my life, even if it was
                        such a short time in the grand scheme of things.
                    </p>
                </VisibilityBasic>
            </section>
        </Frame>

        <VisibilityBasic threshold={0}>
            <ImageGrid cols="grid-cols-3" maxHeight="max-h-lg" round="">
                <ImageTooltip image="./portfolio/tribute/james-0.jpg" imageAlt="James Paguia" />
                <ImageTooltip image="./portfolio/tribute/jos-0.jpg" imageAlt="Jos Portillo" />
                <ImageTooltip
                    image="./portfolio/tribute/natnat-0.jpg"
                    imageAlt="Natalia Paguia-Portillo"
                />
            </ImageGrid>
        </VisibilityBasic>

        <VisibilityBasic>
            <h2 class="text-center mb-2">R.I.P.</h2>
            <p class="text-center">Hoping spectator mode treats y'all well.</p>
        </VisibilityBasic>
    </article>

    <!-- 
        My Family
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic icon="./portfolio/icon-family.png">
                    <h2>My Family</h2>
                </HeaderBasic>
            </VisibilityBasic>
        </Frame>

        <VisibilityBasic threshold={0}>
            <ImageGrid cols="grid-cols-2 md:grid-cols-4" round="">
                <ImageTooltip
                    image="./portfolio/family/IMG_4211.jpg"
                    imageAlt="Lorem ipsum dolor sit"
                    style="size-full col-span-2"
                />
                <ImageTooltip
                    image="./portfolio/family/IMG_4213.jpg"
                    imageAlt="Lorem ipsum dolor sit"
                />
                <ImageTooltip
                    image="./portfolio/family/IMG_1174.jpg"
                    imageAlt="Lorem ipsum dolor sit"
                />
            </ImageGrid>
        </VisibilityBasic>

        <Frame margin="" maxWidth="max-w-6xl">
            <!-- 
                Ma & Pa
            -->
            <VisibilityBasic threshold={0}>
                <CoverCard contentColor="bg-gradient-to-tl from-fuchsia-600 to-teal-600">
                    <svelte:fragment slot="content">
                        <h2 class="mb-4 pb-4 border-b-2 border-white">Ma & Pa</h2>
                        <p class="mb-2">
                            As imperfect as my parents can be (and as old-school as they can be in
                            religious faith), I respect them for bringing me and our family into
                            where we are now. We may not be very wealthy; we’re still broke as heck,
                            but at least my brother and I have the opportunities to better provide
                            for ourselves, our family, and the families back home in the
                            Philippines.
                        </p>
                        <p>
                            My mom makes great Sinigang, a Filipino soup with pork, various
                            vegetables, and okra. My dad is into basketball, and watches a lot of
                            NBA in his pastime. They both have similar jobs, and work in the same
                            hotel, and they were born in the same year; 1971. They’re not great
                            parents on the surface, but they’ve sacrificed a lot for our family to
                            live in Canada, and I’m thankful for that.
                        </p>
                    </svelte:fragment>
                    <ImageTooltip
                        slot="graphic"
                        image="./portfolio/family/IMG_0001.jpg"
                        imageAlt="Lorem ipsum dolor sit"
                    />
                </CoverCard>
            </VisibilityBasic>

            <!-- 
                Kuya Aeron (Pits)
            -->
            <VisibilityBasic threshold={0}>
                <CoverCard
                    flipped={true}
                    contentColor="bg-gradient-to-tl from-orange-600 to-purple-600"
                >
                    <svelte:fragment slot="content">
                        <h2 class="mb-4 pb-4 border-b-2 border-white">Kuya Aeron (Pits)</h2>
                        <p class="mb-2">
                            Kuya Aeron, also known as Pits in his friend group, is, well, my
                            brother. He’s the one responsible for the majority of my music tastes,
                            and he’s pretty extroverted. He’d go down to Vancouver, and go clubbing
                            with his friends there on a weekend. We’d often joke about how we’re
                            from different sides of the same coin, as we have polarizing
                            personalities, hobbies, et cetera, and yet we share most of the same
                            values in life, and how we both suck at finding romantic relationships.
                            Currently, he works as an insurance person in the village, though he
                            plans to continue his IT career when he and I move to Vancouver next
                            year, given that he has completed his CIT diploma at BCIT.
                        </p>
                        <p>
                            Having seen his struggles in the past few years, and more so with the
                            passing of his cousin James, I wish for the best for what he needs to do
                            to pick himself back up, and become the person he wishes to be.
                        </p>
                    </svelte:fragment>
                    <ImageTooltip
                        slot="graphic"
                        image="./portfolio/family/IMG_0248.jpg"
                        imageAlt="Lorem ipsum dolor sit"
                    />
                </CoverCard>
            </VisibilityBasic>
        </Frame>
    </article>

    <!-- 
        My Friends & Community
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic flipped={true} icon="./portfolio/icon-community.svg">
                    <h2 class="text-right">My Friends & Community</h2>
                </HeaderBasic>
            </VisibilityBasic>
        </Frame>
    </article>

    <!-- 
        My Hobbies & Passions
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic icon="./portfolio/icon-passions.png">
                    <h2>My Hobbies & Passions</h2>
                </HeaderBasic>
            </VisibilityBasic>
        </Frame>
    </article>

    <!-- 
        Where I've been
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic flipped={true} icon="./portfolio/icon-past.png">
                    <h2 class="text-right">Where I've been</h2>
                </HeaderBasic>
            </VisibilityBasic>
        </Frame>
    </article>

    <!-- 
        Web Development, & sammuu.dev
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic icon="./portfolio/icon-webdev.png">
                    <h2 class="mb-1">Web Development, & sammuu.dev</h2>
                    <h4>Core Competencies</h4>
                </HeaderBasic>
            </VisibilityBasic>

            <VisibilityBasic>
                <Card color="bg-gradient-to-tl from-zinc-800 to-slate-600">
                    <img
                        src="./code/github.svg"
                        alt="GitHub icon"
                        class="w-16 lg:w-20 2xl:w-24 mb-main"
                    />
                    <h2 class="mb-4">
                        <a href="https://github.com/samuelpita/test-project">
                            samuelpita/test-project
                        </a>
                    </h2>
                    <p>GitHub repository for sammuu.dev</p>
                </Card>
            </VisibilityBasic>
        </Frame>
    </article>

    <!-- 
        Church Pianist, & the Worship Team
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic flipped={true} icon="./portfolio/icon-piano.png">
                    <h2 class="text-right mb-1">Church Pianist, & the Worship Team</h2>
                    <h4 class="text-right">Core Competencies</h4>
                </HeaderBasic>
            </VisibilityBasic>
        </Frame>
    </article>

    <!-- 
        Where I'm going
    -->
    <article class="w-full flex flex-col items-center mb-main">
        <Frame margin="">
            <VisibilityBasic>
                <HeaderBasic icon="./portfolio/icon-future.png">
                    <h2>Where I'm going</h2>
                </HeaderBasic>
            </VisibilityBasic>
        </Frame>
    </article>
</main>
