import { Service } from "../entityInterface/appServiceInterface";

export type BasicAppServiceInfo = Pick<Service, "_id" | "serviceName" | "isBlocked">;

// **** 1.  Used as the response type for the admin fetch all app services api
export type AdminFetchAllServicesResponse = BasicAppServiceInfo;


// **** 2.  Inline interface used for the adminAddNewService api


// **** 3.  Used as the request type for the admin change app service block status api
export type AdminChangeServiceBlockStatusRequest = {
    serviceId: Service["_id"];
    isBlocked: Service["isBlocked"];
}
