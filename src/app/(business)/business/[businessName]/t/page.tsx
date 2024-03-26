import TimeModal from '@/components/business-page/time-modal'
import React from 'react'

export default function RendezvousTimePage({
  searchParams,
}: {
  searchParams: { date: string };
}) {
  const { date } = searchParams;
  const d = new Date(date)
  return (
    <>
      <TimeModal date={d.toString()} />
    </>
  )
}
