export const TREATMENTS = [
  "Consultație generală",
  "Fațete dentare",
  "Implantologie",
  "Ortodonție",
  "Albire dentară",
  "Stomatologie generală",
  "Pedodonție",
  "Parodontologie",
  "Endodonție",
  "Chirurgie orală",
  "Profilaxie",
  "Radiologie",
  "Turism dentar",
  "Altele",
] as const;

export const CONTACT = {
  phone: "+40 749 165 211",
  phoneHref: "tel:+40749165211",
  whatsapp: "https://wa.me/40749165211",
  email: "ivanmariansofineti@gmail.com",
  address: {
    street: "Strada Andrei Mureșan 5",
    city: "435500 Sighetu Marmației",
  },
  maps: "https://maps.app.goo.gl/Y8AWSVvfizCp2ah17",
  facebook: "https://www.facebook.com/royal.3d.smile.design/",
  schedule: {
    weekdays: "Luni – Vineri: 08:00 – 16:00",
    saturday: "Sâmbătă: Închis",
    sunday: "Duminică: Închis",
  },
} as const;

export const TEAM = {
  doctors: [
    {
      name: "Dr. Șofineți Ivan Marian",
      role: "Fondator · Estetică Dentară",
      image: "/images/echipa/Ivan%20-%20transparent.png",
      lead: true,
    },
    {
      name: "Dr. Brigitta",
      role: "Ortodonție",
      image: "/images/echipa/Brigitte%20-%20transparent.png",
      lead: false,
    },
    {
      name: "Dr. Andreea",
      role: "Parodontologie",
      image: "/images/echipa/Andreea%20-%20transparent.png",
      lead: false,
    },
    {
      name: "Dr. Ionela",
      role: "Pedodonție",
      image: "/images/echipa/Ionela%20-%20transparent.png",
      lead: false,
    },
    {
      name: "Dr. Ionuț",
      role: "Endodonție & Chirurgie",
      image: "/images/echipa/Ionut%20-%20transparent.png",
      lead: false,
    },
  ],
  assistants: [
    { name: "Ioana", role: "Asistentă", image: "/images/echipa/Ioana%20-%20transparent.png" },
    { name: "Naomi", role: "Asistentă", image: "/images/echipa/Naomi%20-%20transparent.png" },
    { name: "Maria", role: "Asistentă", image: "/images/echipa/Maria%20-%20transparent.png" },
  ],
} as const;
