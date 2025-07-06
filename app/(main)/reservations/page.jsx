import { getUserTestDrives } from '@/actions/test-drive';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'
import ReservationsList from './_components/reservations-list';

const ReservationsPage = async() => {

    // Check authentication on server
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect=/reservations");
  }

  // Fetch reservations on the server
  const reservationsResult = await getUserTestDrives();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl mb-6 font-bold">Your Reservations</h1>
      <ReservationsList initialData={reservationsResult} />
    </div>
  )
}

export default ReservationsPage

export const metadata = {
  title: "My Reservations | Vehiql",
  description: "Manage your test drive reservations",
};