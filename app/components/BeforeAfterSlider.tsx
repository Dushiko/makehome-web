"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type TouchEvent as ReactTouchEvent,
} from "react";

export type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  showLabels?: boolean;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Stav před úpravou",
  afterAlt = "Stav po úpravě",
  className = "",
  showLabels = true,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    if (width <= 0) return;
    const pct = ((clientX - left) / width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const onMouseMove = (e: MouseEvent) => {
      setFromClientX(e.clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setFromClientX(e.touches[0].clientX);
      }
    };

    const end = () => setDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", end);
    window.addEventListener("touchcancel", end);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", end);
      window.removeEventListener("touchcancel", end);
    };
  }, [dragging, setFromClientX]);

  const startDrag = useCallback(
    (clientX: number) => {
      setDragging(true);
      setFromClientX(clientX);
    },
    [setFromClientX],
  );

  const onMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    e.preventDefault();
    startDrag(e.clientX);
  };

  const onTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    startDrag(e.touches[0].clientX);
  };

  const clipRight = 100 - position;

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-lg border border-black/[0.08] bg-neutral-100 sm:rounded-xl ${className}`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-label="Před a po — posuvník"
    >
      <div className="absolute inset-0">
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 640px) 100vw, min(1152px, 100vw)"
          className="object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${clipRight}% 0 0)` }}
        aria-hidden
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 640px) 100vw, min(1152px, 100vw)"
          className="object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>

      {showLabels && (
        <>
          <span className="pointer-events-none absolute bottom-2 left-2 z-10 rounded bg-black/45 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-white sm:text-[0.65rem]">
            Před
          </span>
          <span className="pointer-events-none absolute bottom-2 right-2 z-10 rounded bg-black/45 px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-white sm:text-[0.65rem]">
            Po
          </span>
        </>
      )}

      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-0"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
        }}
        aria-hidden
      >
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
        <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200/90 bg-white shadow-md shadow-black/20" />
      </div>
    </div>
  );
}
