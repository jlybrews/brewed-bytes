import Image from "next/image";
import Link from "next/link";
import { BeakerIcon, BookOpenIcon, NewspaperIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { client } from "@/lib/sanity/client";
import { featuredPostsQuery } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";

async function getFeaturedPosts() {
  return client.fetch(featuredPostsQuery);
}

export default async function Home() {
  const posts = await getFeaturedPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/coffee-hero.jpg"
            alt="Coffee beans background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Brewed Bytes
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
            Your daily dose of coffee culture, brewing techniques, and everything in between
          </p>
          <Link
            href="/blog"
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Read Latest Posts
          </Link>
        </div>
      </div>

      {/* Featured Posts Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
          >
            View all posts
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <article key={post._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Link href={`/blog/${post.slug.current}`}>
                <div className="relative h-48">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories && post.categories.slice(0, 2).map((category: string) => (
                      <span
                        key={category}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{post.author}</span>
                    <time dateTime={post.publishedAt} className="text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Brewing Methods", icon: BeakerIcon },
              { name: "Coffee Culture", icon: BookOpenIcon },
              { name: "Coffee News", icon: NewspaperIcon },
              { name: "Equipment Reviews", icon: BeakerIcon },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-200"
              >
                <category.icon className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
          <p className="text-gray-200 mb-8">
            Subscribe to our newsletter for the latest coffee tips, brewing techniques, and industry news.
          </p>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 w-full md:w-96 mb-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-white text-gray-900 px-8 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Brewed Bytes</h3>
            <p className="text-gray-300">
              Your daily dose of coffee culture and brewing techniques.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/category/brewing" className="text-gray-300 hover:text-white">Brewing Methods</Link></li>
              <li><Link href="/category/culture" className="text-gray-300 hover:text-white">Coffee Culture</Link></li>
              <li><Link href="/category/news" className="text-gray-300 hover:text-white">Coffee News</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">Instagram</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Twitter</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Facebook</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brewed Bytes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
