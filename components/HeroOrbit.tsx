function HeroOrbit({
  children,
  size,
  rotation,
}: PropsWithChildren<{
  size: number;
  rotation: number;
}>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div className="animate-spin [animation-duration:60s] [animation-timing-function:cubic-bezier(0.25,0.1,0.25,1)]">
        <div
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className="inline-flex animate-spin [animation-duration:10s] [animation-timing-function:cubic-bezier(0.25,0.1,0.25,1)]"
            style={{
              transform: `rotate(-${rotation}deg)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroOrbit;
