import "./Avatar.css";

interface AvatarProps {
  /**
   * src of the Image
   */
  imgSrc: string;
  /**
   * Bold or Bolder
   */
  round?: number;
  /**
   *  Choose size of the para
   */
  size: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Para Content
   */
  label?: string;
}

export const Avatar = ({imgSrc, round, size, label}: AvatarProps) => {
    return (
      <img
        className={[
          "storybook-img",
          `storybook-img--${size}`,
        ].join(" ")}
        src={imgSrc}
        alt={label}
        style={{borderRadius: `${round}%`}}
      />
    );
};
