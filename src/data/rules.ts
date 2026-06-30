export interface RuleDef {
  id: string;
  group: string;
  post: string;
  label: string;
}

export const RULES: RuleDef[] = [
  {
    id: "react/jsx-over-dom",
    group: "React",
    post: "Qué es React",
    label: "Usar JSX para describir la interfaz; nunca manipular el DOM directamente con document.createElement o innerHTML",
  },
  {
    id: "react/component-function",
    group: "React",
    post: "Qué es React",
    label: "Cada componente es una función JS que retorna JSX con un único elemento raíz. Todo estado local se declara con useState; nunca variables sueltas fuera del hook",
  },
  {
    id: "react/props-readonly",
    group: "React",
    post: "Qué es React",
    label: "Las props son de solo lectura: el componente nunca las muta. Si se necesita un cambio externo, el padre expone un callback y el hijo lo llama",
  },
];
