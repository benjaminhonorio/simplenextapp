// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  age: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query;

  const names = { benja: 28, alex: 22, leo: 17 };

  if (name && typeof name !== "object") {
    const found = names[name as keyof typeof names];
    return res.status(200).json({ age: found });
  }

  res.status(200).json({ age: 0 });
}
