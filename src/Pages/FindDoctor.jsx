import React from 'react'

function FindDoctor() {
  return (
    <div>
        <div className='mt-16 font-serif flex text-center justify-between font-semibold text-stone-700 text-5xl subpixel-antialiased tracking-normal p-16 ml-96'>
        <p>
        Connect with Trusted <br/> Healthcare Professionals
        </p>
      </div>
        

<div
  className="h-36 flex flex-col rounded-lg bg-amber-50 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-1xl md:flex-row mt-2 ml-40 mr-36">
  <img
    className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxes7NR06YGIhJVT9sFvLIM3Bwno3uqgvahg&s"
    alt="" />
  <div className="flex flex-col justify-start p-3">
    <h5 className="mb-0.5 text-xl font-semibold font-medium">Dr. Edward Dunlop</h5>
    <p className="text-xs text-surface/75 dark:text-neutral-300">
      (Australian Senior Research Biologist)
    </p>
    <p className="mb-2 mt-2 text-base">
      Dr. Edward followed a Ph.D. from the university of Queensland and over 50 published articles. Edward Dunlop at University of Melbourne.
    </p>
    <p className='font-semibold'>Contact: +614 1234 5679</p>
    <p></p>
  </div>
</div>

    </div>
  )
}

export default FindDoctor
