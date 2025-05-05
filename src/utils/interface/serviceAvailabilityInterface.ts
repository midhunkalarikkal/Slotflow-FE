// **** Provider service availability interface **** \\
// 1. Provider service availability interface used in the AdminProviderServiceAvailability compoenent
export interface Availability {
    day: string;
    duration: string;
    startTime: string;
    endTime: string;
    modes: string[];
    slots: string[];
}

// *** Availability Slot interface **** \\
// Provider service availability slot interface that is coming from the server with updation, used in AdminProviderServiceAvailability component
export interface Slot {
    time: string;
    _id: string;
    available: boolean;
}

//  Availability interface for the response
export interface AvailabilityForResponse extends Omit<Availability, "slots"> {
    slots: Slot[];
}

// Service availability interface
export interface ServiceAvailability {
    _id: string;
    providerId: string;
    availabilities: AvailabilityForResponse[]
    createdAt: string;
    updatedAt: string;
}