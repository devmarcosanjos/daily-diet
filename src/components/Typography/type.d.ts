import theme from "@theme";

export type TextAlign = 'auto' | 'center' |'justify' | 'left' | 'right'
export type FontFamily = keyof typeof theme.font_family
export type LineHighlight = keyof typeof theme.line_height
export type FontSizeType = keyof typeof theme.font_size
export type Size = keyof typeof theme.font_size

export type FontSize = 
    | 'body_xs'
    | 'body_sm'
    | 'body_md'
    | 'body_lg'
    | 'title_xs'
    | 'title_sm'
    | 'title_md'
    | 'title_lg'

export type TypeColors = keyof typeof theme.colors
export type BaseColors = keyof typeof theme.colors.base
export type BrandColors = keyof typeof theme.colors.brand
export type Color = BaseColors |  BrandColors
