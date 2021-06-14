import * as React from "react";
import numeral from "numeral";

import useAPI from "@lib/assets/useAPI";
import { themes } from "@themes";
import { ThemesTypes } from "@lib/types/ThemesTypes";

export const UserImage = (props: {
  username: string | null;
  type: string;
  bg: string | null;
  text: string | null;
  description: string | null;
  stats: string | null;
  statsText: string | null;
  theme: string | null;
  icon: string | null;
  rounded: boolean | null;
  children: React.ReactNode;
}) => {
  const { data }: { data: any } = useAPI(props.type, props.username);
  const defaultThemes: ThemesTypes = themes;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={940}
      height={460}
      fill="none"
      viewBox="0 0 1920 940"
      style={{ borderRadius: props.rounded ? "20px" : "0" }}
    >
      <path
        fill={
          !props.theme
            ? props.bg
              ? `#${props.bg}`
              : "#fff"
            : defaultThemes[props.theme].bg
        }
        d="M0 0h1920v940H0z"
      />
      <path
        fill={
          !props.theme
            ? props.icon
              ? `#${props.icon}`
              : "#C4C4C4"
            : defaultThemes[props.theme].icon
        }
        fillRule="evenodd"
        d="M80.5 65C66.411 65 55 76.188 55 90c0 11.062 7.3 20.406 17.436 23.719 1.275.219 1.753-.531 1.753-1.188 0-.593-.032-2.562-.032-4.656-6.407 1.156-8.064-1.531-8.575-2.937-.286-.719-1.53-2.938-2.613-3.532-.893-.468-2.168-1.625-.032-1.656 2.008-.031 3.442 1.812 3.92 2.562 2.296 3.782 5.961 2.719 7.427 2.063.223-1.625.893-2.719 1.626-3.344-5.674-.625-11.602-2.781-11.602-12.344 0-2.718.988-4.968 2.613-6.718-.255-.625-1.147-3.188.255-6.625 0 0 2.136-.656 7.013 2.562a24.111 24.111 0 016.375-.844c2.167 0 4.335.282 6.375.844 4.877-3.25 7.012-2.562 7.012-2.562 1.403 3.437.51 6 .255 6.625 1.626 1.75 2.614 3.969 2.614 6.719 0 9.593-5.96 11.718-11.634 12.343.924.781 1.72 2.281 1.72 4.625 0 3.344-.031 6.032-.031 6.875 0 .657.478 1.438 1.753 1.188 5.062-1.676 9.461-4.865 12.577-9.12A24.703 24.703 0 00106 90c0-13.813-11.411-25-25.5-25z"
        clipRule="evenodd"
      />
      <text
        fill={
          !props.theme
            ? props.text
              ? `#${props.text}`
              : "#000"
            : defaultThemes[props.theme].text
        }
        x={83}
        y={350}
        fontSize={36}
        fontWeight="bold"
        transform="rotate(-90 100 355)"
      >
        {!data ? null : data.login}
      </text>
      <clipPath id="prefix__a">
        <rect width={273} height={306} x={143} y={82} rx={31} />
      </clipPath>
      <text
        fill={
          !props.theme
            ? props.text
              ? `#${props.text}`
              : "#000"
            : defaultThemes[props.theme].text
        }
        x={440}
        y={200}
        fontSize={72}
        fontWeight="bold"
      >
        {!data ? null : data.name}
      </text>
      {!data ? null : (
        <>
          {data.bio.length > 84 ? (
            <>
              <text
                fill={
                  !props.theme
                    ? props.description
                      ? `#${props.description}`
                      : "#B4B4B4"
                    : defaultThemes[props.theme].description
                }
                x={446}
                y={245}
                fontSize={36}
              >
                {data.bio.substring(0, 84)}
              </text>{" "}
              <text
                fill={
                  !props.theme
                    ? props.description
                      ? `#${props.description}`
                      : "#B4B4B4"
                    : defaultThemes[props.theme].description
                }
                x={446}
                y={295}
                fontSize={36}
              >
                {data.bio.length >= 154
                  ? `${data.bio.substring(84, 154)}...`
                  : data.bio.substring(84)}
              </text>{" "}
            </>
          ) : (
            <text
              fill={
                !props.theme
                  ? props.description
                    ? `#${props.description}`
                    : "#B4B4B4"
                  : defaultThemes[props.theme].description
              }
              x={446}
              y={245}
              fontSize={40}
            >
              {data.bio}
            </text>
          )}
        </>
      )}

      <g fontSize={40}>
        <text
          fill={
            !props.theme
              ? props.text
                ? `#${props.text}`
                : "#000"
              : defaultThemes[props.theme].text
          }
          x={450}
          y={379}
          fontWeight="bold"
        >
          {!data ? null : numeral(data.followers).format("0a")}
        </text>
        <text
          fill={
            !props.theme
              ? props.statsText
                ? `#${props.statsText}`
                : "#676767"
              : defaultThemes[props.theme].statsText
          }
          x={527}
          y={379}
        >
          {"Followers"}
        </text>
        <text
          fill={
            !props.theme
              ? props.text
                ? `#${props.text}`
                : "#000"
              : defaultThemes[props.theme].text
          }
          x={783}
          y={379}
          fontWeight="bold"
        >
          {!data ? null : numeral(data.following).format("0a")}
        </text>
        <text
          fill={
            !props.theme
              ? props.statsText
                ? `#${props.statsText}`
                : "#676767"
              : defaultThemes[props.theme].statsText
          }
          x={860}
          y={379}
        >
          {"Following"}
        </text>
      </g>
      {props.children}
      <g>
        {data && data.location ? (
          <g
            fill={
              !props.theme
                ? props.stats
                  ? `#${props.stats}`
                  : "#C4C4C4"
                : defaultThemes[props.theme].stats
            }
          >
            <path d="M177 815.823c-4.35 0-7.89-3.538-7.89-7.888s3.542-7.893 7.89-7.893 7.89 3.541 7.89 7.889c0 4.348-3.542 7.886-7.89 7.886v.006zm0-12.652a4.771 4.771 0 00-4.765 4.764 4.768 4.768 0 004.765 4.761 4.77 4.77 0 004.765-4.763 4.773 4.773 0 00-4.765-4.766v.004z" />
            <path d="M195.108 808.271c0-9.979-8.125-18.104-18.108-18.104s-18.108 8.125-18.108 18.104c0 3.962 1.256 7.725 3.631 10.881l.006-.004.015.031c3.391 4.313 13.079 11.994 13.489 12.317a1.559 1.559 0 001.938.002c.41-.323 10.098-8 13.489-12.317l.015-.029.004.004a17.954 17.954 0 003.629-10.881v-.004zm-18.108 20c-2.55-2.063-9.417-7.74-11.992-11.011a14.834 14.834 0 01-2.991-8.983c0-8.262 6.723-14.985 14.983-14.985 8.26 0 14.983 6.721 14.983 14.979 0 3.271-1.035 6.379-2.991 8.985-2.575 3.271-9.442 8.946-11.992 11.011v.004z" />
          </g>
        ) : null}

        <text
          fill={
            !props.theme
              ? props.statsText
                ? `#${props.statsText}`
                : "#676767"
              : defaultThemes[props.theme].statsText
          }
          x={216}
          y={823}
          fontSize={40}
        >
          {data ? data.location : null}
        </text>

        {data && data.blog ? (
          <g
            fill={
              !props.theme
                ? props.stats
                  ? `#${props.stats}`
                  : "#C4C4C4"
                : defaultThemes[props.theme].stats
            }
          >
            <path d="M780.917 817.135a1.7 1.7 0 01-.423-.056 10.812 10.812 0 01-5.823-4.025 10.842 10.842 0 01-2.017-8.11 10.856 10.856 0 014.308-7.163l7.355-5.433c4.837-3.575 11.687-2.55 15.27 2.292a10.872 10.872 0 012.015 8.114 10.854 10.854 0 01-4.312 7.163l-3.084 2.279a1.564 1.564 0 11-1.858-2.517l3.083-2.281a7.732 7.732 0 003.075-5.104 7.756 7.756 0 00-1.437-5.788c-2.552-3.45-7.442-4.187-10.896-1.633l-7.354 5.433a7.749 7.749 0 00-3.073 5.104 7.726 7.726 0 001.437 5.788 7.715 7.715 0 004.15 2.869 1.567 1.567 0 011.084 1.933 1.564 1.564 0 01-1.505 1.14l.005-.005z" />
            <path d="M771.146 831.946a10.915 10.915 0 01-8.802-4.427 10.855 10.855 0 01-2.017-8.113 10.854 10.854 0 014.313-7.162l3.079-2.279a1.564 1.564 0 011.86 2.516l-3.083 2.282a7.739 7.739 0 00-3.073 5.104 7.746 7.746 0 001.437 5.787c2.553 3.452 7.438 4.188 10.896 1.636l7.35-5.434c3.454-2.552 4.188-7.437 1.636-10.896a7.71 7.71 0 00-4.15-2.866 1.565 1.565 0 01-1.084-1.931 1.574 1.574 0 011.93-1.088 10.81 10.81 0 015.82 4.025c3.577 4.842 2.55 11.692-2.291 15.271l-7.354 5.433a10.81 10.81 0 01-6.469 2.138l.002.004z" />
          </g>
        ) : null}

        <text
          fill={
            !props.theme
              ? props.statsText
                ? `#${props.statsText}`
                : "#676767"
              : defaultThemes[props.theme].statsText
          }
          x={817}
          y={823}
          fontSize={40}
          textDecoration="underline"
        >
          {!data ? null : data.blog}
        </text>

        <g>
          {data && data.created_at ? (
            <g
              fill={
                !props.theme
                  ? props.stats
                    ? `#${props.stats}`
                    : "#C4C4C4"
                  : defaultThemes[props.theme].stats
              }
            >
              <path d="M1317.06 790.167h-32.12a4.777 4.777 0 00-4.77 4.775v32.116a4.777 4.777 0 004.77 4.775h32.12c2.63 0 4.77-2.141 4.77-4.775v-32.116a4.777 4.777 0 00-4.77-4.775zm1.65 36.891c0 .911-.74 1.65-1.65 1.65h-32.12c-.91 0-1.65-.739-1.65-1.65v-27.687c0-.911.74-1.646 1.65-1.65h32.12c.91 0 1.65.739 1.65 1.646v27.696-.005z" />
              <path d="M1290.65 806.906a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm20.7-9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm-10.35-9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm0 9.179a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm-10.35 9.021a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354zm10.35 0a2.678 2.678 0 100-5.354 2.678 2.678 0 100 5.354z" />
            </g>
          ) : null}

          <text
            fill={
              !props.theme
                ? props.statsText
                  ? `#${props.statsText}`
                  : "#676767"
                : defaultThemes[props.theme].statsText
            }
            x={1342}
            y={823}
            fontSize={40}
          >
            {!data
              ? null
              : `Joined ${new Date(data.created_at).toDateString()}`}
          </text>
        </g>
      </g>
      <image
        clipPath="url(#prefix__a)"
        xlinkHref={!data ? "" : `https://github.com/${props.username}.png`}
        width={350}
        height={390}
        x={105}
        y={50}
      />
    </svg>
  );
};
