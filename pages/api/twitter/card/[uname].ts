import { CardImage } from "@twitter/card/image";

import { base } from "@lib/components/base";
import { convert } from "@lib/components/convert";

import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";

type Query = {
  [p: string]: string | string[] | undefined;
  bg?: string;
  text?: string;
  desc?: string;
  accent?: string;
  stats?: string;
  stats_text?: string;
  theme?: string;
  icon?: string;
  rounded?: string;
  type?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise(async (resolve, reject) => {
    const query = req.query as Query,
      uname = req.query.uname;

    axios
      .get(
        `https://api.twitter.com/2/users/by/username/${uname}?user.fields=description,url,location,created_at,profile_image_url,public_metrics,verified,protected&expansions=pinned_tweet_id&tweet.fields=created_at,public_metrics`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
          },
        }
      )
      .then(async (r: AxiosResponse) => {
        res.status(200);
        res.send(
          query.type?.toLowerCase() === "base64"
            ? { data: await base(await CardImage(r.data, query)) }
            : query.type?.toLowerCase() === "png"
            ? await convert(await CardImage(r.data, query), 955, 470)
            : await CardImage(r.data, query)
        );
        return resolve("Created Image!");
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.send({ error: "Sorry, that user doesn't exist." });
        return reject(err);
      });

    query.type?.toLowerCase() !== "base64"
      ? res.setHeader(
          "Content-Type",
          `image/${
            query.type?.toLowerCase() === "png" ? "png" : "svg+xml"
          }; charset=utf-8`
        )
      : null;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader(
      "content-security-policy",
      "default-src 'none'; img-src * data:; style-src 'unsafe-inline'"
    );
  });
}
