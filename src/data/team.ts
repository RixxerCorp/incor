export interface TeamMember {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Giovani Dias",
    role: "Cardiologia | Arritmologia | Ecocardiografia | Ergometria",
    image: "/images/team/01.jpg",
  },
  {
    name: "Dra. Jaíne Dias Ribeiro de Abreu",
    role: "Doenças do Aparelho Digestivo",
    image: "/images/team/05.jpg",
    imagePosition: "object-[center_12%]",
  },
  // PLACEHOLDER — nome, especialidade, CRM e foto ainda não confirmados pelo cliente.
  {
    name: "Dr. Hugo",
    role: "Especialidade a confirmar",
    image: "/images/team/04.jpg",
  },
];
