import { useEffect } from "react";

// Dynamic pointer values and keyframes use the Web Animations API; layout stays in Tailwind.
export function usePortfolioMotion() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    const animations = new Set<Animation>();
    const play = (
      element: Element,
      frames: Keyframe[],
      options: KeyframeAnimationOptions,
    ) => {
      const animation = element.animate(frames, options);
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
      return animation;
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (!reduced.matches)
            play(
              entry.target,
              [
                { opacity: 0, translate: "0 20px" },
                { opacity: 1, translate: "0 0" },
              ],
              { duration: 650, easing: "cubic-bezier(.2,.8,.2,1)" },
            );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    const startAmbient = () => {
      document.querySelectorAll("[data-float]").forEach((element, index) => {
        play(
          element,
          [
            { translate: "0 0" },
            { translate: "0 -12px" },
            { translate: "0 0" },
          ],
          {
            duration: 4800 + (index % 3) * 600,
            delay: -(index % 4) * 900,
            iterations: Infinity,
            easing: "ease-in-out",
          },
        );
      });
      document
        .querySelectorAll("[data-orbit]")
        .forEach((element) =>
          play(
            element,
            [{ rotate: "-8deg" }, { rotate: "8deg" }, { rotate: "-8deg" }],
            { duration: 14000, iterations: Infinity, easing: "ease-in-out" },
          ),
        );
    };
    if (!reduced.matches) startAmbient();
    const cleanup = [
      ...document.querySelectorAll<HTMLElement>("[data-tilt]"),
    ].map((element) => {
      let frame = 0;
      let returning: Animation | undefined;
      const reset = () => {
        cancelAnimationFrame(frame);
        returning?.cancel();
        const transform = element.style.transform;
        element.style.removeProperty("transform");
        if (transform && !reduced.matches)
          returning = play(element, [{ transform }, { transform: "none" }], {
            duration: 250,
            easing: "ease-out",
          });
      };
      const move = (event: PointerEvent) => {
        if (
          event.pointerType !== "mouse" ||
          reduced.matches ||
          !finePointer.matches
        )
          return;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          returning?.cancel();
          const bounds = element.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          element.style.transform = `perspective(1100px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
        });
      };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", reset);
      element.addEventListener("pointercancel", reset);
      return () => {
        cancelAnimationFrame(frame);
        returning?.cancel();
        element.style.removeProperty("transform");
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", reset);
        element.removeEventListener("pointercancel", reset);
      };
    });
    const preferenceChange = () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      if (!reduced.matches) startAmbient();
      else
        document
          .querySelectorAll<HTMLElement>("[data-tilt]")
          .forEach((element) => element.style.removeProperty("transform"));
    };
    reduced.addEventListener("change", preferenceChange);
    return () => {
      observer.disconnect();
      cleanup.forEach((dispose) => dispose());
      animations.forEach((animation) => animation.cancel());
      reduced.removeEventListener("change", preferenceChange);
    };
  }, []);
}
