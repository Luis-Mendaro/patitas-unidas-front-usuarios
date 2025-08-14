import { FaDog, FaCat, FaPaw } from "react-icons/fa";

export const speciesFilters = [
  { label: "Perro", value: "dog", icon: <FaDog className="text-muted" size={40} /> },
  { label: "Gato", value: "cat", icon: <FaCat className="text-muted" size={40} /> },
  { label: "Otros", value: "other", icon: <FaPaw className="text-muted" size={40} /> },
];

export const sizeFilters = [
  { label: "Chico", value: "small" },
  { label: "Mediano", value: "medium" },
  { label: "Grande", value: "large" },
];

export const sexFilters = [
  { label: "Hembra", value: "female" },
  { label: "Macho", value: "male" },
];

export const departamentosUruguay = [
  "Artigas",
  "Canelones",
  "Cerro Largo",
  "Colonia",
  "Durazno",
  "Flores",
  "Florida",
  "Lavalleja",
  "Maldonado",
  "Montevideo",
  "Paysandú",
  "Río Negro",
  "Rivera",
  "Rocha",
  "Salto",
  "San José",
  "Soriano",
  "Tacuarembó",
  "Treinta y Tres",
];
