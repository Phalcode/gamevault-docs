import clsx from "clsx";

export function Container({ className = undefined, ...props }) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}
