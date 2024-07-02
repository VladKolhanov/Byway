import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/instructor/dashboard">Instructor</Link>
        <Link to="/admin/main">Admin</Link>
      </div>
      Admin page
    </div>
  );
};

export default AdminPage;
