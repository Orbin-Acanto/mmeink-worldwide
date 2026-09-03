"use client";

import { useEffect } from "react";

/**
 * Smooth scrolling for in page anchor links only.
 *
 * `html { scroll-behavior: smooth }` used to do this globally, but it also
 * applies to the jump the App Router makes on a route change, which turned
 * every navigation into an animation the router then abandoned. The result was
 * a new page opening at the previous page's scroll position.
 *
 * Handling the four anchor links here instead leaves the router's own scroll
 * behaviour untouched, so a new page opens at the top and the browser Back
 * button still restores where you were.
 */
export default function SmoothAnchors() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      // Let the browser handle modified clicks and anything but a left click.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const id = decodeURIComponent(href.slice(1));
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Keep the hash in the address bar so the section stays linkable, without
      // triggering the browser's own instant jump.
      if (window.location.hash !== href) {
        window.history.pushState(null, "", href);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
