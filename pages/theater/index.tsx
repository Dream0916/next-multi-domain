import Header from "@/components/Header";
import { CustomContainer } from "@/components/CustomContainer";
import { useRouter } from "next/router";

const Theater = () => {
  const router = useRouter();
  const handleLink = (link: string) => {
    router.push(link);
  };
  return (
    <div>
      <div className="bg-[#1a1a1a] border-b border-[#ffffff42]">
        <Header />
      </div>
      <CustomContainer>
        <ul role="list" className="divide-y divide-black-100">
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  Deutsches Theater
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  Berlin
                </p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <button
                type="button"
                onClick={() => handleLink("/theater/1")}
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Book
              </button>
            </div>
          </li>
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  Leslie Alexander
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  leslie.alexander@example.com
                </p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <button
                type="button"
                onClick={() => handleLink("/theater/2")}
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Book
              </button>
            </div>
          </li>
        </ul>
      </CustomContainer>
    </div>
  );
};

export default Theater;
