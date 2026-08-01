import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageQuery } from "@/lib/queries";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — EJAUIAPAR" },
      { name: "description", content: "Legal disclaimers for EJAUIAPAR." },
      { property: "og:title", content: "Disclaimer — EJAUIAPAR" },
      { property: "og:description", content: "Legal disclaimers for EJAUIAPAR." },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(pageQuery("disclaimer")),
  component: () => <ContentPage slug="disclaimer" title="Disclaimer" crumb="Disclaimer" />,
});
