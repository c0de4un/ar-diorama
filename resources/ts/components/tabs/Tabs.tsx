import React, { PropsWithChildren, useState } from 'react';

import { Tab } from './Tab';
import { TabInfo } from './TabInfo';

type TabsProps = {
  className?: string;
  tabs: Array<TabInfo>;
};

export function Tabs(props: PropsWithChildren<TabsProps>) {
  const [activeTab, setActiveTab] = useState(props.tabs[0].name);
  
  /**
   * Click handler for Tab
   * @param {TabInfo} _tab
   */
  const onClick = (_tab: TabInfo) => {
    const _isChanged: boolean = activeTab === _tab.name;

    setActiveTab(_tab.name);
    
    if (_isChanged) {
      _tab.callback();
    }
  };

  return (
    <div
      className={'tabs flex justify-around'}
    >
      {
        props.tabs.map(_tab => {
          return (
            <Tab
              key={_tab.name}
              name={_tab.name}
              label={_tab.label}
              enabled={_tab.enabled}
              selected={activeTab === _tab.name}
              callback={() => {
                onClick(_tab);
              }}
            >
              { _tab.component }
            </Tab>
          );
        })
      }
    </div>
  );
}
