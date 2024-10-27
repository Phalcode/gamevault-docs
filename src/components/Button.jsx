import Link from "@docusaurus/Link";
import clsx from "clsx";
import PropTypes from "prop-types";

const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 !no-underline",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none",
};

const variantStyles = {
  solid: {
    primary:
      "bg-primary-default text-white hover:text-white hover:bg-primary-darker active:bg-primary-darkest focus-visible:outline-primary-darkest",
  },
};

// Function to determine the appropriate variant class
function getVariantClass(variant, color) {
  if (variant === "outline") {
    return variantStyles.outline?.[color];
  } else if (variant === "solid") {
    return variantStyles.solid?.[color];
  }
  return undefined;
}

export function Button({ className, ...props }) {
  props.variant ??= "solid";
  props.color ??= "primary";

  const variantClass = getVariantClass(props.variant, props.color);

  className = clsx(baseStyles[props.variant], variantClass, className);
  console.log(className);

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}

// Prop validation
Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "outline"]),
  color: PropTypes.oneOf(["primary"]),
};
