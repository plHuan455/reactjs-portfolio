import { ForwardRefRenderFunction, forwardRef } from "react";
import { mapModifiers } from "../../../utils/funcs";

type Spacing = 'noPt' | 'noPb';
interface SectionProps {
  modifiers?: Spacing[];
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: ForwardRefRenderFunction<HTMLElement, SectionProps> = ({ className, children, modifiers, id }, ref) => {
  return <section className={mapModifiers(`${className? `${className} `: ''}t-section`, modifiers)} id={id} ref={ref}>
    {children}
  </section>
}



export default forwardRef(Section);;