const colors = require("./colors");
module.exports = {
  body: {
    // fontSize: "18px",
    // lineHeight: "150%",
    // color: colors.gray,
    // backgroundColor: colors.white,
  },

  ".img-bg": {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    objectFit: "cover",
  },
  ".page": {
    // display: "flex",
    // flexDirection: "column",
    // minHeight: "100vh",
    // overflow: "hidden",
  },
  ".main": { flex: "1 1 auto" },

  "button, a.button": {
    background: colors.redPrimary,
    color: colors.white,
    fontSize: "16px",
    borderRadius: "3px",
    display: "inline-block",
    textAlign: "center",
    transition: "all 0.3s ease 0s",
  },

  "button:disabled,.disabled": {
    opacity: "0.5",
    cursor: "default",
  },
  "button:disabled,.disabled": {
    opacity: "0.5",
    cursor: "not-allowed",
  },
  "button.outlined, a.button.outlined": {
    border: `2px solid ${colors.white}`,
    color: colors.white,
    borderRadius: "30px",
    transition: "all 0.15s linear",
    lineHeight: "117%",
    padding: "10px 20px",
    fontSize: "14px",
  },

  "button:hover:enabled, a.button:hover:enabled": {
    backgroundColor: colors.redDark,
  },
  "button.secondary, a.button.secondary": {
    border: `2px solid ${colors.blue["2"]}`,
    backgroundColor: colors.white,
    color: colors.blue["2"],
    transition: "all 0.15s linear",
  },
  "button.secondary:hover, a.button.secondary:hover": {
    backgroundColor: colors.blue["2"],
    color: colors.white,
  },
  "button.small, a.button.small": {
    fontSize: "13px",
    lineHeight: "16px",
    padding: "4px 12px",
  },
  ".transparent": {
    padding: "10px 0",
    backgroundColor: "transparent",
    color: colors.gray.dark,
  },
  ".transparent:hover": {
    backgroundColor: "transparent",
  },

  ".video-container": {
    boxShadow:
      "0px 34px 38px 0px rgba(0, 55, 129, 0.12), 0px 12px 11px 0px rgba(0, 55, 129, 0.09)",
    "@media (min-width: 768px)": {
      boxShadow: "none",
    },
  },
};
