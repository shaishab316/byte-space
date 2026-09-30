export default function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-24 text-white">
      <div className="absolute inset-0 bg-grid-[80px] opacity-20 bg-grid-color-white bg-grid-line-[1px]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-sm text-blue-100 md:text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition hover:brightness-95">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
