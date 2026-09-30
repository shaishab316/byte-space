import Image from 'next/image';

export default function Header() {
  const profileImage =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80';

  return (
    <header className="relative bg-primary text-white px-6 pt-10 pb-16 font-sans">
      {/* Background Grid - from original code, adjusted opacity for readability */}
      <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-10 bg-grid-color-white bg-grid-line-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto mt-30">
        {/* new content section matching design */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
          <Image
            src={profileImage}
            alt="PurePearl Studio"
            width={96}
            height={96}
            className="size-24 rounded-2xl"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">PurePearl Studio</h1>
              <span className="bg-[#D4FF00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                Creator
              </span>
            </div>
            <p className="text-white/80 text-sm mt-1">
              Passionate UI/UX, Web designer
            </p>
          </div>
        </div>

        {/* Bio Text from design */}
        <p className="text-white/90 text-sm max-w-3xl leading-relaxed mb-10">
          Welcome to the creative world of PurePearl Studio. Here, you&rsquo;ll
          discover the passion, expertise, and inspiration that drive my
          creative journey. Let&#39;s explore and learn together! Dive into my
          creative portfolio, showcasing a glimpse of my artistic endeavors.
          From digital designs to multimedia projects, each piece tells a unique
          story. Explore the world of creativity with me.
        </p>

        {/* Stats and Action from design */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium">
              <span className="text-primary">3</span> Products
            </div>
            <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium">
              <span className="text-primary">12</span> Followers
            </div>
          </div>

          <button className="bg-[#D4FF00] text-black font-semibold px-8 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
            Follow
          </button>
        </div>
      </div>
    </header>
  );
}
