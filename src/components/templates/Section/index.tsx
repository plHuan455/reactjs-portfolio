import { mapModifiers } from "../../../utils/funcs";

type Spacing = 'noPt' | 'noPb';
interface SectionProps {
  modifiers?: Spacing[];
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ className, children, modifiers, id }) => {
  return <section className={mapModifiers(`${className? `${className} `: ''}t-section`, modifiers)} id={id}>
    {children}
  </section>
}

export default Section;