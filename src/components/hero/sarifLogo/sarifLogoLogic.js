const durationFraction = 0.5;
const duration = (92 / 30) * 1000;
const durationRotate = (288 / 30) * 1000;
const insetDelay = 0.5;
const offset = 12 / 96;
const offsetScale = 30 / 96;

document
  .querySelector("#loading")
  .animate([{ transform: "rotate(0)" }, { transform: "rotate(360deg)" }], {
    duration: durationRotate,
    iterations: Infinity,
  });

document
  .querySelector("#triangle")
  .animate(
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

document
  .querySelector("#triangle-2")
  .animate(
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

document
  .querySelector("#triangle-1-1")
  .animate(
    [{ opacity: "0" }, { opacity: "1", offset: offset }, { opacity: "1" }],
    {
      duration: duration,
      iterations: Infinity,
      iterationStart: insetDelay,
    }
  );

document
  .querySelector("#fill-1-1")
  .animate(
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

document
  .querySelector("#triangle-2-1")
  .animate(
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

document
  .querySelector("#fill-2-1")
  .animate(
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

document
  .querySelector("#triangle-3-1")
  .animate(
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

document
  .querySelector("#fill-3-1")
  .animate(
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

document
  .querySelector("#triangle-4-1")
  .animate(
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

document
  .querySelector("#fill-4-1")
  .animate(
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

document
  .querySelector("#triangle-5-1")
  .animate(
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

document
  .querySelector("#fill-5-1")
  .animate(
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

document
  .querySelector("#triangle-6-1")
  .animate(
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

document
  .querySelector("#fill-6-1")
  .animate(
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

document
  .querySelector("#triangle-7-1")
  .animate(
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

document
  .querySelector("#fill-7-1")
  .animate(
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

document
  .querySelector("#triangle-8-1")
  .animate(
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

document
  .querySelector("#fill-8-1")
  .animate(
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

document
  .querySelector("#triangle-9-1")
  .animate(
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

document
  .querySelector("#fill-9-1")
  .animate(
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

document
  .querySelector("#triangle-10-1")
  .animate(
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

document
  .querySelector("#fill-10-1")
  .animate(
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

document
  .querySelector("#triangle-11-1")
  .animate(
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

document
  .querySelector("#fill-11-1")
  .animate(
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

document
  .querySelector("#triangle-12-1")
  .animate(
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

document
  .querySelector("#fill-12-1")
  .animate(
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

document
  .querySelector("#triangle-13-1")
  .animate(
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

document
  .querySelector("#fill-13-1")
  .animate(
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

document
  .querySelector("#triangle-14-1")
  .animate(
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

document
  .querySelector("#fill-14-1")
  .animate(
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

document
  .querySelector("#triangle-15-1")
  .animate(
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

document
  .querySelector("#fill-15-1")
  .animate(
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

document
  .querySelector("#triangle-16-1-1")
  .animate(
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

document
  .querySelector("#fill-16-1-1")
  .animate(
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

document
  .querySelector("#triangle-16-2-1")
  .animate(
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

document
  .querySelector("#fill-16-2-1")
  .animate(
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

document
  .querySelector("#triangle-17-1")
  .animate(
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

document
  .querySelector("#fill-17-1")
  .animate(
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

document
  .querySelector("#triangle-18-1")
  .animate(
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

document
  .querySelector("#fill-18-1")
  .animate(
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

document
  .querySelector("#triangle-19-1")
  .animate(
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

document
  .querySelector("#fill-19-1")
  .animate(
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

document
  .querySelector("#triangle-20-1")
  .animate(
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

document
  .querySelector("#fill-20-1")
  .animate(
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

/*  Triangle #2  */

document
  .querySelector("#triangle-1-2")
  .animate(
    [{ opacity: "0" }, { opacity: "1", offset: offset }, { opacity: "1" }],
    {
      duration: duration,
      iterations: Infinity,
    }
  );

document
  .querySelector("#fill-1-2")
  .animate(
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

document
  .querySelector("#triangle-2-2")
  .animate(
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

document
  .querySelector("#fill-2-2")
  .animate(
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

document
  .querySelector("#triangle-3-2")
  .animate(
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

document
  .querySelector("#fill-3-2")
  .animate(
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

document
  .querySelector("#triangle-4-2")
  .animate(
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

document
  .querySelector("#fill-4-2")
  .animate(
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

document
  .querySelector("#triangle-5-2")
  .animate(
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

document
  .querySelector("#fill-5-2")
  .animate(
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

document
  .querySelector("#triangle-6-2")
  .animate(
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

document
  .querySelector("#fill-6-2")
  .animate(
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

document
  .querySelector("#triangle-7-2")
  .animate(
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

document
  .querySelector("#fill-7-2")
  .animate(
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

document
  .querySelector("#triangle-8-2")
  .animate(
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

document
  .querySelector("#fill-8-2")
  .animate(
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

document
  .querySelector("#triangle-9-2")
  .animate(
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

document
  .querySelector("#fill-9-2")
  .animate(
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

document
  .querySelector("#triangle-10-2")
  .animate(
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

document
  .querySelector("#fill-10-2")
  .animate(
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

document
  .querySelector("#triangle-11-2")
  .animate(
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

document
  .querySelector("#fill-11-2")
  .animate(
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

document
  .querySelector("#triangle-12-2")
  .animate(
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

document
  .querySelector("#fill-12-2")
  .animate(
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

document
  .querySelector("#triangle-13-2")
  .animate(
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

document
  .querySelector("#fill-13-2")
  .animate(
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

document
  .querySelector("#triangle-14-2")
  .animate(
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

document
  .querySelector("#fill-14-2")
  .animate(
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

document
  .querySelector("#triangle-15-2")
  .animate(
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

document
  .querySelector("#fill-15-2")
  .animate(
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

document
  .querySelector("#triangle-16-1-2")
  .animate(
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

document
  .querySelector("#fill-16-1-2")
  .animate(
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

document
  .querySelector("#triangle-16-2-2")
  .animate(
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

document
  .querySelector("#fill-16-2-2")
  .animate(
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

document
  .querySelector("#triangle-17-2")
  .animate(
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

document
  .querySelector("#fill-17-2")
  .animate(
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

document
  .querySelector("#triangle-18-2")
  .animate(
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

document
  .querySelector("#fill-18-2")
  .animate(
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

document
  .querySelector("#triangle-19-2")
  .animate(
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

document
  .querySelector("#fill-19-2")
  .animate(
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

document
  .querySelector("#triangle-20-2")
  .animate(
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

document
  .querySelector("#fill-20-2")
  .animate(
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
