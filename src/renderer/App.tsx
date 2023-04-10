import ActivityList from 'components/ActivityList';
import { MenuOutlined } from '@ant-design/icons';
import './App.css';
import Functional from 'components/Functional';
import Content from 'components/Content';
import { IpcRendererEvent } from 'electron';
import useIpcRenderer from '../hooks/useIpcRenderer';

function App() {
  const onMainLog = (event: IpcRendererEvent, value: any) => {
    console.log(`onMainLog:${value}`);
  };

  useIpcRenderer({
    main_log: onMainLog,
  });

  const activities = [
    {
      key: '1',
      label: <MenuOutlined />,
      children: 'TEST ACTIVITY',
    },
  ];

  const contents = [
    {
      key: '1',
      label: 'Content',
      children: 'TEST Content',
    },
  ];

  const functionals = [
    {
      key: '1',
      label: 'Logs',
      children: 'TEST LOG',
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
          <div className="middle-center-upper">
            <Content contents={contents} />
          </div>
          <div className="middle-center-lower">
            <Functional functionals={functionals} />
          </div>
        </div>
        <div className="middle-right" />
      </div>
      <div className="bottom" />
    </div>
  );
}

export default App;
