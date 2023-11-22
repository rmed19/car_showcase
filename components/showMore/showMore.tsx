'use client';

import {useRouter} from "next/navigation";
import {ShowMoreProps} from "@/models/ShowMoreProps";
import {updateSearchParams} from "@/utils";
import CustomButton from "@/components/customButton/CustomButton";

const showMore = ({pageNumber, isNext, setLimit}: ShowMoreProps) => {

    const router = useRouter();

    const handleNavigate = () => {
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit);
    }
  return(
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton
                title='Sow More'
                handleClick={handleNavigate}
                btnType='button'
                containerStyles='bg-primary-blue text-white rounded-full'
                          />
        )}
    </div>
  )
}

export default showMore;
