import React from 'react'
import TestDriveForm from './_components/test-drive-form'
import { getCarById } from '@/actions/car-lisitng';
import { notFound } from 'next/navigation';

const TestDrivePage = async({params}) => {
    // Fetch car details
  const { id } = params;
  const result = await getCarById(id);

  // If car not found, show 404
  if (!result.success) {
    notFound();
  }
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className="text-5xl mb-6 font-extrabold">Book a Test Drive</h1>
      <TestDriveForm car={result.data}
        testDriveInfo={result.data.testDriveInfo}/>
    </div>
  )
}

export default TestDrivePage

export async function generateMetadata(){
    return{
        title: `Book Test Drive | Vehiql`,
        description: ` Schedule a test drive in few days`
    }
}