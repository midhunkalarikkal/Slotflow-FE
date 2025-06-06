import { User } from "./entityInterface/userInterface";
import { Plan } from "./entityInterface/planInterface";
import { Payment } from "./entityInterface/paymentInterface";
import { Booking } from "./entityInterface/bookingInterface";
import { Provider } from "./entityInterface/providerInterface";
import { Service } from "./entityInterface/appServiceInterface";
import { Subscription } from "./entityInterface/subscriptionInterface";

// **** Admin Table **** \\

// **** Admin side Providers listing table columns props
export type AdminProvidersTableColumnsProps = Pick<Provider, "_id" | "username" | "email" | "isBlocked" | "isAdminVerified" | "trustedBySlotflow">;

// **** Admin side users listing table columns props
export type AdminUsersTableColumnsProps = Pick<User, "_id" | "username" | "email" | "isBlocked" | "isEmailVerified">;

// **** Admin side app services listing table columns props
export type AdminAppServicesTableColumnsProps = Pick<Service, "_id" | "serviceName" | "isBlocked">;

// **** Admin side plans listing table columns props
export type AdminPlansTableColumnsProps = Pick<Plan , "_id" | "planName" | "isBlocked">;

// **** Admin providers subscriptions listing table columns props
type SubscriptionTableInterfacePropsForAdmin = Pick<Subscription, "_id" | "createdAt" | "providerId" | "startDate" | "endDate" | "subscriptionStatus">;
export interface AdminProvidersSubscriptionsTableColumnsProps extends SubscriptionTableInterfacePropsForAdmin , Partial<Pick<Plan, "planName" | "price">> {};

// **** Admin all payments listing table columns props
export type AdminAllPaymentsTableColumnsProps = Pick<Payment, "createdAt" | "totalAmount" | "paymentFor" | "paymentGateway" | "paymentStatus" | "paymentMethod">;





// **** Provider Table **** \\

// provider subscriptions listing table columns props
type SubscriptionTableInterfacePropsForProvider = Pick<Subscription, "startDate" | "endDate" | "subscriptionStatus">;
export interface ProviderSubscriptionsTableColumnsProps extends SubscriptionTableInterfacePropsForProvider , Partial<Plan> {};

// provider payments listing table columns props
export type ProviderPaymentsTableColumnsProps = Pick<Payment, "createdAt" | "totalAmount" | "paymentFor" | "paymentMethod" | "paymentGateway" | "paymentStatus" | "discountAmount">;

// provider appointments bookinng listing table column props
export type ProviderBookingAppointmentsTableColumnProps = Pick<Booking, "_id" | "appointmentMode" | "appointmentStatus" | "appointmentTime" | "appointmentDate" | "createdAt" >





// **** User Table **** \\

// user bookings listing table column props
export type UserBookingsTableColumnsProps = Pick<Booking, "_id" | "appointmentMode" | "appointmentStatus" | "appointmentTime" | "appointmentDate" | "createdAt" >

// user payments table column props
export type UserPaymentsTableColumnsProps = Pick<Payment, "createdAt" | "totalAmount" | "paymentFor" | "paymentMethod" | "paymentGateway" | "paymentStatus" | "discountAmount">;
