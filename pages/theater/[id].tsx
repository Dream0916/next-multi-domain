import Header from "@/components/Header";
import { CustomContainer } from "@/components/CustomContainer";
import { useRouter } from "next/router";

interface Props {
  data: string;
}

function MoviesList(props: Props) {
  const router = useRouter();

  //getting the slug parameter from the URL
  const { id } = router.query;

  const handleLink = () => {
    router.push({
      pathname: "/theater/seats",
      query: { theater_id: id },
    });
  };

  return (
    <div>
      <div className="bg-[#1a1a1a] border-b border-[#ffffff42]">
        <Header />
      </div>
      <CustomContainer>
        <ul role="list" className="divide-y divide-black-100">
          <li className="flex justify-start gap-x-6 py-5">
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  Ponniyin Selvan 2 (U) - Tamil
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  U/A
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mx-2 cursor-pointer" onClick={() => handleLink()}>
                12:30 PM
              </div>
              <div className="mx-2 cursor-pointer" onClick={() => handleLink()}>
                15:30 PM
              </div>
              <div className="mx-2 cursor-pointer" onClick={() => handleLink()}>
                17:30 PM
              </div>
            </div>
          </li>
          <li className="flex justify-start gap-x-6 py-5">
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  Ponniyin Selvan 2 (U/A) - Tamil
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  U/A
                </p>
              </div>
            </div>
            <div>
              <div className="mx-2 cursor-pointer" onClick={() => handleLink()}>
                12:30 PM
              </div>
            </div>
          </li>
        </ul>
      </CustomContainer>
    </div>
  );
}

export async function getServerSideProps(
  context: any
): Promise<{ props: Props }> {
  const { params } = context;
  console.log(params);

  return {
    props: {
      data: "123123",
    },
  };
}

export default MoviesList;
