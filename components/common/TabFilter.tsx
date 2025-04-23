import React, { FC } from 'react';
import styled from 'styled-components';
import { Category, categoryLabels } from '@/types/category';

interface TabFilterProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 0.5rem;
    padding: 0.25rem;
    margin: 1rem 0;

    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        padding-bottom: 0.5rem;
    }
`;

const Tab = styled.button<{ $isActive: boolean }>`
    background: ${props => props.$isActive
            ? 'linear-gradient(135deg, #0F4C81 0%, #1A365D 100%)'
            : 'white'};
    color: ${props => props.$isActive ? 'white' : '#535353'};
    border: 1px solid ${props => props.$isActive ? 'transparent' : 'rgba(15, 76, 129, 0.15)'};
    border-radius: 12px;
    padding: 0.7rem 1.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.2s ease;
    white-space: nowrap;
    box-shadow: ${props => props.$isActive
            ? '0 4px 12px rgba(15, 76, 129, 0.2)'
            : '0 2px 4px rgba(0, 0, 0, 0.05)'};

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 5px 15px rgba(15, 76, 129, 0.15);
        background: ${props => props.$isActive
                ? 'linear-gradient(135deg, #0F4C81 0%, #1A365D 100%)'
                : 'rgba(15, 76, 129, 0.05)'};
    }

    &:active {
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        padding: 0.6rem 1.2rem;
        min-width: auto;
    }
`;

export const TabFilter: FC<TabFilterProps> = ({ selected, onSelect }) => {
  const categories = Object.keys(categoryLabels) as Category[];

  return (
    <TabsContainer>
      {categories.map((category) => (
        <Tab
          key={category}
          $isActive={category === selected}
          onClick={() => onSelect(category)}
          aria-selected={category === selected}
          role="tab"
        >
          {categoryLabels[category]}
        </Tab>
      ))}
    </TabsContainer>
  );
};