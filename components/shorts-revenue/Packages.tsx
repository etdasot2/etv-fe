'use client';
import React, { useState, useEffect } from 'react'; 
import { fetchPackagesAndPurchasedShorts } from '@/lib/api'; // Import the new API function
import PackageCard from './PackageCard';
import UserPackageCard from './UserPackageCard'; // Import the UserPackageCard component
import DefaultLoading from '../loaders/DefaultLoading';
import { useLoading } from '@/context/LoadingContext';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */


export default function PackagesShorts() {
    
    const [packages, setPackages] = useState<any[]>([]); // State to store all available packages
    const [purchasedPackages, setPurchasedPackages] = useState<any[]>([]); // State to store the user's purchased packages
  
    const [isLoading, setIsLoading] = useState(false);
    const { setGlobalLoading } = useLoading();
    


    // Fetch packages and purchased packages on component mount
    useEffect(() => {
        const loadPackages = async () => {
            setGlobalLoading(true);
            setIsLoading(true);
            try {
                const { allPackages, purchasedPackages } = await fetchPackagesAndPurchasedShorts(); // Call the API to fetch packages and purchased packages
                setPackages(allPackages);
                setPurchasedPackages(purchasedPackages); // Store purchased packages with purchaseId
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching packages:', err);
                // setError('Failed to load packages');
            } finally {
                setGlobalLoading(false);
            }
        };

        loadPackages();
    }, []);

    // Helper function to check if a package is purchased and return purchaseId
    const getPurchasedPackage = (packageId: string) => {
        return purchasedPackages.find((p) => p.package._id === packageId);
    };

    return (
        <>

            <div className="space-y-4">
                {packages.map((pkg) => {
                    const purchasedPackage = getPurchasedPackage(pkg._id);
                    return purchasedPackage ? (
                        // Pass the purchaseId and package details to UserPackageCard
                        <UserPackageCard key={pkg._id} pkg={pkg} purchasePackage={purchasedPackage} />
                    ) : (
                        <PackageCard key={pkg._id} pkg={pkg} />
                    );
                })}
            </div>
 
        </>
    );
}
