import Image from 'next/image';
import { SearchForm } from '@/components/ui/SearchForm';
import { avatarImages } from '@/lib/constants/avatars';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen w-full bg-primary text-white flex flex-col items-center px-4 pb-20 overflow-hidden font-sans">
      <div className="absolute top-0 w-screen h-full pointer-events-none select-none">
        <Image
          src="/images/hero/Hero_Frame-1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src="/images/hero/Hero_Frame-2.png"
          alt=""
          priority
          fill
          sizes="100vw"
          aria-hidden="true"
          className="object-contain object-bottom"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-20 bg-grid-color-white bg-grid-line-[1px]" />

      <div className="w-[80vw] md:max-w-4xl mx-auto text-center z-10 flex flex-col items-center mt-28 sm:mt-36">
        <h1 className="text-3xl sm:text-[44px] md:text-[64px] lg:text-[72px] leading-[1.15] font-semibold tracking-tight mb-6">
          Get Access to Hundreds
          <br /> Courses Available
        </h1>

        <p className="text-neutral-200 text-sm md:text-base mb-10 font-normal">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <SearchForm placeholder="Course, topic, creator" />
      </div>

      <div className="absolute inset-0 max-w-6xl mx-auto pointer-events-none hidden md:block">
        <div className="absolute top-[62%] left-[8%] lg:left-[22%] bg-white text-[#242528] p-4 rounded-2xl shadow-xl w-52 pointer-events-auto">
          <h2 className="font-semibold text-base mb-1">UI/UX Design</h2>
          <p className="text-neutral-400 text-xs font-normal">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        <div className="absolute top-[60%] right-[8%] lg:right-[20%] bg-white text-[#242528] p-5 rounded-2xl shadow-xl w-56 pointer-events-auto">
          <p className="text-neutral-500 text-xs font-medium mb-1">
            Learning Progress
          </p>
          <div className="text-3xl font-bold mb-3">55%</div>
          <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
            <div className="bg-secondary h-full w-[55%] rounded-full" />
          </div>
        </div>

        <div className="absolute top-[80%] left-[10%] lg:left-[20%] bg-white text-[#242528] p-4 rounded-2xl shadow-xl w-56 pointer-events-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-sm">Happy Students</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-2">
            <span className="font-medium text-neutral-800">4.5</span>
            <span>(240)</span>
            <span className="text-amber-400">★</span>
          </div>
          <div className="flex items-center -space-x-2">
            {avatarImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt="Student Avatar"
                width={28}
                height={28}
                className="w-7 h-7 rounded-full border-2 border-white object-cover"
              />
            ))}
            <div className="w-7 h-7 rounded-full bg-secondary text-[#242528] text-[10px] font-bold flex items-center justify-center border-2 border-white">
              2K+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
