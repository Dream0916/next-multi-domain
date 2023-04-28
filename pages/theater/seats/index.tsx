import Header from "@/components/Header";
import { CustomContainer } from "@/components/CustomContainer";
import { useRouter } from "next/router";
import SeatElement from "@/components/Seats";

interface SeatsProps {
  id: string;
  price: number;
  taken: boolean;
  visiable: boolean;
}

const Seats = () => {
  const router = useRouter();
  const theaterId = router.query.theater_id;
  const ColNumber = 3;
  const RowNumber = 5;
  const mockData = [
    {
      id: "1-1",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "1-2",
      price: 10,
      taken: false,
      visiable: false,
    },
    {
      id: "1-3",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "1-4",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "1-5",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "2-1",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "2-2",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "2-3",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "2-4",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "2-5",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "3-1",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "3-2",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "3-3",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "3-4",
      price: 10,
      taken: false,
      visiable: true,
    },
    {
      id: "3-5",
      price: 10,
      taken: false,
      visiable: true,
    },
  ];

  let showSeatsData: any = [];

  for (let indexCol = 1; indexCol <= ColNumber; indexCol++) {
    const tmp_arr: SeatsProps[] = [];
    for (let indexRow = 1; indexRow <= RowNumber; indexRow++) {
      mockData.forEach((data) => {
        if (data.id === `${indexCol}-${indexRow}`) {
          tmp_arr.push(data);
        }
      });
    }
    showSeatsData.push(tmp_arr);
  }

  return (
    <div>
      <div className="bg-[#1a1a1a] border-b border-[#ffffff42]">
        <Header />
      </div>
      <CustomContainer>
        <div>
          {showSeatsData.map((rows: any, indexRows: number) => (
            <div className="flex justify-center" key={indexRows}>
              {rows.map((row: any, indexRow: number) => (
                <SeatElement
                  taken={row.taken}
                  text={row.id}
                  visiable={row.visiable}
                  key={indexRow}
                />
              ))}
            </div>
          ))}
        </div>
      </CustomContainer>
    </div>
  );
};

export default Seats;
