import "./styles.scss";

const Button = ({ link, text, className }) => {
  return (
    <button onClick={() => window.open(link, "_blank")} className={className}>
      {text}
    </button>
  );
};

export default Button;
