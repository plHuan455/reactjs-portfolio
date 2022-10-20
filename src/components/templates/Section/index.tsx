import { mapModifiers } from "../../../utils/funcs";

type Spacing = 'noPt' | 'noPb';
interface SectionProps {
  modifiers?: Spacing[];
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ className, children, modifiers }) => {
  return <section className={mapModifiers(`${className? `${className} `: ''}t-section`, modifiers)}>
    {children}
  </section>
}

export default Section;