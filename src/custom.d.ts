import { CSSProperties } from "react"

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      grey: string
      greySecond: string
      checkedSelected: string
      blueGrey: string
      border: string
    }
  }
  interface PaletteOptions {
    custom: {
      grey: string
      greySecond: string
      checkedSelected: string
      blueGrey: string
      border: string
    }
  }
  interface TypographyVariants {
    layoutTitle: CSSProperties
  }
  interface TypographyVariantsOptions {
    tableTitle?: CSSProperties
    tableContent?: CSSProperties
    assetsCheckLabel?: CSSProperties
    assetsFields?: CSSProperties
    assetsInputLabel?: CSSProperties
    assetsTags?: CSSProperties
    assetsNumber?: CSSProperties
    layerInfo?: CSSProperties
    layoutTitle?: CSSProperties
    layoutSubTitle?: CSSProperties
    layoutContainer?: CSSProperties
    layoutLayer?: CSSProperties
    studioTitle?: CSSProperties
    studioSubTitle?: CSSProperties
    studioContainer?: CSSProperties
    studioInfo?: CSSProperties
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    tableTitle: true
    tableContent: true
    assetsCheckLabel: true
    assetsFields: true
    assetsInputLabel: true
    assetsTags: true
    assetsNumber: true
    layerInfo: true
    layoutTitle: true
    layoutSubTitle: true
    layoutContainer: true
    layoutLayer: true
    studioTitle: true
    studioSubTitle: true
    studioContainer: true
    studioInfo: true
  }
}

declare global {
  // these will now always be ambient
  declare module "*.png";
  declare module "*.jpg";
  declare module "*.jpeg";
  declare module "*.gif";
  declare module "*.svg";
}
