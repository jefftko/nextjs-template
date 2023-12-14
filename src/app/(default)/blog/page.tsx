import { allPosts } from 'contentlayer/generated'

import PostItem from '@/components/post-item'

import PopularPosts from './popular-posts'
import Topics from './topics'

export const metadata = {
  title: 'Blog - Simple',
  description: 'Page description',
}

export default function Blog() {
  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
  })

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <div className="max-w-3xl pb-12 text-center md:pb-20 md:text-left">
            <h1 className="h1 mb-4">Type the way you talk</h1>
            <p className="text-xl text-gray-600">
              Stay up to date on the latest from Simple and best news from the Dev world.
            </p>
          </div>

          {/* Main content */}
          <div className="md:flex md:justify-between">
            {/* Articles container */}
            <div className="-mt-4 md:grow">
              {allPosts.map((post, postIndex) => (
                <PostItem key={postIndex} {...post} />
              ))}
            </div>

            {/* Sidebar */}
            <aside className="relative mt-12 md:ml-12 md:mt-0 md:w-64 md:shrink-0 lg:ml-20">
              <PopularPosts />
              <Topics />
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
