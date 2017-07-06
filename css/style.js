import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#FAFAFA",
        "font": "Helvetica, Arial, sans-serif"
    },
    "h1": {
        "fontSize": 33,
        "marginTop": 18,
        "marginBottom": 9,
        "background": "#9BC64C",
        "boxShadow": "0px 0px 0px 5px #9BC64C",
        "border": "dashed 1px #4CAF50",
        "paddingTop": 0.2,
        "paddingRight": 0.5,
        "paddingBottom": 0.2,
        "paddingLeft": 0.5,
        "color": "#454545"
    },
    "h2": {
        "color": "#454545",
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0,
        "borderTop": "solid 3px #9BC64C",
        "borderBottom": "solid 3px #9BC64C",
        "marginTop": 18,
        "marginBottom": 9
    },
    "h3": {
        "color": "#454545",
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0,
        "borderTop": "solid 3px #9BC64C",
        "borderBottom": "solid 3px #9BC64C",
        "marginTop": 18,
        "marginBottom": 9
    },
    "fixedBack": {
        "minHeight": 400,
        "maxHeight": 100 * vh,
        "width": "100%",
        "position": "fixed",
        "top": 0,
        "left": 0,
        "backgroundImage": "url('../img/wall002-1.png')",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "top center",
        "zIndex": 0
    },
    "footer divcontainer small a": {
        "color": "#454545"
    },
    "ul>li>a": {
        "color": "#454545"
    },
    "raisedbutton": {
        "display": "inline-block",
        "backgroundColor": "#26a69b",
        "color": "#FFF",
        "fontSize": 1,
        "textDecoration": "none",
        "letterSpacing": 0.05,
        "paddingTop": 0.6,
        "paddingRight": 1.3,
        "paddingBottom": 0.6,
        "paddingLeft": 1.3,
        "borderRadius": 2,
        "cursor": "pointer",
        "boxShadow": "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)",
        "WebkitTapHighlightColor": "transparent",
        "transition": ".3s"
    },
    "raisedbutton:hover": {
        "boxShadow": "0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2)"
    },
    "material": {
        "position": "relative",
        "overflow": "hidden"
    },
    "material rp-effect": {
        "position": "absolute",
        "borderRadius": "50%",
        "opacity": 0.35,
        "transform": "scale(0)",
        "background": "#FFF",
        "animation": "ripple 700ms"
    }
});