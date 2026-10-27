import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./ImageZoom.module.css";

const ImageZoomContext = createContext(
  /** @type {{ openImage: (options: ZoomOptions) => void }} */ ({
    openImage: () => {},
  }),
);

/**
 * @typedef {Object} ZoomImage
 * @property {string} src
 * @property {string=} alt
 * @property {string=} title
 */

/**
 * @typedef {Object} ZoomOptions
 * @property {ZoomImage[]=} images
 * @property {number=} index
 * @property {HTMLImageElement=} element
 * @property {string=} src
 * @property {string=} alt
 * @property {string=} title
 */

/**
 * Collect all images of the current article so the lightbox can page through
 * them. Images opt out by omitting `data-gv-zoom`.
 *
 * @param {HTMLImageElement} element
 * @param {ZoomImage} fallback
 * @returns {{ images: ZoomImage[], index: number }}
 */
function collectGallery(element, fallback) {
  const scope = element.closest(".markdown, article, main") ?? document;
  const nodes = Array.from(scope.querySelectorAll("img[data-gv-zoom]")).filter(
    /** @param {Element} node */
    (node) =>
      node instanceof HTMLImageElement &&
      node.dataset.gvZoomDisabled !== "true" &&
      node.getAttribute("src"),
  );

  if (nodes.length === 0) {
    return { images: [fallback], index: 0 };
  }

  const images = nodes.map((node) => ({
    src:
      /** @type {HTMLImageElement} */ (node).currentSrc ||
      /** @type {HTMLImageElement} */ (node).src,
    alt: /** @type {HTMLImageElement} */ (node).alt || undefined,
    title:
      /** @type {HTMLImageElement} */ (node).dataset.gvZoomTitle ||
      /** @type {HTMLImageElement} */ (node).title ||
      undefined,
  }));

  const index = Math.max(
    0,
    nodes.findIndex((node) => node === element),
  );

  if (images.length === 0) {
    return { images: [fallback], index: 0 };
  }

  return { images, index };
}

/**
 * @param {{ children: React.ReactNode }} props
 */
export function ImageZoomProvider({ children }) {
  /** @type {[ZoomImage[] | null, Function]} */
  const [images, setImages] = useState(null);
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef(/** @type {HTMLDialogElement | null} */ (null));
  const stageRef = useRef(/** @type {HTMLDivElement | null} */ (null));

  const close = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) {
      dialog.close();
    } else {
      setImages(null);
    }
  }, []);

  const openImage = useCallback((/** @type {ZoomOptions} */ options) => {
    const fallback = {
      src: options.src ?? options.element?.currentSrc ?? "",
      alt: options.alt ?? options.element?.alt,
      title: options.title ?? options.element?.dataset.gvZoomTitle,
    };

    if (options.images?.length) {
      setImages(options.images);
      setIndex(
        Math.min(Math.max(options.index ?? 0, 0), options.images.length - 1),
      );
    } else if (options.element) {
      const gallery = collectGallery(options.element, fallback);
      setImages(gallery.images);
      setIndex(gallery.index);
    } else if (fallback.src) {
      setImages([fallback]);
      setIndex(0);
    }

    setZoomed(false);
  }, []);

  const showPrevious = useCallback(() => {
    setZoomed(false);
    setIndex((current) => {
      if (!images?.length) return 0;
      return (current - 1 + images.length) % images.length;
    });
  }, [images]);

  const showNext = useCallback(() => {
    setZoomed(false);
    setIndex((current) => {
      if (!images?.length) return 0;
      return (current + 1) % images.length;
    });
  }, [images]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !images?.length) return undefined;

    if (!dialog.open) {
      dialog.showModal();
    }

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    return () => {
      root.style.overflow = previousOverflow;
    };
  }, [images]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !images?.length) return undefined;

    /** @param {KeyboardEvent} event */
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      } else if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setZoomed(true);
      } else if (event.key === "-" || event.key === "0") {
        event.preventDefault();
        setZoomed(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [close, images, showNext, showPrevious]);

  useEffect(() => {
    if (zoomed) {
      stageRef.current?.scrollTo({ top: 0, left: 0 });
    }
  }, [zoomed, index]);

  const current = images?.[index];

  const value = useMemo(() => ({ openImage }), [openImage]);

  return (
    <ImageZoomContext.Provider value={value}>
      {children}
      {images?.length && current ? (
        <dialog
          ref={dialogRef}
          className={styles.dialog}
          aria-label={current.alt || "Image preview"}
          onCancel={(event) => {
            event.preventDefault();
            close();
          }}
          onClose={() => {
            setImages(null);
            setIndex(0);
            setZoomed(false);
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              close();
            }
          }}
        >
          <div
            className={styles.frame}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                close();
              }
            }}
          >
            <div className={styles.topbar}>
              <div className={styles.meta}>
                <span className={styles.counter} aria-live="polite">
                  {index + 1} / {images.length}
                </span>
                {current.alt ? (
                  <span className={styles.title}>{current.alt}</span>
                ) : null}
              </div>
              <button
                type="button"
                className={styles.close}
                onClick={close}
                aria-label="Close image preview"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            <div
              ref={stageRef}
              className={styles.stage}
              data-zoomed={zoomed ? "true" : "false"}
              onClick={() => setZoomed((value) => !value)}
            >
              {images.length > 1 ? (
                <button
                  type="button"
                  className={styles.previous}
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  aria-label="Previous image"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M15 5l-7 7 7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              ) : null}

              <img
                key={current.src}
                className={styles.image}
                src={current.src}
                alt={current.alt ?? ""}
                draggable={false}
                onClick={(event) => {
                  event.stopPropagation();
                  setZoomed((value) => !value);
                }}
              />

              {images.length > 1 ? (
                <button
                  type="button"
                  className={styles.next}
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next image"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M9 5l7 7-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              ) : null}
            </div>

            <div className={styles.footer}>
              {current.title || current.alt ? (
                <p className={styles.caption}>{current.title || current.alt}</p>
              ) : null}
              <p className={styles.hint}>
                {zoomed
                  ? "Click the image or press 0 to fit the screen"
                  : "Click the image to view it at full size"}
                {images.length > 1 ? " · Use the arrow keys to browse" : ""}
              </p>
            </div>
          </div>
        </dialog>
      ) : null}
    </ImageZoomContext.Provider>
  );
}

export function useImageZoom() {
  return useContext(ImageZoomContext);
}
