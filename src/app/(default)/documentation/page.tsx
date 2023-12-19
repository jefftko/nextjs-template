import Content from './content'
import Sidebar from './nav-sidebar'

export const metadata = {
  title: 'Documentation - Simple',
  description: 'Page description',
}

export default function Documentation() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Main content */}
          <div className="md:flex md:justify-between">
            {/* Sidebar */}
            <Sidebar />

            {/* Page container */}
            <Content />
          </div>
        </div>
      </div>
    </section>
  )
}
