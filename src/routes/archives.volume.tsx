import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageQuery } from "@/lib/queries";

export const Route = createFileRoute("/archives/volume")({
  head: () => ({
    meta: [
      { title: "Archives by Volume — EJAUIAPAR" },
      { name: "description", content: "Browse EJAUIAPAR archives by volume." },
      { property: "og:title", content: "Archives by Volume — EJAUIAPAR" },
      { property: "og:description", content: "Browse EJAUIAPAR archives by volume." },
    ],
    links: [{ rel: "canonical", href: "/archives/volume" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(pageQuery("archives-volume")),
  component: () => (
    <ContentPage slug="archives-volume" title="Archives by Volume" crumb="By Volume" />
  ),
});
