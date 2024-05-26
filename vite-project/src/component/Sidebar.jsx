const Sidebar = ({ onClose }) => (
  <div>
    <button onClick={onClose}>X</button>
    <p>Home</p>
    <p>About</p>
    <p>Contact</p>
  </div>
);

export default Sidebar;