import { Link } from 'react-router-dom';

import { useTheme } from '@/hooks/useTheme';
import { ThemeToggle } from '@/ui/components/organisms/ThemeToggle';

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/instructor/dashboard">Instructor</Link>
        <Link to="/admin/main">Admin</Link>
      </div>
      <h1>Hello</h1>
      <p>{theme}</p>
      <ThemeToggle />
    </div>
  );
};

export default HomePage;
