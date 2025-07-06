import React from 'react'
import SettingsForm from './_components/settings-form'

const SettingsPage = () => {
  return (
    <div className='p-6'>
        <h1 className='text-2xl font-bold mb-6'>Settings</h1>
        <SettingsForm/>
    </div>
  )
}

export default SettingsPage

export const metadata={
    title: "Settings | Vehiql Admin",
    description: "Manage the dealership working hours and admin users"
}
