import ParallaxText from "./ParallaxText";

export default function ParallaxSection() {
  return (
    <div className="px-2 md:px-4">
      <section className="relative py-2 lg:py-24">
        <ParallaxText baseVelocity={-5}>Encrypt Brain </ParallaxText>
        <ParallaxText baseVelocity={5}>software development</ParallaxText>
      </section>
    </div>
  );
}
