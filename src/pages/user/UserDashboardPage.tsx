import { useEffect } from 'react';
import { Loader } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import CommonButton from '@/components/common/CommonButton';
import { AppDispatch, RootState } from '@/utils/redux/appStore';
import { userSearchServiceProviders } from '@/utils/apis/user.api';
import DataFetchingError from '@/components/common/DataFetchingError';
import { toggleFilterSideBar } from '@/utils/redux/slices/stateSlice';
import UserViewProviderCard from '@/components/user/UserViewProviderCard';

const UserDashboardPage = () => {

  const dispatch = useDispatch<AppDispatch>();
  const selectedServices = useSelector((store: RootState) => store.user.selectedServices);

  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => userSearchServiceProviders(selectedServices),
    queryKey: ['providers'],
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {

  }, [selectedServices]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black/70 z-50">
        <Loader className="w-10 h-10 animate-spin text-white" />
      </div>
    );
  }

  if (isError && error) {
    return <DataFetchingError message={(error as Error).message || "Something went wrong"} />;
  }

  if (data?.length === 0) {
    return <DataFetchingError message={"There is no providers found in the databse"} />;
  }

  return (
    <div className='p-2'>
      <div className='flex justify-between'>
        <div className="relative w-full max-w-md">
          <Input type="text" placeholder="Search..." className="pl-8" />
        </div>
        <CommonButton text='Filters' onClick={() => dispatch(toggleFilterSideBar())} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 my-4">
        {data?.map((provider, index) => (
          <UserViewProviderCard key={index} {...provider} />
        ))}
      </div>
    </div>
  );
};

export default UserDashboardPage;
