'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PatientDashboard() {
    const router = useRouter();
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        // Get stored user data
        const storedUserData = localStorage.getItem('userData');
        if (!storedUserData) {
            router.push('/auth/login');
            return;
        }

        const data = JSON.parse(storedUserData);
        if (data.role !== 'patient') {
            router.push('/auth/login');
            return;
        }

        setUserData(data);
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('userData');
        router.push('/auth/login');
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#f0f8ff]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-[#1a1a1a]">Patient Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                        Logout
                    </button>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Welcome, {userData.name}!</h2>
                    <p className="text-[#555]">This is your patient dashboard where you can manage your health subscriptions and view your medical records.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-[#ccc] rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Your Subscriptions</h3>
                        <p className="text-[#555]">View and manage your active health subscriptions.</p>
                        <button className="mt-4 px-4 py-2 bg-[#4a90e2] text-white rounded hover:bg-[#3a80d2] transition-colors">
                            View Subscriptions
                        </button>
                    </div>
                    <div className="p-6 border border-[#ccc] rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Medical Records</h3>
                        <p className="text-[#555]">Access your medical history and test results.</p>
                        <button className="mt-4 px-4 py-2 bg-[#4a90e2] text-white rounded hover:bg-[#3a80d2] transition-colors">
                            View Records
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
} 