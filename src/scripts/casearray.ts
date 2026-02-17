export type Case = {
  slug: string;
  titel: string;
  undertitel: string[];
  date: string;
  billede: string;
  gif: string;
  text: string[];
  imgdisplay: string[];
};

export const casearray: Case[] = [
  {
    slug: "pixeline",
    titel: "maskotgenerator: Pixeline",
    undertitel: [
      "maskotgenerator: Pixeline",
      "alt hvad jeg har lavet er skolearbejde",
    ],
    date: "2025-11-05",
    billede: "/cases/pixeline/pixeline.png",
    gif: "/cases/pixeline/pixeline.gif",
    text: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    ],
    imgdisplay: [
      "/cases/pixeline/pixeline.png",
      "/cases/pixeline/pixeline.png",
      "/cases/pixeline/pixeline.png",
    ],
  },
    {
    slug: "handicaploftet",
    titel: "Datavisualisering af Handicapløftet",
    undertitel: [
      "Lorem ipsum dolor sit amet",
      "Quisque faucibus ex sapien",
    ],
    date: "2025-12-05",
    billede: "/cases/handicaploftet/danmarkskort.png",
    gif: "/cases/pixeline/pixeline.gif",
    text: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    ],
    imgdisplay: [
        "/cases/handicaploftet/danmarkskort.png",
    ],
  },
      {
    slug: "munich",
    titel: "City Branding: Munich",
    undertitel: [
      "Lorem ipsum dolor sit amet",
      "Quisque faucibus ex sapien",
    ],
    date: "2026-01-23",
    billede: "/cases/munich/pattern.png",
    gif: "/cases/munich/munich.gif",
    text: [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    ],
    imgdisplay: [
        "/cases/munich/munich01.png",
        "/cases/munich/munich02.png",
        "/cases/munich/munich03.png",
        "/cases/munich/munich04.png",
        "/cases/munich/munich05.png",
        "/cases/munich/munich06.png",
        "/cases/munich/munich07.png",
    ],
  },
];
