import Image from "next/image";
import { Container } from "../shared/ui";

export function Partners() {
  return (
    <section
      aria-label="Our learning partners"
      className="bg-surface py-12 lg:py-20"
    >
      <Container className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 lg:justify-between">
        {[1, 2, 3, 4, 5].map((n) => (
          <Image
            key={n}
            src={`/images/home/partner-${n}.svg`}
            alt={`Learning partner ${n}`}
            width={170}
            height={42}
            className="h-8 w-auto sm:h-[42px]"
          />
        ))}
      </Container>
    </section>
  );
}
