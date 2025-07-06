import { getSavedCars } from '@/actions/car-lisitng'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'
import SavedCarsList from './_components/saved-cars-list'

const SavedCarsPage = async() => {
    const {userId}= await auth()
    if(!userId){
        redirect("/sign-in?redirect=/saved-cars")
    }

    //fetch the saved cars
    const savedCarsResult=await getSavedCars()
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-5xl mb-6 font-extrabold'>Your Saved Cars</h1>
      <SavedCarsList initialData={savedCarsResult}/>
    </div>
  )
}

export default SavedCarsPage
