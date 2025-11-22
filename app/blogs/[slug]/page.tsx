
// import { useRouter } from 'next/navigation';

import Image from "next/image";
import { blogs } from "@/lib/constants";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const Param = await props.params;

  const blog = blogs.find((i) => i.slug === Param.slug)
  if (!blog) {
    return notFound();
  }

  if (!blog) return {
    title: "blog 404 Not Found | Genius Dwonloader",
    description: "No such blog exists at Genius Dwonloader",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      title: "blog 404 Not Found | Genius Dwonloader",
      description: "No such blog exists at Genius Dwonloader",
      images: [
        {
          url: '/404.png',
          width: 1024,
          height: 768,
          alt: '404 Not Found',
        },
      ],
      site_name: 'Borcelle',
    },
  };

  return {
    title: `${blog.title} | Genius Downloader`,
    // description: blog.description || "Shop high-quality products at Borcelle.",
    // keywords: blog.tags?.join(', ') ?? '',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      title: `${blog.title} | Genius Downloader`,
      // description: product.description || "Shop high-quality products at Borcelle.",
      url: `${process.env.APP_URL}/blogs/${blog.slug}`,
      images: [
        {
          url: blog.image || 'fallback-banner.webp',
          width: 1024,
          height: 768,
          alt: blog.title,
        },
      ],
      site_name: 'Genius_Downloader',
    },
  };
}


export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const Param = await params;

  const blog = blogs.find((i) => i.slug === Param.slug)
  if (!blog) {
    return notFound();
  }
  return (
    <div className="min-h-screen bg-[#FFC803] px-4 sm:px-8 lg:px-20 py-8 md:py-12">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          // onClick={() => router.back()}
          href={'/#how-it-works'}
        >
          {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
          Back to Blogs */}
          <button className="mb-8 btn-animated min-w-[120px] sm:min-w-[150px] md:min-w-[180px] rounded py-[13px] font-body text-base text-[10px] sm:text-lg md:text-xl">
            <span className="btn-text inline-flex items-center gap-3 px-3">  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
              Back to Home</span>
          </button>
        </Link>

        <div
          className="bg-[#FD5A17] border-2 border-black/50 rounded-xl p-8 md:p-12 mb-8"
          style={{ boxShadow: '8px 8px 0 0 #000' }}
        >
          <h1
            style={{ fontFamily: 'var(--font-ghuthen)' }}
            className="font-bold text-4xl md:text-5xl lg:text-[56px] leading-tight text-black mb-5"
          >
            {blog?.title}
          </h1>

          <div className="flex flex-wrap gap-5 text-base md:text-lg opacity-90">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>November 22, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>By Sarah Johnson</span>
            </div>
          </div>
        </div>

        <div
          className="bg-[#FD5A17] aspect-video border-2 border-black/50 rounded-xl p-6 md:p-8 mb-8"
          style={{ boxShadow: '8px 8px 0 0 #000' }}
        >
          <img
            src={blog!.image}
            alt="Blog thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="bg-[#FD5A17] border-2 border-black/50 rounded-xl p-8 md:p-12 mb-8"
          style={{ boxShadow: '8px 8px 0 0 #000' }}
        >
          <p className="text-lg md:text-xl leading-relaxed mb-5">
            Starting a blog in 2024 can be one of the most rewarding decisions you'll make. Whether you're looking to share your expertise, build a personal brand, or create a side income, blogging offers endless possibilities. But with millions of blogs already out there, how do you stand out and actually reach your audience?
          </p>

          <h2
            style={{ fontFamily: 'var(--font-ghuthen)' }}
            className="font-bold text-3xl md:text-4xl lg:text-[42px] text-black mt-8 mb-5"
          >
            Why Start a Blog?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-5">
            Before diving into the how, let's talk about the why. Blogging isn't just about writing—it's about building connections, establishing authority, and creating value for your readers. Here are some compelling reasons to start:
          </p>

          <ul className="list-disc pl-8 mb-5 space-y-3">
            <li className="text-lg md:text-xl leading-relaxed">Share your knowledge and expertise with the world</li>
            <li className="text-lg md:text-xl leading-relaxed">Build a personal or professional brand</li>
            <li className="text-lg md:text-xl leading-relaxed">Create multiple income streams through monetization</li>
            <li className="text-lg md:text-xl leading-relaxed">Connect with like-minded people in your niche</li>
            <li className="text-lg md:text-xl leading-relaxed">Improve your writing and communication skills</li>
          </ul>

          <h2
            style={{ fontFamily: 'var(--font-ghuthen)' }}
            className="font-bold text-3xl md:text-4xl lg:text-[42px] text-black mt-8 mb-5"
          >
            Finding Your Niche
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-5">
            The first step to successful blogging is finding your niche. Don't try to be everything to everyone. Instead, focus on a specific topic you're passionate about and have expertise in. This makes it easier to attract a dedicated audience and establish yourself as an authority.
          </p>

          <div style={{ fontFamily: 'var(--font-questrial)' }} className="bg-[#FFC803] border-2 border-black rounded-xl p-6 my-8">
            <p className="text-lg md:text-xl font-medium m-0">
              💡 Pro Tip: Your niche should be at the intersection of what you love, what you know, and what people are searching for.
            </p>
          </div>

          <h2
            style={{ fontFamily: 'var(--font-ghuthen)' }}
            className="font-bold text-3xl md:text-4xl lg:text-[42px] text-black mt-8 mb-5"
          >
            Setting Up Your Blog
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-5">
            Once you've identified your niche, it's time to set up your blog. Here's a quick overview of what you'll need:
          </p>

          <ol className="list-decimal pl-8 mb-5 space-y-3">
            <li className="text-lg md:text-xl leading-relaxed"><strong>Choose a platform:</strong> WordPress, Wix, or Squarespace are popular options</li>
            <li className="text-lg md:text-xl leading-relaxed"><strong>Pick a domain name:</strong> Make it memorable and relevant to your niche</li>
            <li className="text-lg md:text-xl leading-relaxed"><strong>Select hosting:</strong> Invest in reliable hosting for better performance</li>
            <li className="text-lg md:text-xl leading-relaxed"><strong>Design your site:</strong> Choose a clean, professional theme</li>
            <li className="text-lg md:text-xl leading-relaxed"><strong>Create essential pages:</strong> About, Contact, and Privacy Policy</li>
          </ol>

          <h2
            style={{ fontFamily: 'var(--font-ghuthen)' }}
            className="font-bold text-3xl md:text-4xl lg:text-[42px] text-black mt-8 mb-5"
          >
            Content Strategy That Works
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-5">
            Creating great content is the heart of blogging success. But it's not just about writing—it's about strategy. Here's what works:
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-5">
            Focus on solving problems your audience faces. Research keywords they're searching for, then create comprehensive, valuable content around those topics. Quality always beats quantity, so aim for in-depth posts that truly help your readers.
          </p>

          <div style={{ fontFamily: 'var(--font-questrial)' }} className="bg-[#FFC803] border-2 border-black rounded-xl p-6 my-8">
            <p className="text-lg md:text-xl font-medium m-0">
              🎯 Remember: Consistency is key. It's better to post one quality article per week than seven mediocre ones.
            </p>
          </div>

          <h2
            style={{ fontFamily: 'var(--font-ghuthen)' }}
            className="font-bold text-3xl md:text-4xl lg:text-[42px] text-black mt-8 mb-5"
          >
            Growing Your Reach
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-5">
            Creating content is only half the battle. To grow your blog, you need to actively promote it. Share your posts on social media, engage with your audience, collaborate with other bloggers, and optimize for search engines. Building an email list should also be a priority from day one.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            The journey of blogging is a marathon, not a sprint. Stay patient, keep learning, and most importantly, enjoy the process. Your authentic voice and genuine passion will shine through and attract the right audience to your blog.
          </p>
        </div>

        {/* Related Posts */}
        <div
          className="bg-black border-2 border-black rounded-xl p-8 md:p-10"
          style={{ boxShadow: '8px 8px 0 0 #000' }}
        >
          <h3
            style={{ fontFamily: 'var(--font-ghuthen)' }}
            className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] mb-8"
          >
            Related Articles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((post, index) => (
              <Link href={`/blogs/${post.slug}`}
                key={index}
                className="bg-[#FD5A17] border-2 border-white rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform"
              >
                <div className="bg-[#FFC803] p-5 border-b-2 border-black">
                  <Image
                    src={post?.image}
                    alt="Blog thumbnail"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-white">
                  <p
                    style={{ fontFamily: 'var(--font-poppins)' }}
                    className="text-lg font-medium text-center"
                  >
                    {post.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}