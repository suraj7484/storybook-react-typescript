import "./skPara.css";

interface ParaProps {
  /**
   * What color to use
   */
  color?: string;
  /**
   * Bold or Bolder
   */
  bold?: "bold" | "bolder" | 400 | 500 | 600 | 700;

  /**
   *  Choose size of the para
   */
  size: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Para Content
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const SkPara = ({
  size = "md",
  color,
  label,
  bold,
  ...props
}: ParaProps) => {
  return (
    <p
      className={["storybook-para", `storybook-para--${size}`].join(" ")}
      style={{ color, fontWeight: bold }}
      {...props}
    >
      {label}
    </p>
  );
};
