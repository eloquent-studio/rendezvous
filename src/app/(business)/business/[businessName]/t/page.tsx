import TimeModal from "@/components/business-page/time-modal";
import React from "react";

export default function RendezvousTimePage({
  searchParams,
  params,
}: {
  searchParams: { date: string };
  params: any;
}) {
  const { date } = searchParams;
  const businessName = params.businessName;
  const d = new Date(date);
  return (
    <>
      <TimeModal date={d.toString()} businessName={businessName} />
    </>
  );
}
