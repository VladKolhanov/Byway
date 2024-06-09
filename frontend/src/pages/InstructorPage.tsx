import { Link } from 'react-router-dom';

const InstructorPage = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/instructor/dashboard">Instructor</Link>
        <Link to="/admin/main">Admin</Link>
      </div>
      Instructor page
    </div>
  );
};

export default InstructorPage;
