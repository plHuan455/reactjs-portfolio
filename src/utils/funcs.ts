type RemainClassName = string | undefined | boolean | RemainClassName[];
export const mapModifiers = (
  mainClassNames: string,
  ...remainClassNames: RemainClassName[]
) => {
  const mainClassNameList = mainClassNames.split(" ");
  const mainClassName = mainClassNameList[mainClassNameList.length - 1];
  if (remainClassNames.length === 0) return mainClassNames;

  const classListResult: string[] = [mainClassNames];

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

export const formatDateDDMMYYYY = (date: Date, unitDot?: boolean) => {
  let day: string | number = date.getDate();
  let month: string | number = date.getMonth() + 1;
  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  if (unitDot) return `${day}.${month}.${date.getFullYear()}`;
  return `${day}/${month}/${date.getFullYear()}`;
};

export const addDate = (date: Date, days: number) =>
  new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

export const getFirstDateInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getLastDateInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

export const getDateList = (date: Date) => {
  let firstDate: Date = getFirstDateInMonth(date);
  let lastDate: Date = getLastDateInMonth(date);

  let currDate = new Date(firstDate);

  const result: Date[] = [];
  while(currDate <= lastDate) {
    result.push(currDate);
    currDate = addDate(currDate, 1);
  }

  currDate = new Date(firstDate);
  while(currDate.getDay() !== 0) {
    currDate = addDate(currDate, -1);
    result.unshift(currDate);
  }

  currDate = new Date(lastDate);
  while(currDate.getDay() !== 6){
    currDate = addDate(currDate, 1);
    result.push(currDate);
  }

  return result;
};

export const convertMoney = (money: number): string => {
  if (money >= 1000000000) {
    return `${money / 1000000000}B`;
  }
  if (money >= 1000000) return `${money / 1000000}M`;
  if (money >= 1000) return `${money / 1000}K`;

  return String(money);
};

export const isOutOfMonth = (date: Date, month: number): boolean => {
  return date.getMonth() === month ? true : false;
}

export const isADate = (date1: Date, date2: Date): boolean => {
  const newDate1 = new Date(new Date(date1).setHours(0 , 0, 0, 0));
  const newDate2 = new Date(new Date(date2).setHours(0, 0, 0, 0));
  return newDate1.getTime() === newDate2.getTime();
}

export const numberToMoney = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/**
 * 
 * @param num 
 * @param range //e.g: 1, 2, 3, ...
 */
export const numberToRand = (num: number, range: number): number => {
  const str = `${num}${Array(range).fill('0').join('')}`;
  return Number(str.substring(0, range))
}

export const addZero = (num: number):string => {
  return num < 10 ? `0${num}` : String(num);
} 

export const getHashOfString = (str: string) => {
  const charArray = Array.from(str);
  return charArray.reduce((total, _char, index) => {
    return total += (str.charCodeAt(index) * index);
  }, 0);
}

export const getAvatarColors = (name: string) => {
  const hash = getHashOfString(name);
  const h = Math.floor((hash % (360 - 100)) + 0);
  const s = Math.floor((hash % (100 - 0)) + 0);
  const l = Math.floor((hash % (100 - 0)) + 0);
  return {color: `hsl(${h}, 100%, 38%)`, backgroundColor: `hsl(${h}, 93%, 80%)`};
};

export const convertHours = (hours: string) => {
  const hoursNum = Number(hours);
  if(isNaN(hoursNum)) return 0;
  if(hoursNum > 23) return 23;
  if(hoursNum < 0) return 0;
  return hoursNum
}

export const convertMinutes = (minutes: string) => {
  const minutesNum = Number(minutes);
  if(isNaN(minutesNum)) return 0;
  if(minutesNum > 59) return 59;
  if(minutesNum < 0) return 0;
  return minutesNum;
}

export const getLocalStorageItem = (key: string) => {
  const data = localStorage.getItem(key);
  if(data) {
    return JSON.parse(data);
  }
  return undefined
}