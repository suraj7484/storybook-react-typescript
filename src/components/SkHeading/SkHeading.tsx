import "./skHeading.css";

interface HeadingProps {
  /**
   * What color to use
   */
  color?: string;
  /**
   * How large should the Heading be?
   */
  size: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   *  Which heading tag we should use?
   */
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Heading contents
   */
  label: string;
}

const Heading = ({children, element, ...rest}: any, ) => {
  let renderer;
  switch (element) {
    case "h1":
      renderer = <h1 {...rest}>{children}</h1>;
      break;
    case "h2":
      renderer = <h2 {...rest}>{children}</h2>;
      break;
    case "h3":
      renderer = <h3 {...rest}>{children}</h3>;
      break;
    case "h4":
      renderer = <h4 {...rest}>{children}</h4>;
      break;
    case "h5":
      renderer = <h5 {...rest}>{children}</h5>;
      break;
    case "h6":
      renderer = <h6 {...rest}>{children}</h6>;
      break;
    default:
          renderer = <h3 {...rest}>{children}</h3>;
  }
  return <>{renderer}</>;
};

/**
 * Primary UI component for user interaction
 */
export const SkHeading = ({
  element = "h3",
  size = "md",
  color,
  label,
  ...props
}: HeadingProps) => {
  return (
    <>
      <Heading
        element={element}
        className={["storybook-heading", `storybook-heading--${size}`].join(
          " "
        )}
        style={{ color }}
        {...props}
      >
        {label}
      </Heading>
    </>
  );
};


