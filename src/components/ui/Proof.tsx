import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { AuthorityStrip } from "@/components/ui/AuthorityStrip";

export function Proof() {
  return (
    <Section id="proof">
      <Reveal>
        <SectionHeader
          title="Selected work and press"
          className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
        />
      </Reveal>
      <Reveal>
        <AuthorityStrip />
      </Reveal>
    </Section>
  );
}
