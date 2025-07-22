function HeroOrbit({
  children,
  size,
  rotation,
}: //   animationDuration = "0s",
PropsWithChildren<{
  size: number;
  rotation: number;
  animationDuration?: string;
}>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        // className={`border border-red-500`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`,

          //   style={{ animationDuration }}
        }}
      >
        <div
          className="inline-flex "
          style={{
            transform: `rotate(-${rotation}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeroOrbit;
