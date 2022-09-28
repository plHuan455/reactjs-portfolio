type RemainClassName = string | undefined | boolean | RemainClassName[];
export const mapModifiers = (
  mainClassName: string,
  ...remainClassNames: RemainClassName[]
) => {
  if (remainClassNames.length === 0) return mainClassName;

  const classListResult: string[] = [mainClassName];

  const mapClassName = (classNameList: RemainClassName[]) => {
    classNameList.forEach((value) => {
      if (typeof value === "object") {
        mapClassName(value);
        return;
      }
      if (value) {
        classListResult.push(`${mainClassName}-${value}`);
      }
    });
  };
  mapClassName(remainClassNames);

  return classListResult.join(" ");
};