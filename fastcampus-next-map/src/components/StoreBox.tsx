import { StoreType } from "@/types";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import {
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineCheck,
  AiOutlinePhone,
} from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";

interface StoreBoxProps {
  store: StoreType;
  setCurrentStore: Dispatch<SetStateAction<any>>;
}

const StoreBox = ({ store, setCurrentStore }: StoreBoxProps) => {
  return (
    <div className="fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded-lg shadow-lg max-w-sm md:max-w-xl z-10 p-3 w-full bg-white">
      {store && (
        <>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div className="flex gap-4 items-center">
                <Image
                  src={
                    store?.category
                      ? `/images/markers/${store?.category}.png`
                      : `/images/markers/default.png`
                  }
                  width={30}
                  height={30}
                  alt="아이콘 이미지"
                />
                <div className="font-semibold">{store?.name}</div>
                <div className="">{store?.storeType}</div>
              </div>
              <button type="button" onClick={() => setCurrentStore(null)}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <HiOutlineMapPin />
              {store?.address}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlinePhone />
              {store?.phone}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlineInfoCircle />
              {store?.storeType}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlineCheck />
              {store?.category}
            </div>
          </div>
          <button
            type="button"
            className="w-full bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 py-3 text-white font-semibold rounded-md"
            onClick={() => {
              window.alert("상세보기로 이동");
            }}
          >
            상세보기
          </button>
        </>
      )}
    </div>
  );
};

export default StoreBox;
