import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageQuery } from "@/lib/queries";

export const Route = createFileRoute("/ebooks/download")({
  head: () => ({
    meta: [
      { title: "Download E-Books — EJAUIAPAR" },
      { name: "description", content: "Download available EJAUIAPAR e-books." },
      { property: "og:title", content: "Download E-Books — EJAUIAPAR" },
      { property: "og:description", content: "Download available EJAUIAPAR e-books." },
    ],
    links: [{ rel: "canonical", href: "/ebooks/download" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(pageQuery("ebooks-download")),
  component: () => <ContentPage slug="ebooks-download" title="Download E-Books" crumb="Download" />,
});
