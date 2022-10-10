import { mapModifiers } from "../../../utils/funcs";

type Spacing = 'noPt' | 'noPb';
interface SectionProps {
  modifiers?: Spacing[];
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({children, modifiers}) => {
  return <section className={mapModifiers("t-section", modifiers)}>
    {children}
  </section>
}

export default Section;