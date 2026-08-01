import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageQuery } from "@/lib/queries";

export const Route = createFileRoute("/archives/year")({
  head: () => ({
    meta: [
      { title: "Archives by Year — EJAUIAPAR" },
      { name: "description", content: "Browse EJAUIAPAR archives by year." },
      { property: "og:title", content: "Archives by Year — EJAUIAPAR" },
      { property: "og:description", content: "Browse EJAUIAPAR archives by year." },
    ],
    links: [{ rel: "canonical", href: "/archives/year" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(pageQuery("archives-year")),
  component: () => <ContentPage slug="archives-year" title="Archives by Year" crumb="By Year" />,
});
