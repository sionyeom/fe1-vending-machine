type LogProps = {
  text: string;
};

const Log: React.FC<LogProps> = ({ text }) => {
  return <div id="log-item">{text}</div>;
};

const LogContainer = () => {
  return (
    <div
      id="log-container"
      className="mt-4 px-3 border h-60 min-h-60 max-h-60 overflow-auto"
    >
      <Log text="구매완료" />
    </div>
  );
};

export default LogContainer;
