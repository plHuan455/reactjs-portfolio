import { useEffect, useRef } from "react";
import Loading from "~atoms/Loading";
import Lottie from "~atoms/Lottie";
import jsonData from "./data.json";

const getRandomData = (count: number, data: any[]): any[] => {
  if(count >= data.length) return [...data];

  const newData = [...data];
  const result: any[] = [];
  for (let i = 0; i < count; i++) {
    result.push(...newData.splice(Math.random() * newData.length, 1));
  }
  return result;
};

const Test: React.FC = () => {
  // const randomData = (getRandomData(19, jsonData));
  const bottomShellRef= useRef<HTMLDivElement>(null);
  const moveBarRef = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef<boolean>(false);

  useEffect(() => {
    if(moveBarRef.current) {
      const mouseDownCallback = (e: MouseEvent | TouchEvent) => {
        isMouseDown.current = true;
      }

      const mouseUpCallback = (e: MouseEvent | TouchEvent) => {
        isMouseDown.current = false;
      }
      
      const mousemove = (e: MouseEvent) => {
        if(isMouseDown.current && moveBarRef.current && bottomShellRef.current){
          const {clientX, clientY} = e;
          // console.log({clientX, clientY});
          const bottomShellClientRect = bottomShellRef.current.getBoundingClientRect();
          bottomShellRef.current.style.height = `${bottomShellClientRect.y + bottomShellClientRect.height - clientY}px`;
        }
      }

      moveBarRef.current.addEventListener('mousedown', mouseDownCallback);
      moveBarRef.current.addEventListener('touchstart', mouseDownCallback);
      document.addEventListener('mouseup', mouseUpCallback);
      document.addEventListener('touchend', mouseUpCallback);

      document.addEventListener('mousemove', mousemove);
      document.addEventListener('touchmove', (e) => {
        if(isMouseDown.current && bottomShellRef.current){
          const bottomShellClientRect = bottomShellRef.current.getBoundingClientRect();

          const touch = e.touches[0] || e.changedTouches[0];
          const bottomShellHeight = bottomShellClientRect.y + bottomShellClientRect.height;
          bottomShellRef.current.style.height = `${bottomShellClientRect.y + bottomShellClientRect.height - touch.pageY}px`;
        }
      })
    }
  }, [])
  return <div style={{position: 'fixed', bottom: 0, right: 0}} >
    <div ref={bottomShellRef} style={{backgroundColor: 'orange', padding: '12px 8px'}}>
      <div>
        <div ref={moveBarRef} style={{textAlign: 'center', cursor: 'pointer'}}>^</div>
        <p>test sajdhksaj djksahd jk</p>
      </div>
    </div>
  </div>
}

export default Test;