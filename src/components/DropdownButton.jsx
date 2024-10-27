import Link from "@docusaurus/Link";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";

const Dropdown = ({ className, options, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <span ref={dropdownRef} className="relative inline-block text-left">
      <Button className={className + " w-full"} {...props} onClick={toggleMenu} />

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-background-alt shadow-lg ring-1 ring-text-light"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <Link
                key={option.label}
                href={option.link}
                target="_blank"
                className="font-bold hover:no-underline block px-4 py-2 text-sm hover:bg-background-default text-text-default"
                aria-label={option.label}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </span>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dropdown;
