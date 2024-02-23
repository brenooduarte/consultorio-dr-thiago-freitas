import "./styles.scss";

const Button = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
