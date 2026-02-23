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
      "Træning af Flux LoRA til at kunne genskabe pixeline på billeder",
    ],
    date: "2025-11-05",
    billede: "/cases/pixeline/pixeline.png",
    gif: "/cases/pixeline/pixeline.gif",
    text: [
      "Dette projekt er udarbejdet som led i undervisning og er udelukkende til ikke-kommercielt brug. Alle rettigheder tilhører de oprindelige rettighedshavere.",
      `“[Brand] skal bruge en ny kampagnewebsite. Det er vigtigt for [Brand], at [Maskot] indgår i alt marketingsmateriale. Deadline er snart, så deres marketingafdeling, kan ikke nå at bygge websitet, eller at få [Maskot] med.`,
      `Ved at bruge AI, kan vi automatisere og effektivisere produktionen af indhold, og derved åbne op for en mere agil og fri proces.”`,
      "Pixeline, tekst, ikoner og baggrundsbilleder er genereret af kunstig intelligens.",
    ],
    imgdisplay: [
      "/cases/pixeline/pixeline01.png",
      "/cases/pixeline/pixeline02.png",
      "/cases/pixeline/pixeline03.png",
      "/cases/pixeline/pixeline04.png",
      "/cases/pixeline/pixeline05.png",
      "/cases/pixeline/pixeline06.png",
      "/cases/pixeline/pixeline07.png",
      "/cases/pixeline/pixeline08.png",
      "/cases/pixeline/pixeline09.png",
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
      "Dynamisk visuel identitet",
    ],
    date: "2026-02-06",
    billede: "/cases/munich/pattern.png",
    gif: "/cases/munich/munich.gif",
    text: [
      "Jeg har designet en visuel identitet til München med afsæt i byens flag, der består af sorte og gule romber.",
      "Romben er splittet op i trekanter, som fungerer som identitetens modulære byggesten. Trekanterne kan kombineres frit og skaber et dynamisk, foranderligt system."
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
  {
    slug: "pi-day",
    titel: "Plakatgenerator til Pi-dag",
    undertitel: [
      "Interaktiv plakat"
    ],
    date: "2024-11-29",
    billede: "/cases/piday/piday01.png",
    gif: "/cases/piday/piday.png",
    text: [
      `Motivet på plakaten er inspireret af pi. Udvalgte variabler i sketchen kan styres med mus og tastatur, og plakaten kan eksporteres som png ved at trykke “v”.`,
      "Sketchen er lavet i Processing."
    ],
    imgdisplay: [
        "/cases/piday/piday_right.gif",
        "/cases/piday/piday_rotate.gif",
        "/cases/piday/piday_zoom.gif",

    ],
  },
  {
    slug: "sakura island",
    titel: "Blender: Sakura island",
    undertitel: [
    ],
    date: "2024-11-15",
    billede: "/cases/sakura/sakura.png",
    gif: "/cases/sakura/sakura.gif",
    text: [
      "Visualisering af min egen ø i et 3D-miljø med afsæt i form, farve og komposition."
    ],
    imgdisplay: [
      "/cases/sakura/sakura1.gif",
      "/cases/sakura/sakura2.gif",
      "/cases/sakura/sakura3.gif",
    ],
  },
    {
    slug: "shecanplay",
    titel: "Rebrand af SheCanPlay",
    undertitel: [
      "Koncept: formløshed"
    ],
    date: "2025-12-12",
    billede: "/cases/shecanplay/shecanplay8.png",
    gif: "/cases/sakura/sakura.gif",
    text: [
      `“Du kan forblive formløs. Du kan tage en form. Du kan tage en form nu, du kan tage en form senere. Dit valg, dit behov”`,
      "SheCanPlay er en dansk nonprofit-organisation, der arbejder for at styrke unge kvinder og kønsminoriteters deltagelse, synlighed og muligheder i musikbranchen. Organisationen tilbyder gratis talentudviklingsforløb, community, brancheindsigt og adgang til kreative faciliteter.",
      `Organisationen ønsker en visuel identiet, der åbner op for en “endorsed brands”-struktur for de artister, der ønsker at signalere deres tilhørsforhold til SheCanPlay, uden at overdøve den spirende artists egen identitet.`
    ],
    imgdisplay: [
      "/cases/shecanplay/shecanplay1.png",
      "/cases/shecanplay/shecanplay2.png",
      "/cases/shecanplay/shecanplay3.png",
      "/cases/shecanplay/shecanplay4.png",
      "/cases/shecanplay/shecanplay5.png",
      "/cases/shecanplay/shecanplay6.png",
      "/cases/shecanplay/shecanplay7.png",
      "/cases/shecanplay/shecanplay8.png",
      "/cases/shecanplay/shecanplay9.png",
      "/cases/shecanplay/shecanplay10.png",
      "/cases/shecanplay/shecanplay11.png",
    ],
  },
];
