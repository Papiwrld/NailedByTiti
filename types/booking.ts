export interface Service {
    id: string;
    name: string;
    priceRange: [number, number];
    description?: string;
    image?: string;
}

export interface AddOn {
    id: string;
    name: string;
    price: number;
    description?: string;
    image?: string;
}

export interface BookingData {
    service: Service | null;
    addOns: AddOn[];
    dateTime: string;
    particulars: string;
    agreedToPolicies: boolean;
}

export interface BookingSummary {
    serviceName: string;
    addOnNames: string[];
    estimatedTotal: number;
    dateTime: string;
    particulars: string;
}
