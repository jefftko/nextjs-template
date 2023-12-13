'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import Dropdown from '@/components/utils/dropdown'

import Logo from './logo'
import MobileMenu from './mobile-menu'

export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    if (window.pageYOffset > 10) {
      setTop(false)
    } else {
      setTop(true)
    }
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out ${
        !top ? 'bg-white shadow-lg backdrop-blur-sm md:bg-white/90' : ''
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <Link
                  href="/pricing"
                  className="flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center px-3 py-2 text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 lg:px-5"
                >
                  Blog
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Resources">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/documentation"
                    className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                  >
                    Support center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="flex px-5 py-2 text-sm font-medium leading-tight text-gray-600 hover:text-gray-900"
                  >
                    404
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <Link
                  href="/signin"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm ml-3 bg-gray-900 text-gray-200 hover:bg-gray-800"
                >
                  <span>Sign up</span>
                  <svg
                    className="-mr-1 ml-2 h-3 w-3 shrink-0 fill-current text-gray-400"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
