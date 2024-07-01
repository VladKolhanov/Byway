import { Link } from 'react-router-dom';

import { Button, Icon, ThemeToggle } from '@/components/ui';
import { Icons } from '@/utils/constants';
import { useTheme } from '@/utils/hooks';

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/instructor/dashboard">Instructor</Link>
        <Link to="/admin/main">Admin</Link>
      </div>
      <Button label="Label" size="md" variant="primary-1" />
      <Button label="Sign Up" size="xsm" variant="primary-2" />
      <Button label="Sign Up" variant="primary-3" />
      <Button label="Delete" variant="primary-4" />
      <Button label="Save" variant="primary-5" />
      <Button
        label="Start your instructor journey"
        size="md"
        variant="primary-6"
      />
      <Button label="Add Course" size="md" variant="primary-7" />
      <Button
        label="Share Profile"
        iconStart={<Icon icon={Icons.SHARE} />}
        size="md"
        variant="primary-8"
      />
      <Button label="Upload Image" size="md" variant="border-1" />
      <Button label="Move to draft" size="md" variant="border-2" />
      <Button label="Website" size="md" variant="outline-1" />
      <Button label="Log In" size="xsm" variant="outline-2" />
      <Button label="Delete" variant="ghost-1" />
      <Button label="Block" variant="ghost-2" />
      <h1>Hello</h1>
      <p>{theme}</p>
      <ThemeToggle />
    </div>
  );
};

export default HomePage;
