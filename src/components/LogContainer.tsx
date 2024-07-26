import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import vendingMachineStore from "../store/VendingMachineStore";

type LogProps = {
  text: string;
};

const Log: React.FC<LogProps> = ({ text }) => {
  return <div id="log-item">{text}</div>;
};

const LogContainer: React.FC = observer(() => {
  const { logs } = vendingMachineStore;
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs?.length]);

  return (
    <div
      id="log-container"
      ref={logContainerRef}
      className="mt-4 px-3 border h-60 min-h-60 max-h-60 overflow-auto"
    >
      {logs.map((text, i) => (
        <Log key={i} text={text} />
      ))}
    </div>
  );
});

export default LogContainer;
