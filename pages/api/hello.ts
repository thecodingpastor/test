// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("NODE_ENV =====> ", process.env.NODE_ENV);
  console.log("TEST_ENV =====> ", process.env.TEST_ENV);
  console.log("TWITCH_CLIENT_ID =====> ", process.env.TWITCH_CLIENT_ID);

  res.status(200).json({ name: "John Doe" });
}
