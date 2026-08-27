export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Giovani Dias",
    role: "Cardiologia | Arritmologia | Ecocardiografia | Ergometria",
    image: "/images/team/01.jpg",
  },
  {
    name: "Dra. Lorena Fonseca",
    role: "Clínica Médica | Cardiologia | Hemodinâmica",
    image: "/images/team/02.jpg",
  },
  {
    name: "Dra. Carmen Carneiro",
    role: "Clínica Médica | Cardiologia",
    image: "/images/team/03.jpg",
  },
  {
    name: "Dr. Alex Ribeiro Pinto",
    role: "Medicina da Família | Geriatria",
    image: "/images/team/04.jpg",
  },
];
