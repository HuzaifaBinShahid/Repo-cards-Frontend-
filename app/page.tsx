import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CardTypes } from "@/components/sections/card-types";
import { Integrations } from "@/components/sections/integrations";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <CardTypes />
        <Integrations />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
