import Image from "next/image";
import { Container, SectionHeading } from "../shared/ui";
const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "sarah",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "james",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "alex",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];
export function Testimonials() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#fafbf7] py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.3),rgba(0,59,226,0.15)_50%,transparent_70%)] blur-3xl sm:h-[600px] sm:w-[600px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -top-24 right-[45%] h-[380px] w-[380px] translate-x-1/2 rounded-full bg-[radial-gradient(circle,#cbfc01,transparent_70%)] opacity-55 blur-3xl sm:h-[500px] sm:w-[500px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-44 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#cbfc01,transparent_70%)] opacity-55 blur-3xl sm:h-[500px] sm:w-[500px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-10">
          <SectionHeading>Discover What Our Community Is Saying</SectionHeading>
          <p className="text-lg leading-relaxed text-muted">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-[72px] lg:gap-10">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-xl border border-line bg-white/90 p-6"
            >
              <Image
                src={`/images/home/${item.image}.webp`}
                alt={item.name}
                width={80}
                height={80}
                className="size-20 rounded-full object-cover"
              />
              <figcaption className="mt-6">
                <p className="font-heading text-xl font-semibold">
                  {item.name}
                </p>
                <p className="mt-1 text-lg text-brand">{item.role}</p>
              </figcaption>
              <blockquote className="mt-6 text-lg leading-relaxed text-foreground/80">
                “{item.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
