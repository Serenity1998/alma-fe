'use client'

import { useGetProtectedDataMutation } from "@/store/InternalApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedComponent = ({ children }: { children: React.ReactNode }) => {
    const [getData, { data, error, isLoading }] = useGetProtectedDataMutation();
    const [isRedirecting, setIsRedirecting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            await getData();
        };

        fetchData();
    }, [getData]);

    if (isLoading) return <div>Loading...</div>;

    if (error && !isRedirecting) {
        setIsRedirecting(true);
        router.push('/login');
        return <div>Redirecting...</div>;
    }

    if (!data) {
        return <div></div>;
    }

    return <>{children}</>;
};

export default ProtectedComponent;
