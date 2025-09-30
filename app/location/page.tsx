import LocationTracker from '@/components/location/LocationTracker';

export default function LocationPage() {
    return (
        <div className="min-h-screen bg-black">
            <div className="p-4">
                <h1 className="font-sora text-white text-[20px] font-bold mb-4">
                    Location Tracking
                </h1>
                <LocationTracker />
            </div>
        </div>
    );
}
