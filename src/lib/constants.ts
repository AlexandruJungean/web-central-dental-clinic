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
    weekdays: "Luni – Vineri: 09:00 – 18:00",
    saturday: "Sâmbătă: 09:00 – 14:00",
    sunday: "Duminică: Închis",
  },
} as const;

export const TEAM = {
  doctors: [
    { name: "Dr. Șofineți Ivan Marian", role: "Fondator · Estetică Dentară", lead: true },
    { name: "Dr. Brigitta", role: "Ortodonție", lead: false },
    { name: "Dr. Andreea", role: "Parodontologie", lead: false },
    { name: "Dr. Ionela", role: "Pedodonție", lead: false },
    { name: "Dr. Ionuț", role: "Endodonție & Chirurgie", lead: false },
  ],
  assistants: [
    { name: "Ioana", role: "Asistentă" },
    { name: "Naomi", role: "Asistentă" },
    { name: "Maria", role: "Asistentă" },
  ],
} as const;
