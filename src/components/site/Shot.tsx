import { useEffect, useState } from "react";
import { X } from "lucide-react";

type ShotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

/**
 * A project screenshot shown in the Our Work section.
 * Clicking it opens the same image at its full size, so small UI text stays readable.
 */
export function Shot({ src, alt, width, height, className = "" }: ShotProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${alt} full size`}
        className={`block w-full cursor-zoom-in overflow-hidden rounded-2xl border shadow-[0_30px_80px_-40px_var(--ink)] transition-shadow duration-500 hover:shadow-[0_45px_100px_-40px_var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${className}`}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md sm:p-10"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close full-size view"
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border bg-paper text-ink-foreground transition-colors hover:bg-brand hover:text-ink-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(event) => event.stopPropagation()}
            style={{ maxWidth: `min(100%, ${width}px)`, maxHeight: `min(100%, ${height}px)` }}
            className="h-auto w-auto rounded-xl border object-contain shadow-[0_60px_160px_-40px_var(--ink)]"
          />
        </div>
      ) : null}
    </>
  );
}
