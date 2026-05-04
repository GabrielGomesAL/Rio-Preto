type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ title, description, align = "left", className = "" }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <h2 className="text-balance text-3xl font-black leading-tight text-ice sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-ice/68 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
