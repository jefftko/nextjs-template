'use client'

import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import FeaturesBg01 from '@/public/images/features-home-bg-01.png'
import FeaturesElement01 from '@/public/images/features-home-element-01.png'
import FeaturesElement02 from '@/public/images/features-home-element-02.png'
import FeaturesElement03 from '@/public/images/features-home-element-03.png'
import TopImage from '@/public/images/features-top-image.png'

export default function FeaturesHome() {
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="pointer-events-none absolute inset-0 mb-16 bg-gray-100" aria-hidden="true" />
      <div className="absolute inset-x-0 m-auto h-20 w-px -translate-y-1/2 bg-gray-200 p-px" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="h2 mb-4">How Simple works</h1>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur excepteur sint occaecat cupidatat.
            </p>
          </div>

          {/* Top image */}
          <div className="pb-12 md:pb-16">
            <Image src={TopImage} width={1104} alt="Features top" />
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="mx-auto max-w-xl md:col-span-7 md:mt-6 md:w-full md:max-w-none lg:col-span-6"
              data-aos="fade-right"
            >
              <div className="mb-8 md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <button
                  type="button"
                  className={`mb-3 flex items-center rounded border p-5 text-left text-lg transition duration-300 ease-in-out ${
                    tab !== 1
                      ? 'border-gray-200 bg-white shadow-md hover:shadow-lg'
                      : 'border-transparent bg-gray-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(1)
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Building the Simple ecosystem
                    </div>
                    <div className="text-gray-600">
                      Take collaboration to the next level with security and administrative features
                      built for teams.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </button>
                <button
                  type="button"
                  className={`mb-3 flex items-center rounded border p-5 text-left text-lg transition duration-300 ease-in-out ${
                    tab !== 2
                      ? 'border-gray-200 bg-white shadow-md hover:shadow-lg'
                      : 'border-transparent bg-gray-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(2)
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Building the Simple ecosystem
                    </div>
                    <div className="text-gray-600">
                      Take collaboration to the next level with security and administrative features
                      built for teams.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  type="button"
                  className={`mb-3 flex items-center rounded border p-5 text-left text-lg transition duration-300 ease-in-out ${
                    tab !== 3
                      ? 'border-gray-200 bg-white shadow-md hover:shadow-lg'
                      : 'border-transparent bg-gray-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(3)
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Building the Simple ecosystem
                    </div>
                    <div className="text-gray-600">
                      Take collaboration to the next level with security and administrative features
                      built for teams.
                    </div>
                  </div>
                  <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow">
                    <svg
                      className="h-3 w-3 fill-current"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                        fill="#191919"
                        fillRule="nonzero"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="mx-auto mb-8 max-w-xl md:order-1 md:col-span-5 md:mb-0 md:w-full md:max-w-none lg:col-span-6">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="mx-auto rounded md:max-w-none"
                        src={FeaturesBg01}
                        width={500}
                        height={375}
                        alt="Features bg"
                      />
                      <Image
                        className="animate-float absolute left-0 w-full md:max-w-none"
                        src={FeaturesElement01}
                        width={500}
                        height={147}
                        alt="Element 01"
                        style={{ top: '22%' }}
                      />
                      <Image
                        className="animate-float animation-delay-500 absolute left-0 w-full md:max-w-none"
                        src={FeaturesElement02}
                        width={500}
                        height={158}
                        alt="Element 02"
                        style={{ top: '39%' }}
                      />
                      <Image
                        className="animate-float animation-delay-1000 absolute bottom-0 left-0 w-full md:max-w-none"
                        src={FeaturesElement03}
                        width={500}
                        height={167}
                        alt="Element 03"
                        style={{ top: '77%' }}
                      />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="mx-auto rounded md:max-w-none"
                        src={FeaturesBg01}
                        width={500}
                        height={375}
                        alt="Features bg"
                      />
                      <Image
                        className="animate-float animation-delay-1000 absolute bottom-0 left-0 w-full md:max-w-none"
                        src={FeaturesElement03}
                        width={500}
                        height={167}
                        alt="Element 03"
                        style={{ top: '18%' }}
                      />
                      <Image
                        className="animate-float animation-delay-500 absolute left-0 w-full md:max-w-none"
                        src={FeaturesElement02}
                        width={500}
                        height={158}
                        alt="Element 02"
                        style={{ top: '40%' }}
                      />
                      <Image
                        className="animate-float absolute left-0 w-full md:max-w-none"
                        src={FeaturesElement01}
                        width={500}
                        height={147}
                        alt="Element 01"
                        style={{ top: '79%' }}
                      />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="mx-auto rounded md:max-w-none"
                        src={FeaturesBg01}
                        width={500}
                        height={375}
                        alt="Features bg"
                      />
                      <Image
                        className="animate-float absolute left-0 w-full md:max-w-none"
                        src={FeaturesElement01}
                        width={500}
                        height={147}
                        alt="Element 01"
                        style={{ top: '22%' }}
                      />
                      <Image
                        className="animate-float animation-delay-500 absolute left-0 w-full md:max-w-none"
                        src={FeaturesElement02}
                        width={500}
                        height={158}
                        alt="Element 02"
                        style={{ top: '39%' }}
                      />
                      <Image
                        className="animate-float animation-delay-1000 absolute bottom-0 left-0 w-full md:max-w-none"
                        src={FeaturesElement03}
                        width={500}
                        height={167}
                        alt="Element 03"
                        style={{ top: '77%' }}
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
