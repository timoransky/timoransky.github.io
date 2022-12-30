import type { NextPage } from "next";
import Head from "next/head";
import { HeroText } from "../components/HeroText";
import { HeroTitle } from "../components/HeroTitle";
import { IconButton } from "../components/IconButton";
import { GithubIcon } from "../components/icons/GithubIcon";
import { SpotifyIcon } from "../components/icons/SpotifyIcon";
import { TwitterIcon } from "../components/icons/TwitterIcon";
import { ImageCard } from "../components/ImageCard";
import { ThemeToggleButton } from "../components/ThemeToggleButton";

const Home: NextPage = () => (
  <div className="flex min-h-screen flex-col pb-8">
    <Head>
      <title>Ján Timoranský - Full stack developer</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Hi! 👋 I’m Ján Timoranský, a web developer, geek and snack lover based in Bratislava."
      />
      <meta
        property="og:image"
        content="https://timoransky.github.io/img/og.png"
      />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://timoransky.github.io/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Ján Timoranský - Full stack developer"
      />
      <meta
        property="og:description"
        content="Hi! 👋 I’m Ján Timoranský, a web developer, geek and snack lover based in Bratislava."
      />
      <meta
        property="og:image"
        content="https://timoransky.github.io/img/og.png"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="timoransky.github.io" />
      <meta property="twitter:url" content="https://timoransky.github.io/" />
      <meta
        name="twitter:title"
        content="Ján Timoranský - Full stack developer"
      />
      <meta
        name="twitter:description"
        content="Hi! 👋 I’m Ján Timoranský, a web developer, geek and snack lover based in Bratislava."
      />
      <meta
        name="twitter:image"
        content="https://timoransky.github.io/img/og.png"
      />
    </Head>

    <div className="fixed inset-0 mx-auto flex max-w-7xl justify-center sm:px-8">
      <div className="flex w-full max-w-7xl bg-white ring-1 ring-gray-100 dark:bg-[#1a1a1a] dark:ring-gray-200/10 lg:px-8" />
    </div>

    <div className="relative sm:px-8">
      <main>
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <ThemeToggleButton />

            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="max-w-2xl pt-24">
                <img
                  src="https://avatars.githubusercontent.com/u/15653065?v=4"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <HeroTitle />

                <HeroText>
                  Hi! I’m Ján Timoranský, a web developer, geek and snack lover
                  based in Bratislava. Other than snacking, I always try to keep
                  up with new technologies (and all the Javascript frameworks)
                  on daily basis.
                </HeroText>

                <HeroText>
                  I'm mostly skilled in VILT stack, which consists of Vue,
                  Inertia.js, Laravel and Tailwind but occasionally I use React
                  as well.
                </HeroText>

                <HeroText>
                  Oh, and I also collect digital badges on{" "}
                  <a
                    href="https://www.holopin.io/@timoransky"
                    className="text-[#c850c0] hover:text-[#e35cda]"
                  >
                    holopin
                  </a>
                  .
                </HeroText>

                <div className="mt-8 flex gap-6">
                  <IconButton
                    label="Follow on Twitter"
                    href="https://twitter.com/jtimoransky"
                    icon={TwitterIcon}
                  />
                  <IconButton
                    label="Follow on GitHub"
                    href="https://github.com/timoransky"
                    icon={GithubIcon}
                  />
                  <IconButton
                    label="Follow on Spotify"
                    href="https://open.spotify.com/user/11147893382"
                    icon={SpotifyIcon}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <ImageCard
          src="https://holopin.me/timoransky"
          fallbackSrc="/img/holopin-board.png"
          className="-rotate-2"
          objectFit="object-left"
        />
        <ImageCard
          src="/img/me-in-office.jpg"
          className="rotate-2"
          objectFit="object-left"
        />
        <ImageCard
          src="https://holopin.me/timoransky"
          fallbackSrc="/img/holopin-board.png"
          className="-rotate-2"
        />
        <ImageCard src="/img/me-in-meeting.jpg" className="rotate-1" />
        <ImageCard
          src="https://holopin.me/timoransky"
          fallbackSrc="/img/holopin-board.png"
          className="rotate-3"
          objectFit="object-right"
        />
      </div>
    </div>

    <footer>
      <div className="relative mx-auto mt-10 max-w-2xl text-center text-xs text-gray-300 dark:text-gray-600">
        Crafted with 💜 by me © {new Date().getFullYear()}
      </div>
    </footer>
  </div>
);

export default Home;
