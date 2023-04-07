import ActivityList from 'components/ActivityList';
import { MenuOutlined } from '@ant-design/icons';
import './App.css';

function App() {
  const activities = [
    {
      key: '1',
      label: <MenuOutlined />,
      children: 'TEST ACTIVITY',
    },
  ];

  return (
    <div className="container">
      <div className="top" />
      <div className="middle">
        <div className="middle-left">
          <ActivityList activities={activities} />
        </div>
        <div className="middle-center">
          <div className="middle-center-upper" />
          <div className="middle-center-lower">
            {/* <Functional functionals={functionals} /> */}
          </div>
        </div>
        <div className="middle-right" />
      </div>
      <div className="bottom" />
    </div>
  );
}

export default App;
