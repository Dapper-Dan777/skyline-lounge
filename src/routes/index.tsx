import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import skylineHtml from "@/content/skyline.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skyline Lounge Lampertheim – Premium Shisha Bar & Lounge" },
      { name: "description", content: "Skyline Lounge Lampertheim – Premium Shisha, Cocktails & Lounge-Atmosphäre. Reserviere jetzt deinen Tisch." },
    ],
  }),
  component: Index,
  ssr: false,
});

function Index() {
  const iframeHtml = useMemo(() => {
    const base = typeof window !== "undefined" ? `${window.location.origin}/` : "/";
    return skylineHtml.replace("<head>", `<head><base href="${base}">`);
  }, []);

  return (
    <iframe
      srcDoc={iframeHtml}
      title="Skyline Lounge"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
