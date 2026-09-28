import Image from "next/image";
import { Container, SectionHeading } from "@/app/components/ui";
const categories = [
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
];
export function Categories({
  onSelect,
}: {
  onSelect: (category: string) => void;
}) {
  return (
    <section id="categories" className="pb-20 lg:pb-[120px]">
      <Container>
        <div className="mx-auto max-w-[917px] text-center">
          <SectionHeading className="text-[clamp(28px,2.5vw,36px)]">
            Explore Diverse Learning Paths at Bytespace
          </SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-6 lg:gap-10">
          {categories.map((name, i) => (
            <button
              type="button"
              key={name}
              onClick={() => {
                onSelect(name);
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex min-h-[167px] flex-col items-center justify-center gap-4 rounded-2xl border border-line transition hover:-translate-y-1 hover:border-lime hover:bg-lime/10"
            >
              <Image
                src={`/images/home/category-${i + 1}.svg`}
                width={60}
                height={60}
                alt=""
              />
              <span className="font-medium">{name}</span>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
