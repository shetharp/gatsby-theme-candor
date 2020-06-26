import { base } from "@theme-ui/presets"
import merge from "lodash.merge"

export default merge({}, base, {
  colors: {
    smoke: '#f6f6f6'
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 680,
  },
  styles: {
    Layout: {
      backgroundColor: "smoke",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "block",
        fontSize: 3,
        margin: "0 auto",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    h1: {
      color: "text",
      fontSize: 5,
      lineHeight: "heading",
    },
    h2: {
      color: "text",
      fontSize: 4,
      marginTop: 6,
      lineHeight: "heading",
    },
    pre: {
      padding: 4,
      marginBottom: 6,
      borderRadius: 2,
      bg: "gray",
    },
    ol: {
      padding: 0,
      paddingLeft: 3
    },
    li: {
      padding: 0,
    }
  },
})
