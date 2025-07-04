import { CommonResponse } from "../commonInterface";
import { User } from "../entityInterface/userInterface";
import { Address } from "../entityInterface/addressInterface";
import { Booking } from "../entityInterface/bookingInterface";
import { Provider } from "../entityInterface/providerInterface";
import { Service } from "../entityInterface/appServiceInterface";
import { ProviderService } from "../entityInterface/providerServiceInterface";
import { AvailabilityForResponse } from "../entityInterface/serviceAvailabilityInterface";


// User Fetch profile details api response type
export type UserFetchUserProfileResponse = Pick<User, "username" | "email" | "isBlocked" | "isEmailVerified" | "phone" | "createdAt">;


// User update profile Image api response interface
export interface UpdateUserProfileImageResponse extends CommonResponse, Pick<User, "profileImage"> {
}


// user address adding request payload interface 
export interface AddUserAddressRequest {
    formData: Pick<Address, "addressLine" | "phone" | "place" | "city" | "district" | "pincode" | "state" | "country" | "googleMapLink">
}
// User Fetch address api response type
export type UserFetchUserAddressResponse = Pick<Address, "_id" | "addressLine" | "phone" | "place" | "city" | "district" | "pincode" | "state" | "country" | "googleMapLink">;


// User Fetch service providers response interface
export interface UserFetchServiceProvidersResponse {
    _id: string,
     provider: {
        _id: string,
        username: string,
        profileImage: string | null,
        trustedBySlotflow: boolean,
    },
    service: {
        serviceCategory: string,
        serviceName: string,
        servicePrice: number,
        categoryName: string
    }
}


// User fetch service provider detials api response type
export type UserFetchProviderProfileDetailsResponse = Pick<Provider, "_id" | "username" | "email" | "phone" | "profileImage" | "trustedBySlotflow">;


// User fetch service provider address api response type
export type UserFetchProviderAddressResponse = Pick<Address, "userId" | "addressLine" | "phone" | "place" | "city" | "district" | "pincode" | "state" | "country" | "googleMapLink">;


// User fetch provider service details api response interface
type FetchServiceDetailsProps = Pick<ProviderService, "serviceName" | "serviceDescription" | "servicePrice" | "providerExperience" >;
export interface UserFetchProviderServiceResponse extends FetchServiceDetailsProps {
    serviceCategory: Pick<Service, "serviceName">
}


// User fetch provider service availability api response type
export type UserFetchProviderAvailabilityResponse = AvailabilityForResponse;


// User book an appointment api request payload
export type UserBookAnAppointmentRequest = {
    providerId: Provider["_id"];
    slotId : string;
    date : Date;
    selectedServiceMode : string;
}
// User book an appointment api response interface
export interface UserBookAppointmentResponse extends CommonResponse {
    sessionId : string
}


// User fetch bookings response type
export type UserFetchBookingsResponse = Pick<Booking, "_id" | "appointmentDate" | "appointmentMode" | "appointmentStatus" | "appointmentTime" | "createdAt">;




// user cancel booking response interface
export interface UserCancelBookingResponse extends CommonResponse {
    updatedBooking : Pick<Booking, "_id" | "appointmentDate" | "appointmentMode" | "appointmentStatus" | "appointmentTime" | "createdAt">;
}


// user update user info request payload
export type UserUpdateUserInfoRequest = Pick<User, "username" | "phone">;
// user update user info response interface
export interface UserUpdateUserInfoResponse extends CommonResponse, UserUpdateUserInfoRequest {}