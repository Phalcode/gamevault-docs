import Link from "@docusaurus/Link";
import clsx from "clsx";
import PropTypes from "prop-types";

const baseStyles =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] no-underline transition duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gv-accent-cool active:scale-[0.98]";

const variantStyles = {
  solid: {
    primary:
      "border-gv-accent-strong/70 bg-gv-accent text-white shadow-[0_12px_28px_rgba(100,89,223,0.28)] hover:bg-gv-accent-strong hover:text-white",
    gold: "border-[#cfa344]/70 bg-[#cfa344] text-[#241a05] shadow-[0_12px_28px_rgba(207,163,68,0.25)] hover:bg-[#f5be39] hover:text-[#241a05]",
  },
  outline:
    "border-gv-line-strong bg-gv-panel-strong text-gv-text shadow-sm hover:border-gv-accent/60 hover:bg-gv-panel hover:text-gv-text",
  ghost:
    "border-transparent bg-transparent text-gv-text hover:bg-gv-panel-soft hover:text-gv-text",
};

const sizeStyles = {
  sm: "min-h-9 px-3.5 py-2 text-xs",
  md: "",
  lg: "min-h-12 px-6 py-3 text-base",
};

export function Button({
  className = undefined,
  variant = "solid",
  color = "primary",
  size = "md",
  ...props
}) {
  const variantClass =
    variantStyles[variant]?.[color] ?? variantStyles.solid.primary;

  const classes = clsx(
    baseStyles,
    variantClass,
    sizeStyles[size] ?? sizeStyles.md,
    className,
  );

  return typeof props.href === "undefined" ? (
    <button type="button" className={classes} {...props} />
  ) : (
    <Link className={classes} {...props} />
  );
}

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "outline", "ghost"]),
  color: PropTypes.oneOf(["primary", "gold"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
