function HeroOrbit({
  children,
  size,
  rotation,
  animationDuration, // Default animation duration
}: //   animationSpin = "10s",
PropsWithChildren<{
  size: number;
  rotation: number;
  animationDuration?: string;
  //   animationSpin?: string;
}>) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
    >
      <div
        // className={` ${
        //   animationSpin
        //     ? `animate-spin [animation-duration:${animationSpin}]`
        //     : ""
        // }`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`,

          //   style={{ animationDuration }}
        }}
      >
        <div
          className={`inline-flex ${
            animationDuration
              ? `animate-spin [animation-duration:${animationDuration}]`
              : ""
          }`}
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
