'use client'
import React, { Suspense } from 'react';
import BottomBar from '@/components/bottomBar';
import ReelsList from '@/components/reels/ReelsList';
export default function AllReels() {

  return (
    <div className="h-screen w-full bg-black flex flex-col relative">
      <Suspense>
        <ReelsList />
      </Suspense>
      <BottomBar
        activeRoute='/shorts-revenue'
        noRoundedTop={true}
        isReels={true}
      />

    </div>
  );
}
