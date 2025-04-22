import React, { KeyboardEvent } from 'react';
import styled from 'styled-components';

interface TabFilterProps {
  tabs: { id: string; label: string }[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid #E0E0E0;
  overflow-x: auto;
`;
const TabBtn = styled.button<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ selected }) => (selected ? '#0F4C81' : 'transparent')};
  color: ${({ selected }) => (selected ? '#0F4C81' : '#424242')};
  cursor: pointer;
  &:focus { outline: none; box-shadow: 0 0 0 2px rgba(15,76,129,0.5); }
`;

export const TabFilter: React.FC<TabFilterProps> = ({ tabs, selectedId, onSelect }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === 'ArrowRight') {
      const next = (idx + 1) % tabs.length;
      onSelect(tabs[next].id);
    } else if (e.key === 'ArrowLeft') {
      const prev = (idx - 1 + tabs.length) % tabs.length;
      onSelect(tabs[prev].id);
    }
  };
  return (
    <TabList role="tablist">
      {tabs.map((tab, idx) => (
        <TabBtn
          key={tab.id}
          role="tab"
          id={`tab-${tab.id}`}
          selected={tab.id === selectedId}
          aria-selected={tab.id === selectedId}
          aria-controls={`panel-${tab.id}`}
          onClick={() => onSelect(tab.id)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
        >
          {tab.label}
        </TabBtn>
      ))}
    </TabList>
  );
};