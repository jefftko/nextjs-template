'use client'

import { useState } from 'react'

export default function PricingTables() {
  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <section className="bg-gradient-to-b from-white to-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h1 className="h1 mb-4" data-aos="zoom-y-out">
              Start for free. Pay as you grow. Switch at any time.
            </h1>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">
              No matter how many team members you have - our pricing is simple, transparent and
              adapts to the size of your company.
            </p>
          </div>

          {/* Pricing tables */}
          <div>
            {/* Pricing toggle */}
            <div
              className="m-auto mb-16 flex max-w-xs justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div className="relative mx-6 flex w-full rounded bg-gray-200 p-1">
                <span className="pointer-events-none absolute inset-0 m-1" aria-hidden="true">
                  <span
                    className={`absolute inset-0 w-1/2 rounded bg-white shadow transition duration-150 ease-in-out${
                      annual ? 'translate-x-0' : 'translate-x-full'
                    }`}
                  />
                </span>
                <button
                  type="button"
                  className={`relative flex-1 p-1 text-sm font-medium transition duration-150 ease-in-out ${
                    !annual && 'text-gray-500'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setAnnual(true)
                  }}
                >
                  Bill Yearly <span className="text-green-500">-20%</span>
                </button>
                <button
                  type="button"
                  className={`relative flex-1 p-1 text-sm font-medium transition duration-150 ease-in-out ${
                    annual && 'text-gray-500'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setAnnual(false)
                  }}
                >
                  Bill Monthly
                </button>
              </div>
            </div>

            <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 xl:max-w-none xl:grid-cols-4 xl:gap-6">
              {/* Pricing table 1 */}
              <div
                className="relative flex h-full flex-col rounded bg-white px-6 py-5 shadow-xl"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="mb-4">
                  <div className="mb-1 text-lg font-bold">Starter</div>
                  <div className="mb-2 inline-flex items-baseline">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-4xl font-bold">0</span>
                    <span className="pl-2 text-gray-600">/month</span>
                  </div>
                  <div className="text-lg text-gray-800">
                    For larger teams that need to create, and collaborate.
                  </div>
                </div>
                <ul className="-mb-2 grow text-gray-600">
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited viewers</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 3 members</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 2 projects</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="mt-6 border-t border-gray-200 pt-5">
                  <a className="btn-sm w-full bg-blue-600 text-white hover:bg-blue-700" href="#0">
                    Try for free
                  </a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div
                className="relative flex h-full flex-col rounded border-2 border-blue-500 bg-blue-100 px-6 py-5 shadow-xl"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="absolute right-0 top-0 -mt-5 mr-5 rounded-full bg-yellow-500 p-3">
                  <svg
                    className="h-4 w-4 fill-current text-white"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.145 5.05l-4.316-.627L8.898.513c-.338-.684-1.456-.684-1.794 0l-1.93 3.91-4.317.627a1.002 1.002 0 00-.554 1.707l3.124 3.044-.737 4.3a1 1 0 001.45 1.053L8 13.125l3.862 2.03c.728.381 1.59-.234 1.45-1.054l-.736-4.299L15.7 6.758a1.003 1.003 0 00-.555-1.708z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <div className="mb-1 text-lg font-bold">Agency</div>
                  <div className="mb-2 inline-flex items-baseline">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-4xl font-bold">{annual ? '24' : '34'}</span>
                    <span className="pl-2 text-gray-600">/month</span>
                  </div>
                  <div className="text-lg text-gray-800">
                    For larger teams that need to create, and collaborate.
                  </div>
                </div>
                <ul className="-mb-2 grow text-gray-600">
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited viewers</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 3 members</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 2 projects</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="mt-6 border-t border-gray-200 pt-5">
                  <a className="btn-sm w-full bg-blue-600 text-white hover:bg-blue-700" href="#0">
                    Start free trial
                  </a>
                </div>
              </div>

              {/* Pricing table 3 */}
              <div
                className="relative flex h-full flex-col rounded bg-white px-6 py-5 shadow-xl"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="mb-4">
                  <div className="mb-1 text-lg font-bold">Premium</div>
                  <div className="mb-2 inline-flex items-baseline">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-4xl font-bold">{annual ? '49' : '59'}</span>
                    <span className="pl-2 text-gray-600">/month</span>
                  </div>
                  <div className="text-lg text-gray-800">
                    For larger teams that need to create, and collaborate.
                  </div>
                </div>
                <ul className="-mb-2 grow text-gray-600">
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited viewers</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 3 members</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 2 projects</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="mt-6 border-t border-gray-200 pt-5">
                  <a className="btn-sm w-full bg-blue-600 text-white hover:bg-blue-700" href="#0">
                    Start free trial
                  </a>
                </div>
              </div>

              {/* Pricing table 4 */}
              <div
                className="relative flex h-full flex-col rounded bg-white px-6 py-5 shadow-xl"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="mb-4">
                  <div className="mb-1 text-lg font-bold">Enterprise</div>
                  <div className="mb-2 inline-flex items-baseline">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-4xl font-bold">{annual ? '99' : '109'}</span>
                    <span className="pl-2 text-gray-600">/month</span>
                  </div>
                  <div className="text-lg text-gray-800">
                    For larger teams that need to create, and collaborate.
                  </div>
                </div>
                <ul className="-mb-2 grow text-gray-600">
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Unlimited viewers</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 3 members</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Up to 2 projects</span>
                  </li>
                  <li className="mb-2 flex items-center">
                    <svg
                      className="mr-3 h-3 w-3 shrink-0 fill-current text-green-500"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="mt-6 border-t border-gray-200 pt-5">
                  <a className="btn-sm w-full bg-blue-600 text-white hover:bg-blue-700" href="#0">
                    Start free trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
