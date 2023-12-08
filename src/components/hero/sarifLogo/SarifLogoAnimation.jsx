import React, { useEffect, useRef } from "react";
import "./sarifLogoAnimation.scss";

export const SarifLogoAnimation = () => {
  const durationFraction = 0.5;
  const duration = (92 / 30) * 1000;
  const durationRotate = (288 / 30) * 1000;
  const insetDelay = 0.5;
  const offset = 12 / 96;
  const offsetScale = 30 / 96;

  const elementRef_1 = useRef(null);
  const elementRef_2 = useRef(null);
  const elementRef_3 = useRef(null);
  const elementRef_4 = useRef(null);
  const elementRef_5 = useRef(null);
  const elementRef_6 = useRef(null);
  const elementRef_7 = useRef(null);
  const elementRef_8 = useRef(null);
  const elementRef_9 = useRef(null);
  const elementRef_10 = useRef(null);
  const elementRef_11 = useRef(null);
  const elementRef_12 = useRef(null);
  const elementRef_13 = useRef(null);
  const elementRef_14 = useRef(null);
  const elementRef_15 = useRef(null);
  const elementRef_16 = useRef(null);
  const elementRef_17 = useRef(null);
  const elementRef_18 = useRef(null);
  const elementRef_19 = useRef(null);
  const elementRef_20 = useRef(null);
  const elementRef_21 = useRef(null);
  const elementRef_22 = useRef(null);
  const elementRef_23 = useRef(null);
  const elementRef_24 = useRef(null);
  const elementRef_25 = useRef(null);
  const elementRef_26 = useRef(null);
  const elementRef_27 = useRef(null);
  const elementRef_28 = useRef(null);
  const elementRef_29 = useRef(null);
  const elementRef_30 = useRef(null);
  const elementRef_31 = useRef(null);
  const elementRef_32 = useRef(null);
  const elementRef_33 = useRef(null);
  const elementRef_34 = useRef(null);
  const elementRef_35 = useRef(null);
  const elementRef_36 = useRef(null);
  const elementRef_37 = useRef(null);
  const elementRef_38 = useRef(null);
  const elementRef_39 = useRef(null);
  const elementRef_40 = useRef(null);
  const elementRef_41 = useRef(null);
  const elementRef_42 = useRef(null);
  const elementRef_43 = useRef(null);
  const elementRef_44 = useRef(null);
  const elementRef_45 = useRef(null);
  const elementRef_46 = useRef(null);
  const elementRef_47 = useRef(null);
  const elementRef_48 = useRef(null);
  const elementRef_49 = useRef(null);
  const elementRef_50 = useRef(null);
  const elementRef_51 = useRef(null);
  const elementRef_52 = useRef(null);
  const elementRef_53 = useRef(null);
  const elementRef_54 = useRef(null);
  const elementRef_55 = useRef(null);
  const elementRef_56 = useRef(null);
  const elementRef_57 = useRef(null);
  const elementRef_58 = useRef(null);
  const elementRef_59 = useRef(null);
  const elementRef_60 = useRef(null);
  const elementRef_61 = useRef(null);
  const elementRef_62 = useRef(null);
  const elementRef_63 = useRef(null);
  const elementRef_64 = useRef(null);
  const elementRef_65 = useRef(null);
  const elementRef_66 = useRef(null);
  const elementRef_67 = useRef(null);
  const elementRef_68 = useRef(null);
  const elementRef_69 = useRef(null);
  const elementRef_70 = useRef(null);
  const elementRef_71 = useRef(null);
  const elementRef_72 = useRef(null);
  const elementRef_73 = useRef(null);
  const elementRef_74 = useRef(null);
  const elementRef_75 = useRef(null);
  const elementRef_76 = useRef(null);
  const elementRef_77 = useRef(null);
  const elementRef_78 = useRef(null);
  const elementRef_79 = useRef(null);
  const elementRef_80 = useRef(null);
  const elementRef_81 = useRef(null);
  const elementRef_82 = useRef(null);
  const elementRef_83 = useRef(null);
  const elementRef_84 = useRef(null);
  const elementRef_85 = useRef(null);
  const elementRef_86 = useRef(null);
  const elementRef_87 = useRef(null);

  useEffect(() => {
    elementRef_1.current.animate(
      [{ transform: "rotate(0)" }, { transform: "rotate(360deg)" }],
      {
        duration: durationRotate,
        iterations: Infinity,
      }
    );

    elementRef_2.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.4)" },
        { transform: "scale(0.16)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_45.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.4)" },
        { transform: "scale(0.16)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_3.current.animate(
      [{ opacity: "0" }, { opacity: "1", offset: offset }, { opacity: "1" }],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_4.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0)", offset: offsetScale },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_7.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (1 / 19) * durationFraction },
        { opacity: "1", offset: offset + (1 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_8.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (1 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (1 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_5.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (2 / 19) * durationFraction },
        { opacity: "1", offset: offset + (2 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_6.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (2 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (2 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_9.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (3 / 19) * durationFraction },
        { opacity: "1", offset: offset + (3 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_10.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (3 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (3 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_11.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (4 / 19) * durationFraction },
        { opacity: "1", offset: offset + (4 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_12.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (4 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (4 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_13.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (5 / 19) * durationFraction },
        { opacity: "1", offset: offset + (5 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_14.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (5 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (5 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_15.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (6 / 19) * durationFraction },
        { opacity: "1", offset: offset + (6 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_16.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (6 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (6 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_17.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (7 / 19) * durationFraction },
        { opacity: "1", offset: offset + (7 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_18.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (7 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (7 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_19.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (8 / 19) * durationFraction },
        { opacity: "1", offset: offset + (8 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_20.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (8 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (8 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_21.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (9 / 19) * durationFraction },
        { opacity: "1", offset: offset + (9 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_22.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (9 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (9 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_23.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (10 / 19) * durationFraction },
        { opacity: "1", offset: offset + (10 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_24.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (10 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (10 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_25.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (11 / 19) * durationFraction },
        { opacity: "1", offset: offset + (11 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_26.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (11 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (11 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_27.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (12 / 19) * durationFraction },
        { opacity: "1", offset: offset + (12 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_28.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (12 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (12 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_29.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (13 / 19) * durationFraction },
        { opacity: "1", offset: offset + (13 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_30.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (13 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (13 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_31.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (14 / 19) * durationFraction },
        { opacity: "1", offset: offset + (14 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_32.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (14 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (14 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_33.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (15 / 19) * durationFraction },
        { opacity: "1", offset: offset + (15 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_34.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (15 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (15 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_35.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (15 / 19) * durationFraction },
        { opacity: "1", offset: offset + (15 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_36.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (15 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (15 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_37.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (16 / 19) * durationFraction },
        { opacity: "1", offset: offset + (16 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_38.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (16 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (16 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_39.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (17 / 19) * durationFraction },
        { opacity: "1", offset: offset + (17 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_40.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (17 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (17 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_41.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (18 / 19) * durationFraction },
        { opacity: "1", offset: offset + (18 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_42.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (18 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (18 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_43.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (19 / 19) * durationFraction },
        { opacity: "1", offset: offset + (19 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_44.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (19 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (19 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
        iterationStart: insetDelay,
      }
    );

    elementRef_46.current.animate(
      [{ opacity: "0" }, { opacity: "1", offset: offset }, { opacity: "1" }],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_47.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0)", offset: offsetScale },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_50.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (1 / 19) * durationFraction },
        { opacity: "1", offset: offset + (1 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_51.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (1 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (1 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_48.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (2 / 19) * durationFraction },
        { opacity: "1", offset: offset + (2 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_49.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (2 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (2 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_52.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (3 / 19) * durationFraction },
        { opacity: "1", offset: offset + (3 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_53.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (3 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (3 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_54.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (4 / 19) * durationFraction },
        { opacity: "1", offset: offset + (4 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_55.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (4 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (4 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_56.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (5 / 19) * durationFraction },
        { opacity: "1", offset: offset + (5 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_57.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (5 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (5 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_58.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (6 / 19) * durationFraction },
        { opacity: "1", offset: offset + (6 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_82.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (6 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (6 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_59.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (7 / 19) * durationFraction },
        { opacity: "1", offset: offset + (7 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_60.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (7 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (7 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_61.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (8 / 19) * durationFraction },
        { opacity: "1", offset: offset + (8 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_62.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (8 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (8 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_63.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (9 / 19) * durationFraction },
        { opacity: "1", offset: offset + (9 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_64.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (9 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (9 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_65.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (10 / 19) * durationFraction },
        { opacity: "1", offset: offset + (10 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_66.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (10 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (10 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_67.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (11 / 19) * durationFraction },
        { opacity: "1", offset: offset + (11 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_68.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (11 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (11 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_69.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (12 / 19) * durationFraction },
        { opacity: "1", offset: offset + (12 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_70.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (12 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (12 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_71.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (13 / 19) * durationFraction },
        { opacity: "1", offset: offset + (13 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_72.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (13 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (13 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_73.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (14 / 19) * durationFraction },
        { opacity: "1", offset: offset + (14 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_74.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (14 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (14 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_75.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (15 / 19) * durationFraction },
        { opacity: "1", offset: offset + (15 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_76.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (15 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (15 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_77.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (15 / 19) * durationFraction },
        { opacity: "1", offset: offset + (15 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_78.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (15 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (15 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_79.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (16 / 19) * durationFraction },
        { opacity: "1", offset: offset + (16 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_80.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (16 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (16 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_81.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (17 / 19) * durationFraction },
        { opacity: "1", offset: offset + (17 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_83.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (17 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (17 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_84.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (18 / 19) * durationFraction },
        { opacity: "1", offset: offset + (18 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_85.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (18 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (18 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_86.current.animate(
      [
        { opacity: "0" },
        { opacity: "0", offset: (19 / 19) * durationFraction },
        { opacity: "1", offset: offset + (19 / 19) * durationFraction },
        { opacity: "1" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );

    elementRef_87.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1)", offset: (19 / 19) * durationFraction },
        {
          transform: "scale(0)",
          offset: offsetScale + (19 / 19) * durationFraction,
        },
        { transform: "scale(0)" },
      ],
      {
        duration: duration,
        iterations: Infinity,
      }
    );
  }, [duration, durationRotate, offset, offsetScale]);

  return (
    <div className="loading" id="loading" ref={elementRef_1}>
      <svg
        id="triangle"
        viewBox="0 0 226 226"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        ref={elementRef_2}
      >
        <g className="group--1">
          <path
            className="triangle"
            id="triangle-1-1"
            d=" M 22.5 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_3}
          />
          <path
            className="fill"
            id="fill-1-1"
            d=" M 22.5 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_4}
          />
        </g>
        <g className="group--3">
          <path
            className="triangle"
            id="triangle-3-1"
            d=" M 45.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_5}
          />
          <path
            className="fill"
            id="fill-3-1"
            d=" M 45.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_6}
          />
        </g>
        <g className="group--2">
          <path
            className="triangle"
            id="triangle-2-1"
            d=" M 67.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_7}
          />

          <path
            className="fill"
            id="fill-2-1"
            d=" M 67.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_8}
          />
        </g>
        <g className="group--4">
          <path
            className="triangle"
            id="triangle-4-1"
            d=" M 90.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_9}
          />
          <path
            className="fill"
            id="fill-4-1"
            d=" M 90.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_10}
          />
        </g>
        <g className="group--5">
          <path
            className="triangle"
            id="triangle-5-1"
            d=" M 112.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_11}
          />
          <path
            className="fill"
            id="fill-5-1"
            d=" M 112.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_12}
          />
        </g>
        <g className="group--6">
          <path
            className="triangle"
            id="triangle-6-1"
            d=" M 135.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_13}
          />
          <path
            className="fill"
            id="fill-6-1"
            d=" M 135.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_14}
          />
        </g>
        <g className="group--7">
          <path
            className="triangle"
            id="triangle-7-1"
            d=" 
               M 45.07 135.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_15}
          />
          <path
            className="fill"
            id="fill-7-1"
            d=" 
               M 45.07 135.1
               l 22.5 45
               h -45
               z"
            ref={elementRef_16}
          />
        </g>
        <g className="group--8">
          <path
            className="triangle"
            id="triangle-8-1"
            d=" M 157.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_17}
          />
          <path
            className="fill"
            id="fill-8-1"
            d=" M 157.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_18}
          />
        </g>
        <g className="group--9">
          <path
            className="triangle"
            id="triangle-9-1"
            d=" M 180.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_19}
          />
          <path
            className="fill"
            id="fill-9-1"
            d=" M 180.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_20}
          />
        </g>
        <g className="group--10">
          <path
            className="triangle"
            id="triangle-10-1"
            d=" M 202.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_21}
          />
          <path
            className="fill"
            id="fill-10-1"
            d=" M 202.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_22}
          />
        </g>
        <g className="group--11">
          <path
            className="triangle"
            id="triangle-11-1"
            d=" M 67.6 180.099
               l 22.5 -45
               h -45
               z"
            ref={elementRef_23}
          />
          <path
            className="fill"
            id="fill-11-1"
            d=" M 67.6 180.099
               l 22.5 -45
               h -45
               z"
            ref={elementRef_24}
          />
        </g>
        <g className="group--12">
          <path
            className="triangle"
            id="triangle-12-1"
            d=" M 180.07 135.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_25}
          />
          <path
            className="fill"
            id="fill-12-1"
            d=" M 180.07 135.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_26}
          />
        </g>
        <g className="group--13">
          <path
            className="triangle"
            id="triangle-13-1"
            d=" M 67.6 90.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_27}
          />
          <path
            className="fill"
            id="fill-13-1"
            d=" M 67.6 90.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_28}
          />
        </g>
        <g className="group--14">
          <path
            className="triangle"
            id="triangle-14-1"
            d=" M 157.6 180.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_29}
          />
          <path
            className="fill"
            id="fill-14-1"
            d=" M 157.6 180.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_30}
          />
        </g>
        <g className="group--15">
          <path
            className="triangle"
            id="triangle-15-1"
            d=" M 157.6 90.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_31}
          />
          <path
            className="fill"
            id="fill-15-1"
            d=" M 157.6 90.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_32}
          />
        </g>
        <g className="group--16 group--16-1" id="group-16-1">
          <path
            className="triangle"
            id="triangle-16-1-1"
            d=" M 90.07 135.099
               l 22.5 -45
               h -45
               z"
            ref={elementRef_33}
          />
          <path
            className="fill fill--16"
            id="fill-16-1-1"
            d=" M 90.07 135.099
               l 22.5 -45
               h -45
               z"
            ref={elementRef_34}
          />
        </g>
        <g className="group--16 group--16-2" id="group-16-2">
          <path
            className="triangle"
            id="triangle-16-2-1"
            d=" 
               M 135.07 135.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_35}
          />
          <path
            className="fill fill--16"
            id="fill-16-2-1"
            d=" 
               M 135.07 135.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_36}
          />
        </g>
        <g className="group--17">
          <path
            className="triangle"
            id="triangle-17-1"
            d=" M 135.07 45
               l 22.5 45
               h -45
               z "
            ref={elementRef_37}
          />
          <path
            className="fill"
            id="fill-17-1"
            d=" M 135.07 45
               l 22.5 45
               h -45
               z "
            ref={elementRef_38}
          />
        </g>
        <g className="group--18">
          <path
            className="triangle"
            id="triangle-18-1"
            d=" M 90.07 45
               l 22.5 45
               h -45
               z "
            ref={elementRef_39}
          />
          <path
            className="fill"
            id="fill-18-1"
            d=" M 90.07 45
               l 22.5 45
               h -45
               z "
            ref={elementRef_40}
          />
        </g>
        <g className="group--19">
          <path
            className="triangle"
            id="triangle-19-1"
            d=" M 135.07 45
               h -45
               l 22.5 45
               z "
            ref={elementRef_41}
          />
          <path
            className="fill"
            id="fill-19-1"
            d=" M 135.07 45
               h -45
               l 22.5 45
               z "
            ref={elementRef_42}
          />
        </g>
        <g className="group--20">
          <path
            className="triangle"
            id="triangle-20-1"
            d=" M 112.6.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_43}
          />
          <path
            className="fill"
            id="fill-20-1"
            d=" M 112.6.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_44}
          />
        </g>
      </svg>
      <svg
        id="triangle-2"
        viewBox="0 0 226 226"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        ref={elementRef_45}
      >
        <g className="group--1">
          <path
            className="triangle"
            id="triangle-1-2"
            d=" M 22.5 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_46}
          />
          <path
            className="fill"
            id="fill-1-2"
            d=" M 22.5 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_47}
          />
        </g>
        <g className="group--3">
          <path
            className="triangle"
            id="triangle-3-2"
            d=" M 45.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_48}
          />
          <path
            className="fill"
            id="fill-3-2"
            d=" M 45.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_49}
          />
        </g>
        <g className="group--2">
          <path
            className="triangle"
            id="triangle-2-2"
            d=" M 67.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_50}
          />

          <path
            className="fill"
            id="fill-2-2"
            d=" M 67.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_51}
          />
        </g>
        <g className="group--4">
          <path
            className="triangle"
            id="triangle-4-2"
            d=" M 90.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_52}
          />
          <path
            className="fill"
            id="fill-4-2"
            d=" M 90.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_53}
          />
        </g>
        <g className="group--5">
          <path
            className="triangle"
            id="triangle-5-2"
            d=" M 112.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_54}
          />
          <path
            className="fill"
            id="fill-5-2"
            d=" M 112.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_55}
          />
        </g>
        <g className="group--6">
          <path
            className="triangle"
            id="triangle-6-2"
            d=" M 135.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_56}
          />
          <path
            className="fill"
            id="fill-6-2"
            d=" M 135.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_57}
          />
        </g>
        <g className="group--7">
          <path
            className="triangle"
            id="triangle-7-2"
            d=" 
               M 45.07 135.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_58}
          />
          <path
            className="fill"
            id="fill-7-2"
            d=" 
               M 45.07 135.1
               l 22.5 45
               h -45
               z"
            ref={elementRef_82}
          />
        </g>
        <g className="group--8">
          <path
            className="triangle"
            id="triangle-8-2"
            d=" M 157.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_59}
          />
          <path
            className="fill"
            id="fill-8-2"
            d=" M 157.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_60}
          />
        </g>
        <g className="group--9">
          <path
            className="triangle"
            id="triangle-9-2"
            d=" M 180.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_61}
          />
          <path
            className="fill"
            id="fill-9-2"
            d=" M 180.07 225.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_62}
          />
        </g>
        <g className="group--10">
          <path
            className="triangle"
            id="triangle-10-2"
            d=" M 202.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_63}
          />
          <path
            className="fill"
            id="fill-10-2"
            d=" M 202.6 180.1
               l -22.5 45
               h 45
               z"
            ref={elementRef_64}
          />
        </g>
        <g className="group--11">
          <path
            className="triangle"
            id="triangle-11-2"
            d=" M 67.6 180.099
               l 22.5 -45
               h -45
               z"
            ref={elementRef_65}
          />
          <path
            className="fill"
            id="fill-11-2"
            d=" M 67.6 180.099
               l 22.5 -45
               h -45
               z"
            ref={elementRef_66}
          />
        </g>
        <g className="group--12">
          <path
            className="triangle"
            id="triangle-12-2"
            d=" M 180.07 135.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_67}
          />
          <path
            className="fill"
            id="fill-12-2"
            d=" M 180.07 135.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_68}
          />
        </g>
        <g className="group--13">
          <path
            className="triangle"
            id="triangle-13-2"
            d=" M 67.6 90.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_69}
          />
          <path
            className="fill"
            id="fill-13-2"
            d=" M 67.6 90.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_70}
          />
        </g>
        <g className="group--14">
          <path
            className="triangle"
            id="triangle-14-2"
            d=" M 157.6 180.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_71}
          />
          <path
            className="fill"
            id="fill-14-2"
            d=" M 157.6 180.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_72}
          />
        </g>
        <g className="group--15">
          <path
            className="triangle"
            id="triangle-15-2"
            d=" M 157.6 90.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_73}
          />
          <path
            className="fill"
            id="fill-15-2"
            d=" M 157.6 90.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_74}
          />
        </g>
        <g className="group--16 group--16-1" id="group-16-1-2">
          <path
            className="triangle"
            id="triangle-16-1-2"
            d=" M 90.07 135.099
               l 22.5 -45
               h -45
               z"
            ref={elementRef_75}
          />
          <path
            className="fill fill--16"
            id="fill-16-1-2"
            d=" M 90.07 135.099
               l 22.5 -45
               h -45
               z"
            ref={elementRef_76}
          />
        </g>
        <g className="group--16 group--16-2" id="group-16-2-2">
          <path
            className="triangle"
            id="triangle-16-2-2"
            d=" 
               M 135.07 135.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_77}
          />
          <path
            className="fill fill--16"
            id="fill-16-2-2"
            d=" 
               M 135.07 135.099
               l -22.5 -45
               h 45
               z"
            ref={elementRef_78}
          />
        </g>
        <g className="group--17">
          <path
            className="triangle"
            id="triangle-17-2"
            d=" M 135.07 45
               l 22.5 45
               h -45
               z "
            ref={elementRef_79}
          />
          <path
            className="fill"
            id="fill-17-2"
            d=" M 135.07 45
               l 22.5 45
               h -45
               z "
            ref={elementRef_80}
          />
        </g>
        <g className="group--18">
          <path
            className="triangle"
            id="triangle-18-2"
            d=" M 90.07 45
               l 22.5 45
               h -45
               z "
            ref={elementRef_81}
          />
          <path
            className="fill"
            id="fill-18-2"
            d=" M 90.07 45
               l 22.5 45
               h -45
               z "
            ref={elementRef_83}
          />
        </g>
        <g className="group--19">
          <path
            className="triangle"
            id="triangle-19-2"
            d=" M 135.07 45
               h -45
               l 22.5 45
               z "
            ref={elementRef_84}
          />
          <path
            className="fill"
            id="fill-19-2"
            d=" M 135.07 45
               h -45
               l 22.5 45
               z "
            ref={elementRef_85}
          />
        </g>
        <g className="group--20">
          <path
            className="triangle"
            id="triangle-20-2"
            d=" M 112.6.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_86}
          />
          <path
            className="fill"
            id="fill-20-2"
            d=" M 112.6.1
               l 22.5 45
               h -45
               z "
            ref={elementRef_87}
          />
        </g>
      </svg>
    </div>
  );
};

export default SarifLogoAnimation;
