import { About } from "@/components/sections/about";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { publicAssetExists } from "@/lib/assets";

export default function HomePage() {
  const hasPortrait = publicAssetExists("images/mahmud-afroz-portrait.jpg");

  return (
    <>
      <Hero hasPortrait={hasPortrait} />
      <About />
      <FeaturedWork />
    </>
  );
}
