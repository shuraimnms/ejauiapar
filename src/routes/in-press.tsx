import { createFileRoute } from "@tanstack/react-router";
import { ArticleListingPage } from "@/components/site/article-listing-page";
import { articlesQuery } from "@/lib/queries";

export const Route = createFileRoute("/in-press")({
  head: () => ({
    meta: [
      { title: "Articles In Press — EJAUIAPAR" },
      { name: "description", content: "Accepted EJAUIAPAR manuscripts in final production, awaiting issue assignment and DOI registration." },
      { property: "og:title", content: "Articles In Press — EJAUIAPAR" },
      { property: "og:description", content: "Peer-reviewed manuscripts in final production at EJAUIAPAR." },
    ],
    links: [{ rel: "canonical", href: "/in-press" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(articlesQuery()),
  component: () => <ArticleListingPage mode="in-press" />,
});
