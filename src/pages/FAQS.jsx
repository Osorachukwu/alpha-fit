import React from 'react'
import AltHero from '../components/AltHero'

export default function FAQS() {
  let faqContents = [1, 2, 3, 4, 5, 6]
  return (
    <div>
      <AltHero heroTitle="FAQ" subTitle="Get answers to commom questions about our services" />
      <div className='container px-4 mx-auto py-10'>
        <div className='grid gap-4 sm:grid-cols-2'>
          {
            faqContents.map((faq, i) => (
              <div key={i} className="collapse collapse-arrow text-gray-500 border">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
