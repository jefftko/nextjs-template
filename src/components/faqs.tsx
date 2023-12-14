import Accordion from '@/components/utils/accordion'

export default function Faqs() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-gray-200 py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-20 text-center">
            <h2 className="h2">Questions & Answers</h2>
          </div>

          {/* Faqs */}
          <ul className="mx-auto max-w-3xl pl-12">
            <Accordion title="Do I need coding knowledge to use this product?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion>
            <Accordion title="Do you have student or non-profit discounts?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion>
            <Accordion title="Is there a way to become an Affiliate reseller of this product?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion>
            <Accordion title="What is the difference between the Free and Paid versions?" active>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion>
            <Accordion title="How can I change the owner of a workspace?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion>
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul>
        </div>
      </div>
    </section>
  )
}
