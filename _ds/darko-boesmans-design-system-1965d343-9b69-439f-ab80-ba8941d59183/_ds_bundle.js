/* @ds-bundle: {"format":4,"namespace":"DarkoBoesmansDesignSystem_1965d3","components":[{"name":"CaseStudyMeta","sourcePath":"components/content/CaseStudyMeta.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"Reveal","sourcePath":"components/content/Reveal.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TextLink","sourcePath":"components/navigation/TextLink.jsx"}],"sourceHashes":{"components/content/CaseStudyMeta.jsx":"f5698a7ff4b2","components/content/ProjectCard.jsx":"d6aa14ffe7d9","components/content/Reveal.jsx":"a0eeaea7e05b","components/content/SectionHeading.jsx":"7c7ed89ed061","components/core/Badge.jsx":"ccd3e79640c1","components/core/Button.jsx":"6c6577eecc8d","components/core/Card.jsx":"270889d3aea9","components/core/Icon.jsx":"299ee23bdf4f","components/core/IconButton.jsx":"7d64586dbeef","components/core/Tag.jsx":"f92c7bbebd67","components/feedback/Dialog.jsx":"5daf96d40fc3","components/feedback/Toast.jsx":"ab6b33c2b462","components/feedback/Tooltip.jsx":"c0fd426063bb","components/forms/Checkbox.jsx":"81ae796d1001","components/forms/Input.jsx":"2ab845352c8a","components/forms/Radio.jsx":"616d1b7e611d","components/forms/Select.jsx":"207c86b004ba","components/forms/Switch.jsx":"a490242c5baf","components/forms/Textarea.jsx":"e105891f6173","components/navigation/NavBar.jsx":"471e593d5ae1","components/navigation/Tabs.jsx":"94e04bdeecd3","components/navigation/TextLink.jsx":"bab32e2b5478","ui_kits/portfolio/About.jsx":"edba419b6c9c","ui_kits/portfolio/CaseStudy.jsx":"4d22ce643597","ui_kits/portfolio/Contact.jsx":"3ee79274e8c1","ui_kits/portfolio/Home.jsx":"f07bba0fd51c","ui_kits/portfolio/Shell.jsx":"a15a1efef958","ui_kits/portfolio/Work.jsx":"f9a631117335","ui_kits/portfolio/data.js":"344fcd446d46"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DarkoBoesmansDesignSystem_1965d3 = window.DarkoBoesmansDesignSystem_1965d3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Intentional addition: CSS port of the GSAP [data-reveal] scroll reveal in
// src/utils/animations.ts (y:24, 0.9s, power3.out, 0.08s stagger, reduced-motion aware).
function Reveal({
  delay = 0,
  children,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }), {
      rootMargin: "0px 0px -15% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    "data-reveal": true,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(var(--reveal-offset-y))",
      transition: "opacity var(--duration-reveal) var(--ease-out-3) " + delay + "ms, transform var(--duration-reveal) var(--ease-out-3) " + delay + "ms",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  lead,
  level = 2,
  align = "left",
  tone = "ink",
  style,
  ...rest
}) {
  const Tag = "h" + level;
  const colors = {
    ink: "var(--text-body)",
    brand: "var(--color-primary)",
    inverse: "var(--color-white)"
  };
  const sizes = {
    1: "var(--font-size-h2)",
    2: "var(--font-size-h4)",
    3: "var(--font-size-h6)",
    4: "var(--font-size-h8)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      color: colors[tone],
      maxWidth: "var(--measure-prose)",
      marginInline: align === "center" ? "auto" : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-smaller)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      opacity: 0.6,
      marginBottom: "var(--space-4)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-black)",
      fontSize: sizes[level],
      lineHeight: "var(--line-height-display)",
      letterSpacing: "var(--tracking-display)",
      margin: 0,
      textWrap: "balance"
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-p)",
      lineHeight: "var(--line-height-body)",
      marginTop: "var(--space-5)",
      marginBottom: 0,
      opacity: 0.72,
      textWrap: "pretty"
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = "brand",
  style,
  ...rest
}) {
  const tones = {
    brand: {
      background: "var(--color-primary)",
      color: "var(--text-on-brand)"
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--color-black)"
    },
    ink: {
      background: "var(--color-black)",
      color: "var(--color-white)"
    },
    quiet: {
      background: "var(--surface-muted)",
      color: "var(--color-primary)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: "var(--font-size-smaller)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      padding: "5px 10px",
      borderRadius: "var(--radius-sm)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--font-weight-medium)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  border: "var(--border-width-hairline) solid transparent",
  borderRadius: "var(--radius-pill)",
  cursor: "pointer",
  textDecoration: "none",
  transition: "var(--transition-base)",
  lineHeight: 1
};
const sizes = {
  sm: {
    fontSize: "var(--font-size-smaller)",
    padding: "10px 18px"
  },
  md: {
    fontSize: "var(--font-size-small)",
    padding: "14px 26px"
  },
  lg: {
    fontSize: "var(--font-size-p)",
    padding: "18px 34px"
  }
};
const variants = {
  primary: {
    background: "var(--color-primary)",
    color: "var(--text-on-brand)"
  },
  secondary: {
    background: "transparent",
    color: "var(--color-black)",
    borderColor: "var(--color-black)"
  },
  accent: {
    background: "var(--color-accent)",
    color: "var(--color-black)"
  },
  ghost: {
    background: "transparent",
    color: "var(--color-primary)"
  }
};
const hovers = {
  primary: {
    background: "var(--color-primary-dark)"
  },
  secondary: {
    background: "var(--color-black)",
    color: "var(--color-white)"
  },
  accent: {
    background: "var(--color-secondary)",
    color: "var(--color-white)"
  },
  ghost: {
    background: "var(--color-primary-soft)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? "none" : undefined,
    transform: press ? "scale(0.97)" : "scale(1)",
    ...style
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = "paper",
  interactive = false,
  padding = "var(--space-6)",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    paper: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      borderColor: "var(--border-default)"
    },
    muted: {
      background: "var(--surface-muted)",
      color: "var(--text-body)",
      borderColor: "transparent"
    },
    brand: {
      background: "var(--surface-brand)",
      color: "var(--text-on-brand)",
      borderColor: "transparent"
    },
    inverse: {
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      borderColor: "transparent"
    },
    highlight: {
      background: "var(--surface-highlight)",
      color: "var(--text-body)",
      borderColor: "transparent"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      border: "var(--border-width-hairline) solid",
      padding,
      transition: "var(--transition-base)",
      ...tones[tone],
      boxShadow: interactive && hover ? "var(--shadow-hover)" : "var(--shadow-none)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lucide (CDN) is a documented substitution: the source repo ships no icon set.
const CDN = "https://unpkg.com/lucide-static@0.544.0/icons/";
function Icon({
  name,
  size = 20,
  strokeColor = "currentColor",
  style,
  ...rest
}) {
  const url = CDN + name + ".svg";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      background: strokeColor,
      WebkitMaskImage: "url(" + url + ")",
      maskImage: "url(" + url + ")",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 36,
  md: 44,
  lg: 52
};
function IconButton({
  name,
  label,
  variant = "outline",
  size = "md",
  onClick,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const skins = {
    outline: {
      background: hover ? "var(--color-black)" : "transparent",
      color: hover ? "var(--color-white)" : "var(--color-black)",
      borderColor: "var(--color-black)"
    },
    solid: {
      background: hover ? "var(--color-primary-dark)" : "var(--color-primary)",
      color: "var(--text-on-brand)",
      borderColor: "transparent"
    },
    ghost: {
      background: hover ? "var(--color-primary-soft)" : "transparent",
      color: "var(--color-primary)",
      borderColor: "transparent"
    }
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      border: "var(--border-width-hairline) solid",
      cursor: "pointer",
      transition: "var(--transition-base)",
      ...skins[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === "sm" ? 16 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = "outline",
  style,
  ...rest
}) {
  const tones = {
    outline: {
      background: "transparent",
      color: "var(--text-muted)",
      borderColor: "var(--border-default)"
    },
    solid: {
      background: "var(--surface-muted)",
      color: "var(--color-primary)",
      borderColor: "transparent"
    },
    accent: {
      background: "var(--surface-highlight)",
      color: "var(--color-secondary)",
      borderColor: "transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-smaller)",
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      border: "var(--border-width-hairline) solid",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/CaseStudyMeta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CaseStudyMeta({
  items = [],
  tools = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "var(--space-6)",
      margin: 0,
      paddingTop: "var(--space-5)",
      borderTop: "var(--border-width-hairline) solid var(--border-default)",
      ...style
    }
  }, rest), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-smaller)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-small)",
      lineHeight: "var(--line-height-body)",
      color: "var(--text-body)",
      margin: "var(--space-2) 0 0"
    }
  }, it.value))), tools.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-smaller)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-subtle)"
    }
  }, "Tools"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: "var(--space-2) 0 0",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, tools.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)))));
}
Object.assign(__ds_scope, { CaseStudyMeta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CaseStudyMeta.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProjectCard({
  title,
  description,
  tools = [],
  href,
  imageSrc,
  year,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      textDecoration: "none",
      color: "var(--text-body)",
      background: "var(--surface-card)",
      border: "var(--border-width-hairline) solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      transition: "var(--transition-base)",
      boxShadow: hover ? "var(--shadow-hover)" : "var(--shadow-none)",
      transform: hover ? "translateY(-2px)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      background: "var(--surface-muted)",
      overflow: "hidden"
    }
  }, imageSrc && /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover ? "scale(1.03)" : "scale(1)",
      transition: "transform var(--duration-base) var(--ease-out-3)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: "var(--font-size-h9)",
      lineHeight: "var(--line-height-heading)",
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, title), year && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-smaller)",
      color: "var(--text-subtle)"
    }
  }, year)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-small)",
      lineHeight: "var(--line-height-body)",
      color: "var(--text-muted)",
      margin: "var(--space-3) 0 0",
      textWrap: "pretty"
    }
  }, description), tools.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      marginTop: "var(--space-4)"
    }
  }, tools.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginTop: "var(--space-5)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-small)",
      color: hover ? "var(--color-secondary)" : "var(--color-primary)",
      transition: "var(--transition-base)"
    }
  }, "Read case study", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  }))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  onClose,
  footer,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "grid",
      placeItems: "center",
      padding: "var(--space-5)",
      background: "var(--scrim-inverse)",
      backdropFilter: "blur(var(--blur-overlay))"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: "min(560px,100%)",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: "var(--border-width-hairline) solid var(--border-default)",
      boxShadow: "var(--shadow-overlay)",
      padding: "var(--space-6)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: "var(--font-size-h9)",
      lineHeight: "var(--line-height-heading)",
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-small)",
      lineHeight: "var(--line-height-body)",
      color: "var(--text-muted)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toast({
  message,
  tone = "brand",
  icon = "check",
  onDismiss,
  style,
  ...rest
}) {
  const tones = {
    brand: {
      background: "var(--color-primary)",
      color: "var(--text-on-brand)"
    },
    ink: {
      background: "var(--color-black)",
      color: "var(--color-white)"
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--color-black)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "14px 18px",
      borderRadius: "var(--radius-pill)",
      boxShadow: "var(--shadow-hover)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-small)",
      ...tones[tone],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, message), onDismiss && /*#__PURE__*/React.createElement("span", {
    onClick: onDismiss,
    style: {
      cursor: "pointer",
      display: "inline-flex",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  side = "top",
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      opacity: show ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity var(--duration-fast) var(--ease-out-2)",
      whiteSpace: "nowrap",
      background: "var(--color-black)",
      color: "var(--color-white)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-smaller)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      zIndex: 20
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-small)",
      color: "var(--text-body)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: "none",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-sm)",
      border: "var(--border-width-hairline) solid " + (checked ? "var(--color-primary)" : "var(--border-strong)"),
      background: checked ? "var(--color-primary)" : "var(--surface-card)",
      transition: "var(--transition-base)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 6,
      borderLeft: "2px solid var(--color-white)",
      borderBottom: "2px solid var(--color-white)",
      transform: "rotate(-45deg) translateY(-1px)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--font-size-smaller)",
  letterSpacing: "var(--tracking-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "var(--space-2)"
};
const controlStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--font-size-small)",
  color: "var(--text-body)",
  background: "var(--surface-card)",
  border: "var(--border-width-hairline) solid var(--border-default)",
  borderRadius: "var(--radius-md)",
  padding: "14px 16px",
  width: "100%",
  boxSizing: "border-box",
  transition: "var(--transition-base)",
  outline: "none"
};
function Input({
  label,
  hint,
  error,
  type = "text",
  value,
  placeholder,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlStyle,
      borderColor: error ? "var(--color-secondary)" : focus ? "var(--color-primary)" : "var(--border-default)",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: "var(--font-size-smaller)",
      color: error ? "var(--color-secondary)" : "var(--text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-small)",
      color: "var(--text-body)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: "none",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-pill)",
      border: "var(--border-width-hairline) solid " + (checked ? "var(--color-primary)" : "var(--border-strong)"),
      background: "var(--surface-card)",
      transition: "var(--transition-base)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-pill)",
      background: "var(--color-primary)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--font-size-smaller)",
  letterSpacing: "var(--tracking-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "var(--space-2)"
};
const controlStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--font-size-small)",
  color: "var(--text-body)",
  background: "var(--surface-card)",
  border: "var(--border-width-hairline) solid var(--border-default)",
  borderRadius: "var(--radius-md)",
  padding: "14px 16px",
  width: "100%",
  boxSizing: "border-box",
  transition: "var(--transition-base)",
  outline: "none"
};
function Select({
  label,
  hint,
  options = [],
  value,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlStyle,
      appearance: "none",
      cursor: "pointer",
      borderColor: focus ? "var(--color-primary)" : "var(--border-default)",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: "var(--font-size-smaller)",
      color: "var(--text-subtle)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-small)",
      color: "var(--text-body)",
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : onChange,
    style: {
      width: 48,
      height: 28,
      flex: "none",
      padding: 3,
      boxSizing: "border-box",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--color-primary)" : "var(--color-line-strong)",
      transition: "var(--transition-base)",
      display: "flex",
      justifyContent: checked ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "var(--radius-pill)",
      background: "var(--color-white)",
      transition: "var(--transition-base)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--font-size-smaller)",
  letterSpacing: "var(--tracking-label)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "var(--space-2)"
};
const controlStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--font-size-small)",
  color: "var(--text-body)",
  background: "var(--surface-card)",
  border: "var(--border-width-hairline) solid var(--border-default)",
  borderRadius: "var(--radius-md)",
  padding: "14px 16px",
  width: "100%",
  boxSizing: "border-box",
  transition: "var(--transition-base)",
  outline: "none"
};
function Textarea({
  label,
  hint,
  error,
  rows = 5,
  value,
  placeholder,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...controlStyle,
      resize: "vertical",
      lineHeight: "var(--line-height-body)",
      borderColor: error ? "var(--color-secondary)" : focus ? "var(--color-primary)" : "var(--border-default)",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: "var(--space-2)",
      fontSize: "var(--font-size-smaller)",
      color: error ? "var(--color-secondary)" : "var(--text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavBar({
  logoSrc,
  brand = "Darko Boesmans",
  items = [],
  activeHref,
  cta,
  onNavigate,
  tone = "paper",
  style,
  ...rest
}) {
  const dark = tone === "inverse";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-4) var(--gutter-inline)",
      background: dark ? "var(--surface-inverse)" : "var(--surface-page)",
      color: dark ? "var(--text-on-inverse)" : "var(--text-body)",
      borderBottom: "var(--border-width-hairline) solid " + (dark ? "rgba(244,241,234,0.16)" : "var(--border-default)"),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate("/");
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      color: "inherit",
      textDecoration: "none"
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      width: 34,
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: "var(--font-size-h10)",
      letterSpacing: "var(--tracking-display)"
    }
  }, brand)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, items.map(it => {
    const active = it.href === activeHref;
    return /*#__PURE__*/React.createElement("a", {
      key: it.href,
      href: it.href,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it.href);
      },
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--font-size-small)",
        color: "inherit",
        textDecoration: "none",
        opacity: active ? 1 : 0.62,
        paddingBottom: 2,
        boxShadow: active ? "inset 0 -2px 0 var(--color-accent)" : "none",
        transition: "var(--transition-base)"
      }
    }, it.label);
  }), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: dark ? "accent" : "primary",
    href: cta.href,
    onClick: cta.onClick
  }, cta.label)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-2)",
      borderBottom: "var(--border-width-hairline) solid var(--border-default)",
      ...style
    }
  }, rest), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.value),
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--font-size-small)",
        fontWeight: active ? "var(--font-weight-medium)" : "var(--font-weight-regular)",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "12px 18px",
        color: active ? "var(--color-primary)" : "var(--text-muted)",
        boxShadow: active ? "inset 0 -2px 0 var(--color-primary)" : "none",
        transition: "var(--transition-base)"
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextLink({
  href,
  children,
  external = false,
  tone = "ink",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const colors = {
    ink: "var(--color-black)",
    brand: "var(--color-primary)",
    inverse: "var(--color-white)"
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: external ? "_blank" : undefined,
    rel: external ? "noreferrer" : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      color: hover ? "var(--color-secondary)" : colors[tone],
      textDecoration: "none",
      boxShadow: "inset 0 -1px 0 " + (hover ? "var(--color-secondary)" : "currentColor"),
      transition: "var(--transition-base)",
      ...style
    }
  }, rest), children, external && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 16
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TextLink.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
const {
  SectionHeading,
  Card,
  Tag,
  Reveal
} = window.DarkoBoesmansDesignSystem_1965d3;
function About() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-9) var(--gutter-inline) 0",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-muted)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      display: "grid",
      placeItems: "end center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profilePic.png",
    alt: "Darko Boesmans",
    style: {
      width: "100%",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About",
    title: "Front-end work with the structure showing",
    lead: "I design and build static-first interfaces in Astro and TypeScript, with motion scoped to where it helps comprehension."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      marginTop: "var(--space-7)"
    }
  }, [["Stack", "Astro, TypeScript in strict mode, Tailwind CSS, GSAP with ScrollTrigger, Keystatic for content."], ["Approach", "Separate layout, content, and motion; ship static; keep the content model typed."], ["Currently", "Migrating a legacy PHP portfolio into an Astro codebase, case study by case study."]].map(([t, d]) => /*#__PURE__*/React.createElement(Reveal, {
    key: t
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--font-weight-medium)",
      fontSize: "var(--font-size-h10)",
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-small)",
      lineHeight: "var(--line-height-body)",
      color: "var(--text-muted)",
      margin: "var(--space-2) 0 0"
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      marginTop: "var(--space-6)"
    }
  }, ["Astro", "TypeScript", "Tailwind CSS", "GSAP", "Keystatic", "Bun", "Biome"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
const {
  PROJECTS
} = window.PortfolioKitData;
const {
  Badge,
  Button,
  Icon,
  Card,
  Tabs,
  TextLink,
  CaseStudyMeta
} = window.DarkoBoesmansDesignSystem_1965d3;
const TABS = [{
  value: "challenge",
  label: "Challenge"
}, {
  value: "research",
  label: "Research"
}, {
  value: "solution",
  label: "Solution"
}, {
  value: "results",
  label: "Results"
}];
function CaseStudy({
  slug,
  onNavigate
}) {
  const p = PROJECTS.find(x => x.slug === slug) || PROJECTS[0];
  const [tab, setTab] = React.useState("challenge");
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: "var(--space-8) var(--gutter-inline) 0",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("/work"),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--font-size-small)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), "Back to work"), /*#__PURE__*/React.createElement("header", {
    style: {
      marginTop: "var(--space-6)",
      maxWidth: "22ch"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "quiet"
  }, p.year), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-black)",
      fontSize: "clamp(50px,7vw,var(--font-size-h3))",
      lineHeight: "var(--line-height-display)",
      letterSpacing: "var(--tracking-display)",
      margin: "var(--space-4) 0 0"
    }
  }, p.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-p)",
      lineHeight: "var(--line-height-body)",
      color: "var(--text-muted)",
      maxWidth: "var(--measure-prose)",
      margin: "var(--space-5) 0 0",
      textWrap: "pretty"
    }
  }, p.description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)",
      background: "var(--surface-muted)",
      borderRadius: "var(--radius-xl)",
      aspectRatio: "16 / 7"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(CaseStudyMeta, {
    items: [{
      label: "Client",
      value: p.client
    }, {
      label: "Goal",
      value: p.goal
    }, {
      label: "Outcome",
      value: p.outcome
    }],
    tools: p.tools
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    items: TABS,
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-p)",
      lineHeight: "var(--line-height-body)",
      maxWidth: "var(--measure-prose)",
      margin: "var(--space-6) 0 0",
      textWrap: "pretty"
    }
  }, p[tab])), /*#__PURE__*/React.createElement(Card, {
    tone: "highlight",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: "var(--font-size-h10)",
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, "Reflection"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-small)",
      lineHeight: "var(--line-height-body)",
      color: "var(--text-muted)",
      margin: "var(--space-3) 0 var(--space-5)"
    }
  }, p.reflection), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: p.link,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 16
    })
  }, "Visit live site"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-8)",
      fontSize: "var(--font-size-small)",
      color: "var(--text-muted)"
    }
  }, "Written in MDX and edited through Keystatic \u2014 see ", /*#__PURE__*/React.createElement(TextLink, {
    href: "https://github.com/DarkoBoesmans/DarkoBoesmans.github.io",
    external: true
  }, "the repository"), "."));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
const {
  SectionHeading,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
  Card,
  Dialog,
  Toast,
  TextLink
} = window.DarkoBoesmansDesignSystem_1965d3;
function Contact() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [list, setList] = React.useState(false);
  const [error, setError] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  function submit() {
    if (!form.email.includes("@")) {
      setError("Enter a valid email address");
      return;
    }
    setError("");
    setSent(true);
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-9) var(--gutter-inline) 0",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "Tell me what you're building",
    lead: "Freelance and collaboration enquiries welcome. I reply within two working days."
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    padding: "var(--space-6)",
    style: {
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-small)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Prefer email?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: "var(--font-size-h10)",
      letterSpacing: "var(--tracking-display)",
      margin: "var(--space-2) 0 var(--space-4)"
    }
  }, "hello@darkoboesmans.dev"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => {
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    }
  }, "Copy address")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-small)",
      color: "var(--text-muted)",
      marginTop: "var(--space-5)"
    }
  }, "Or find the source on ", /*#__PURE__*/React.createElement(TextLink, {
    href: "https://github.com/DarkoBoesmans",
    external: true
  }, "GitHub"), ".")), /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com",
    value: form.email,
    error: error,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Scope",
    options: [{
      value: "new",
      label: "New build"
    }, {
      value: "redesign",
      label: "Redesign"
    }, {
      value: "collab",
      label: "Collaboration"
    }]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Project",
    rows: 5,
    placeholder: "What are you building?",
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Add me to the studio list",
    checked: list,
    onChange: () => setList(!list)
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: submit
  }, "Send message")))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: "var(--space-6)",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    message: "Copied email address"
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    title: "Message sent",
    onClose: () => setSent(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSent(false)
    }, "Close")
  }, "Thanks", form.name ? ", " + form.name : "", " \u2014 I reply within two working days."));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
const {
  PROJECTS
} = window.PortfolioKitData;
const {
  Button,
  Icon,
  Badge,
  Card,
  Tag,
  SectionHeading,
  ProjectCard,
  Reveal
} = window.DarkoBoesmansDesignSystem_1965d3;
const section = {
  padding: "var(--section-block) var(--gutter-inline) 0",
  maxWidth: "var(--container-max)",
  margin: "0 auto"
};
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...section,
      paddingTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "quiet"
  }, "Portfolio 2025"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-black)",
      fontSize: "clamp(50px,8vw,var(--font-size-h2))",
      lineHeight: "var(--line-height-display)",
      letterSpacing: "var(--tracking-display)",
      margin: "var(--space-5) 0 0",
      textWrap: "balance"
    }
  }, "Design Engineer &", /*#__PURE__*/React.createElement("br", null), "Front-End Developer"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-p)",
      lineHeight: "var(--line-height-body)",
      color: "var(--text-muted)",
      maxWidth: "48ch",
      margin: "var(--space-5) 0 0",
      textWrap: "pretty"
    }
  }, "I build modular front-ends where layout, content, and motion stay separate \u2014 so each layer can evolve independently."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate("/work"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "View work"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate("/contact")
  }, "Get in touch")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      marginTop: "var(--space-7)"
    }
  }, ["Astro", "TypeScript", "Tailwind CSS", "GSAP", "Keystatic"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-muted)",
      borderRadius: "var(--radius-xl)",
      aspectRatio: "4 / 5",
      display: "grid",
      placeItems: "end center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/profilePic.png",
    alt: "Darko Boesmans",
    style: {
      width: "100%",
      objectFit: "contain"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: section
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Selected work",
    title: "Case studies, not screenshots",
    lead: "Each project explains the problem before the pixels."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "var(--space-6)",
      marginTop: "var(--space-7)"
    }
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.slug,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    title: p.title,
    year: p.year,
    description: p.description,
    tools: p.tools.slice(0, 3),
    href: "/work/" + p.slug,
    onClick: e => {
      e.preventDefault();
      onNavigate("/work/" + p.slug);
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: section
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    padding: "var(--space-8)",
    style: {
      borderRadius: "var(--radius-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: "var(--font-size-h7)",
      lineHeight: "var(--line-height-heading)",
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, "How I work")), [["Structure first", "Layout, content, and motion are separate layers, so iteration stays cheap."], ["Content-driven", "Case studies live in MDX with a typed schema, editable without touching code."], ["Motion with restraint", "Scroll reveals and nav transitions only — and they respect reduced motion."]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--font-weight-medium)",
      fontSize: "var(--font-size-h10)",
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-small)",
      lineHeight: "var(--line-height-body)",
      margin: "var(--space-3) 0 0",
      opacity: 0.8
    }
  }, d))))))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Shell.jsx
try { (() => {
const {
  NavBar,
  TextLink,
  IconButton
} = window.DarkoBoesmansDesignSystem_1965d3;
const NAV = [{
  href: "/work",
  label: "Work"
}, {
  href: "/about",
  label: "About"
}, {
  href: "/contact",
  label: "Contact"
}];
function Shell({
  route,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      color: "var(--text-body)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "../../assets/favicon.svg",
    brand: "Darko Boesmans",
    items: NAV,
    activeHref: route,
    cta: {
      label: "Get in touch",
      onClick: () => onNavigate("/contact")
    },
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "var(--border-width-hairline) solid var(--border-default)",
      marginTop: "var(--space-9)",
      padding: "var(--space-8) var(--gutter-inline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-6)",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: "var(--font-size-h8)",
      letterSpacing: "var(--tracking-display)",
      lineHeight: "var(--line-height-heading)",
      margin: 0
    }
  }, "Let's build something clear."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-small)",
      color: "var(--text-muted)",
      margin: "var(--space-3) 0 0"
    }
  }, "Design Engineer & Front-End Developer \xB7 Belgium")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    href: "https://DarkoBoesmans.github.io",
    external: true
  }, "DarkoBoesmans.github.io"), /*#__PURE__*/React.createElement(IconButton, {
    name: "github",
    label: "GitHub",
    href: "https://github.com/DarkoBoesmans"
  }), /*#__PURE__*/React.createElement(IconButton, {
    name: "mail",
    label: "Email",
    href: "/contact"
  })))));
}
Object.assign(window, {
  Shell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
const {
  PROJECTS
} = window.PortfolioKitData;
const {
  SectionHeading,
  ProjectCard,
  Reveal,
  Card
} = window.DarkoBoesmansDesignSystem_1965d3;
function Work({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-9) var(--gutter-inline) 0",
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Work",
    title: "Projects in progress and in the archive",
    lead: "The portfolio is mid-migration from a legacy PHP site to an Astro codebase; published case studies appear here first."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "var(--space-6)",
      marginTop: "var(--space-7)"
    }
  }, PROJECTS.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.slug,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    title: p.title,
    year: p.year,
    description: p.description,
    tools: p.tools,
    href: "/work/" + p.slug,
    onClick: e => {
      e.preventDefault();
      onNavigate("/work/" + p.slug);
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    tone: "muted",
    padding: "var(--space-6)",
    style: {
      display: "grid",
      alignContent: "center",
      minHeight: 220
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: "var(--font-size-h9)",
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, "More case studies soon"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--font-size-small)",
      color: "var(--text-muted)",
      margin: "var(--space-3) 0 0"
    }
  }, "Legacy projects stay in the repository for reference until the migration is complete."))));
}
Object.assign(window, {
  Work
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Content mirrors src/content/data.ts and src/content/projects/*.mdx in the source repo.
window.PortfolioKitData = {};
window.PortfolioKitData.PROJECTS = [{
  slug: "studio-redesign",
  title: "Studio Redesign",
  year: "2025",
  client: "Freelance portfolio project",
  description: "A performance-first redesign focused on clarity, accessibility, and stronger case-study storytelling.",
  goal: "Build a modular portfolio experience that can scale from one-off pages to a content-driven case study system.",
  outcome: "A reusable component structure, faster delivery, and a stronger visual identity.",
  challenge: "The previous site mixed presentation, layout, and content too tightly, which made iteration slow.",
  results: "The new setup separates layout, content, and motion so each layer can evolve independently.",
  research: "User flow was simplified to bring projects, about, and contact into a clearer editorial rhythm.",
  solution: "A clean static foundation with reusable sections, MDX-driven projects, and carefully scoped animation hooks.",
  reflection: "The biggest improvement is not visual polish alone, but the fact that the codebase is now structured for growth.",
  tools: ["Astro", "TypeScript", "Tailwind CSS", "GSAP", "Keystatic"],
  link: "https://DarkoBoesmans.github.io"
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CaseStudyMeta = __ds_scope.CaseStudyMeta;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TextLink = __ds_scope.TextLink;

})();
