"use client";
import React from 'react';
import Background from '@devbutter/paint-background';

// Render the background inside a fixed, bottom-anchored container so
// it stays behind page content. We disable pointer events so it doesn't
// intercept clicks and set aria-hidden since it's decorative.
export default function BackgroundClient() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 bottom-0 z-0 pointer-events-none overflow-hidden"
      style={{ height: '100vh' }}
    >
      <Background />
    </div>
  );
}
