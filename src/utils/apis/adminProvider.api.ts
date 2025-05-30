import axiosInstance from "@/lib/axios";
import {
    AdminApproveProviderApiResponse,
    AdminFetchAllProvidersApiResponse,
    AdminFetchProviderAddressApiResponse,
    AdminFetchProviderServiceApiResponse,
    AdminFetchProviderPaymentsApiResponse,
    AdminChangeProviderTrustTagApiResponse,
    AdminFetchProviderAvailabilityApiResponse,
    AdminChangeProviderBlockStatusApiResponse,
    AdminFetchProviderSubscriptionsApiResponse,
    AdminFetchProviderProfileDetailsApiResponse,
    AdminChangeProviderTrustTagApiRequestPayload,
    AdminChangeProviderBlockStatusApiRequestPayload,
    AdminFetchProviderAvailabilityApiRequestPayload,
} from "../interface/api/adminProviderApiInterface";
import { Provider } from "../interface/entityInterface/providerInterface";


export const adminFetchAllProviders = async (): Promise<Array<AdminFetchAllProvidersApiResponse>> => {
    const response = await axiosInstance.get("/admin/providers");
    return response.data.providers;
};

export const adminApproveProvider = async (data : {providerId : Provider["_id"]}): Promise<AdminApproveProviderApiResponse> => {
    const response = await axiosInstance.put(`/admin/approveProvider`, {data});
    return response.data;
}

export const adminChangeProviderBlockStatus = async (data: AdminChangeProviderBlockStatusApiRequestPayload): Promise<AdminChangeProviderBlockStatusApiResponse> => {
    const response = await axiosInstance.put(`/admin/changeProviderStatus`, data);
    return response.data;
}

export const adminChangeProviderTrustTag = async (data: AdminChangeProviderTrustTagApiRequestPayload): Promise<AdminChangeProviderTrustTagApiResponse> => {
    const response = await axiosInstance.post(`/admin/changeProvidertrustedTag`, data);
    return response.data;
}

export const adminFetchProviderProfileDetails = async (providerId: Provider["_id"]): Promise<AdminFetchProviderProfileDetailsApiResponse> => {
    const response = await axiosInstance.get(`/admin/fetchProviderDetails/${providerId}`);
    return response.data.provider;
}

export const adminFetchProviderAddress = async (providerId: Provider["_id"]): Promise<AdminFetchProviderAddressApiResponse> => {
    const response = await axiosInstance.get(`/admin/fetchProviderAddress/${providerId}`);
    return response.data.address;
}

export const adminFetchProviderService = async (providerId: Provider["_id"]): Promise<AdminFetchProviderServiceApiResponse> => {
    const response = await axiosInstance.get(`/admin/fetchProviderService/${providerId}`);
    return response.data.service;
}

export const adminFetchProviderServiceAvailability = async ({date, providerId}: AdminFetchProviderAvailabilityApiRequestPayload): Promise<AdminFetchProviderAvailabilityApiResponse> => {
    const response = await axiosInstance.get(`/admin/fetchProviderServiceAvailability/${providerId}`, {
        params : {
            date : date.toISOString()
        }
    });
    return response.data.availabilities;
}

export const adminFetchProviderSubscriptions = async (providerId: Provider["_id"]) : Promise<Array<AdminFetchProviderSubscriptionsApiResponse>> => {
    const response = await axiosInstance.get(`/admin/fetchProviderSubscriptions/${providerId}`);
    return response.data.subscriptions;
}

export const adminFetchProviderPayments = async (providerId: Provider["_id"]): Promise<Array<AdminFetchProviderPaymentsApiResponse>> => {
    const response = await axiosInstance.get(`/admin/fetchProviderPayments/${providerId}`);
    return response.data.payments;
}

