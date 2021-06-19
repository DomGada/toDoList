import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // title is the destructured copmponent of the props, however you can use props.title
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Hide" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
}; // this sets the default props.title
Header.propTypes = {
  title: PropTypes.string.isRequired,
}; // if we want to set a specific type for one of our props, we can import prop-types, and explicity set the type.

export default Header;
