"use client";

import { cancelRendezvous } from "@/actions/business/user-rendezvous";
import React from "react";

export default function CancelButton({
  userId,
  businessId,
  cancelled,
}: {
  userId: string;
  businessId: string;
  cancelled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={async () => {
        alert("CLICKED");
        await cancelRendezvous(userId, businessId);
      }}
      className={`font-medium text-red-600 ${
        cancelled ? "cursor-not-allowed" : "hover:underline"
      }`}
    >
      {cancelled ? "Cancelled" : "Cancel"}
    </button>
  );
}
