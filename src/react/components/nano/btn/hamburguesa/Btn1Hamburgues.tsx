interface Btn1HamburguesProps {
  fn?: () => void;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  className?: string;
}

const Btn1Hamburgues: React.FC<Btn1HamburguesProps> = ({
  fn,
  isActive,
  setIsActive,
  className = "",
}) => {
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
        fn && fn();
      }}
      className={`hamburguer1 btnMenu ${className} ${isActive ? "active" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Btn1Hamburgues;
