'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3001/health");
        const data = await res.json();
        setMessage(data.status);
      } catch (err) {
        console.error("Error fetching backend message:", err);
        setMessage("(Backend not available)");
      }
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#f0f8ff]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <Image src="/favicon.ico" alt="Health Science Logo" width={100} height={100} className="mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4 text-[#1a1a1a]">Health Science Subscription System</h1>
        <p className="mb-4 text-[#555]">Backend status: {message}</p>
        <h2 className="text-xl font-semibold mb-2 text-[#1a1a1a]">Welcome to our Health Science Subscription System</h2>
        <p className="mb-4 text-center text-[#555]">Your one-stop platform for premium health science content.</p>
        <Link href="/auth/login" className="inline-block px-4 py-2 bg-[#4a90e2] text-white rounded hover:bg-[#3a80d2] transition-colors">
          Get Started
        </Link>
      </div>
    </main>
  );
}
