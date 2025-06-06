import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { addService } from "@/utils/redux/slices/userSlice";
import CommonButton from "@/components/common/CommonButton";
import { AppDispatch, RootState } from "@/utils/redux/appStore";
import { adminFetchAllServices } from "@/utils/apis/adminService.api";
import DataFetchingError from "@/components/common/DataFetchingError";
import { Service } from "@/utils/interface/entityInterface/appServiceInterface";
import ServiceSelectShimmer from "@/components/shimmers/ServiceSelectShimmer";

type UserSelectService = Pick<Service, "_id" | "serviceName" | "isBlocked">;

const UserServiceSelectPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    const selectedServices = useSelector((state: RootState) => state.user.selectedServices);
    const navigate = useNavigate();

    const { data, isLoading, isError, error } = useQuery({
        queryFn: adminFetchAllServices,
        queryKey: ["services"],
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
    });

    const handleServiceToggle = (serviceId: string) => {
        if (selectedServices.includes(serviceId)) {
            dispatch(addService(selectedServices.filter((id) => id !== serviceId)));
        } else {
            dispatch(addService([...selectedServices, serviceId]));
        }
    };

    const handleSubmitSelectedServices = async () => {
        navigate('/user/dashboard');
    }

    return (
        <div className="px-6 h-screen flex flex-col">
            <h2 className="text-2xl font-semibold mb-10">What are you looking for ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {isError ? (
                    <DataFetchingError message={error.message} />
                ) : isLoading ? (
                    <ServiceSelectShimmer />
                ) : data ? (
                    data.map((service: UserSelectService) => (
                        <div
                            key={service._id}
                            className={`p-3 rounded-md border cursor-pointer text-center ${selectedServices.includes(((service._id)))
                                ? "border-[var(--mainColor)]"
                                : "border-gray-300"
                                }`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleServiceToggle(service._id)
                            }}
                        >
                            {service.serviceName}
                        </div>
                    ))
                ) : (
                    <DataFetchingError message="No services found." />
                )}
            </div>
            {!isLoading && (
                <div className="flex justify-end mt-6">
                    <CommonButton text={"Next"} onClick={handleSubmitSelectedServices} />
                </div>
            )}
        </div>
    );
};

export default UserServiceSelectPage;