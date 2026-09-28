import { Container, SectionHeading, ActionLink } from "@/app/components/ui";
import { Ornament } from "@/app/components/visuals";
export function CreatorCta() {
  return (
    <section
      id="join"
      className="blue-grid  relative isolate overflow-hidden py-20 text-center text-white"
    >
      <Ornament
        name="spring"
        className="absolute -left-12 -top-10 w-[200px] -rotate-12 sm:-left-20 sm:-top-16 sm:w-[280px]"
      />
      <Ornament
        name="spring"
        tone="white"
        className="absolute left-[12%] top-4 w-[100px] -rotate-12 sm:left-[16%] sm:top-24 sm:w-[145px] max-md:hidden"
      />
      <Ornament
        name="pyramid"
        tone="white"
        className="absolute -left-8 top-[52%] w-[130px] -translate-y-1/2 rotate-[15deg]  sm:w-[180px]"
      />
      <Ornament
        name="ring"
        className="absolute -bottom-16 -left-6 w-[120px] sm:-bottom-20 sm:left-4 sm:w-[210px]"
      />

      <Ornament
        name="pyramid"
        className="absolute right-[13%] top-4 w-[130px] sm:right-[17%] sm:top-8 sm:w-[175px] max-md:hidden"
      />
      <Ornament
        name="cylinder"
        tone="white"
        className="absolute -right-16 -top-8 w-[240px] -rotate-[20deg] sm:-right-24 sm:-top-12 sm:w-[330px]"
      />
      <Ornament
        name="spring"
        className="absolute -bottom-10 right-2 w-[170px] sm:-bottom-14 sm:right-8 sm:w-[230px]"
      />

      <Container className="relative z-10">
        <SectionHeading className="mx-auto max-w-[790px] text-white lg:text-[52px]">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-[964px] text-sm leading-relaxed text-white/80 sm:mt-8 sm:text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <ActionLink href="#newsletter" className="mt-8 !rounded-full sm:mt-10">
          Join as Creator
        </ActionLink>
      </Container>
    </section>
  );
}
