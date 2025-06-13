'use client';

import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#f0f8ff]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
         <h1 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Dashboard</h1>
         <p className="mb-4 text-[#555]">Welcome to your Health Science Subscription Dashboard.</p>
         <p className="mb-4 text-[#555]">Here you can manage your subscription, view premium content, and update your profile.</p>
         <Link href="/auth/login" className="inline-block px-4 py-2 bg-[#4a90e2] text-white rounded hover:bg-[#3a80d2] transition-colors">
            Logout
         </Link>
      </div>
    </main>
  );
} 