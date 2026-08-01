import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { FAQSection } from "@/components/site/faq-section";
import { CtaStrip } from "@/components/site/cta-strip";
import {
  Landmark, LineChart, Megaphone, Users2, Building2, Package,
  Cpu, Lightbulb, Scale, GraduationCap, FlaskConical, Layers,
} from "lucide-react";

export const Route = createFileRoute("/aims-scope")({
  head: () => ({
    meta: [
      { title: "Focus & Scope — EJAUIAPAR" },
      { name: "description", content: "EJAUIAPAR publishes original research across Ayurveda, Unani, Pharmaceuticals, and Allopathic Medicine." },
      { property: "og:title", content: "Focus & Scope — EJAUIAPAR" },
      { property: "og:description", content: "Subject areas, methodological standards, and manuscript types accepted by EJAUIAPAR." },
    ],
    links: [{ rel: "canonical", href: "/aims-scope" }],
  }),
  component: AimsScope,
});

const AREAS = [
  { icon: FlaskConical, title: "Ayurveda & Traditional Systems", body: "Ayurvedic Pharmacology (Dravyaguna), Panchakarma, Rasashastra, Bhaishajya Kalpana, Shalya Tantra, Shalakya Tantra, Kayachikitsa, Siddha Medicine, Herbal Medicine, Traditional Healing, Ethnomedicine, and Natural Product Research." },
  { icon: Layers, title: "Unani Medicine", body: "Ilmul Advia (Pharmacology), Moalajat (Medicine), Kulliyat (Basic Principles), Tahaffuzi wa Samaji Tib (Preventive and Social Medicine), Ilmul Sayadla (Pharmacy), Pharmacognosy, and Natural Products in Unani." },
  { icon: Building2, title: "Pharmaceutical Sciences", body: "Drug Delivery Systems, Clinical Pharmacy, Pharmaceutical Chemistry, Pharmaceutics, Pharmacognosy, Pharmacology, Toxicology, Quality Control, Pharmaceutical Analysis, Biopharmaceutics, Pharmacokinetics, and Regulatory Affairs." },
  { icon: Users2, title: "Allopathic Medicine", body: "Internal Medicine, Surgery, Pediatrics, Obstetrics, Gynecology, Clinical Nutrition, Pathology, Radiology, Cardiology, Neurology, Oncology, Dermatology, Psychiatry, and Evidence-Based Clinical Practice." },
  { icon: Landmark, title: "Integrative Medicine", body: "Evidence-Based Healthcare, Integrative Healthcare, Complementary Medicine, Holistic Healing, Preventive Medicine, Alternative Therapies, Mind-Body Medicine, and Wellness Management." },
  { icon: Cpu, title: "Interdisciplinary Medical Sciences", body: "Biochemistry, Microbiology, Biotechnology, Molecular Biology, Immunology, Public Health, Epidemiology, Genetics, Bioinformatics, Biomedical Engineering, and Medical Ethics." },
];

const MANUSCRIPT_TYPES = [
  "Original Research Papers",
  "Review Articles",
  "Technical Notes",
  "Case Studies",
  "Conceptual Papers",
  "Theoretical Papers",
  "Thesis Notes",
  "Book Notes",
];

const FAQS = [
  { q: "Do you accept qualitative research?", a: "Yes. EJAUIAPAR welcomes theoretical, empirical, conceptual, qualitative, quantitative and mixed-method studies that make a meaningful contribution." },
  { q: "Are interdisciplinary papers welcome?", a: "Yes, provided the paper clearly establishes its connection with healthcare, pharmaceuticals, or medical sciences and its academic, professional, policy, or clinical value." },
  { q: "Can I submit a case study?", a: "Yes. Case studies are one of the accepted manuscript categories alongside original research, reviews, technical notes, conceptual and theoretical papers, thesis notes, and book notes." },
  { q: "Are country- or region-specific studies welcome?", a: "Absolutely — provided the findings are of broader theoretical, empirical, methodological, policy-based, or practical relevance." },
];

function AimsScope() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Focus & Scope"
        title="What EJAUIAPAR publishes"
        intro="EJAUIAPAR focuses on the publication of original, authentic, and high-quality research in Ayurveda, Unani Medicine, Pharmaceutical Sciences, Integrative Healthcare, Allopathic Medicine, Drug Development, and interdisciplinary medical sciences."
      />
      <div className="container-page py-12">
        <Breadcrumbs trail={[{ label: "About", to: "/about" }, { label: "Focus & Scope" }]} />

        <section className="grid gap-8 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">Focus of the journal</div>
              <p className="mt-2 font-serif text-lg leading-snug">
                Theoretical and practice-oriented research that contributes to academic knowledge, professional understanding, clinical development, policy formulation, healthcare decision-making, and contemporary medical practices.
              </p>
              <div className="mt-6 rule-gold" />
              <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">Manuscripts accepted</div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {MANUSCRIPT_TYPES.map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Layers className="mt-0.5 h-3.5 w-3.5 flex-none text-brand" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-semibold">Scope of the journal</h2>
            <div className="mt-2 rule-gold" />
            <p className="mt-4 text-sm text-muted-foreground">
              EJAUIAPAR welcomes submissions across the following medical and pharmaceutical subject areas.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {AREAS.map((a) => (
                <article key={a.title} className="rounded-xl border border-border bg-card p-5 transition hover:border-brand/40 hover:shadow-elev">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-muted text-brand">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-serif text-base font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-brand/30 bg-brand-muted/20 p-8">
          <h2 className="font-serif text-2xl font-semibold">Scope disclaimer</h2>
          <div className="mt-2 rule-gold" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A manuscript must make a clear contribution to Ayurveda, Unani Medicine, Pharmaceutical Sciences, Allopathic Medicine, or an allied medical discipline. Interdisciplinary papers may be considered when their connection with the journal's scope is adequately established.
          </p>
        </section>

        <div className="mt-16">
          <FAQSection items={FAQS} />
        </div>

        <CtaStrip
          eyebrow="Match our scope?"
          title="Start your submission"
          intro="If your work fits our aims, submit today. Manuscripts are evaluated through external double-blind peer review."
          actions={[
            { label: "Submit a manuscript", to: "/submit", primary: true },
            { label: "Read author guidelines", to: "/author-guidelines" },
          ]}
        />
      </div>
    </SiteLayout>
  );
}
