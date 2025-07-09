import { useNavigate } from "react-router";

export default function NavButton({ target = "/", children }) {
  const navigate = useNavigate();
  return <button onClick={() => navigate(target)}>{children}</button>;
}
