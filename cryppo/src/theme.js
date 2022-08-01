import { createGlobalStyle, css } from "styled-components";

export const darkTheme = {
  background: "#1B1B1B",
  body: "#0D0D0D",
  filter:
    "invert(100%) sepia(1%) saturate(942%) hue-rotate(223deg) brightness(108%) contrast(101%)",
  left: "2px",
  color: "#fff",
};

export const lightTheme = {
  background: "#E9E9E9",
  body: "#F3F3F3",
  filter: "",
  left: "calc(100% - 25px)",
  color: "#333",
};
const breakpointToFluid = "992px";
const breakpointToSm = " 720px";
const baseVw = "1920px";
const breakpointLg = "992px";
const breakpointMd = "768px";
const breakpointSm = "576px";
const containerLg = "1230px";
const containerMd = "720px";
const containerSm = "540px";
const padding = "15px";
export const container = css`
  width: 100%;
  max-width: ${containerLg};
  padding-left: ${padding};
  padding-right: ${padding};
  margin: auto;

  @media screen and (max-width: ${breakpointLg}) {
    max-width: ${containerMd};
  }

  @media screen and (max-width: ${breakpointMd}) {
    max-width: ${containerSm};
  }

  @media screen and (max-width: ${breakpointSm}) {
    max-width: none;
  }
`;
export const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.theme.body};
        transition: background 0.38s ease-in-out;
    }
    .background {
        background: ${(props) => props.theme.background};
        transition: 0.38s ease-in-out;
    }
    .color {
        color: ${(props) => props.theme.color};
        transition: 0.38s ease-in-out;
    }
    .filter {
        filter: ${(props) => props.theme.filter};
    }
    .switchTheme {
        left: ${(props) => props.theme.left};
    }
    .text {
      color:  ${(props) => props.theme.color};
    }
`;
// function calcFluidFontSize($fmin, $fmax, $wmin, $wmax, $units: px) {
//   $fmin = strip-unit($fmin);
//   $fmax = strip-unit($fmax);
//   $wmin = strip-unit($wmin),
//   $wmax= strip-unit($wmax);
//   $k: ($fmax - $fmin)/ ($wmax - $wmin);
//   $b: $fmin - $k * $wmin;
//   $b: $b + $units;

//    return calc(#{$k} * 100vw + #{$b});;
// }
// @media screen and (max-width: $breakpoint-lg) {
//   max-width: $container-md;
// }

// @media screen and (max-width: $breakpoint-md) {
//   max-width: $container-sm;
// }

// @media screen and (max-width: $breakpoint-sm) {
//   max-width: none;
// }
