import axios from "axios";

const mocka = {
  name: "Domain A",
  email: "orion@gmail.com",
  phone: "+65 1234-5678",
  address: "23 Church St #15-03",
};

const mockb = {
  name: "Domain B",
  email: "futuresea@gmail.com",
  phone: "+65 5678-1234",
  address: "122 MIDDLE ROAD, #06-05",
};

export default async (req: any, res: any) => {
  const { currentDomain } = req.body;
  if (currentDomain == "" || !currentDomain) {
    return res.status(400).json({
      error: "Something went wrong.",
    });
  }

  try {
    if (currentDomain == "domaina.com") {
      return res.status(201).json({ data: mocka, error: null });
    } else if (currentDomain == "domainb.com") {
      return res.status(201).json({ data: mockb, error: null });
    }
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong...`,
    });
  }
};
