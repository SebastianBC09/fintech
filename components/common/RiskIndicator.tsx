import React from 'react';
import styled from 'styled-components';
import { RiskLevel } from '@/types/product';


interface RiskIndicatorProps {
  level: RiskLevel;
  showText?: boolean;
}
const levelMap: Record<RiskLevel, { text: string; value: number }> = {
  very_low: { text: 'Muy bajo', value: 1 }, low: { text: 'Bajo', value: 2 }, medium: { text: 'Medio', value: 3 }, high: { text: 'Alto', value: 4 }, very_high: { text: 'Muy alto', value: 5 }
};
const colorMap: Record<RiskLevel, string> = {
  very_low: '#4CAF50', low: '#66BB6A', medium: '#FFC107', high: '#FF7043', very_high: '#F44336'
};
const ContainerRI = styled.div`
  display: flex;
  align-items: center;
`;
const Bars = styled.div`
  display: flex;
  gap: 0.25rem;
`;
const Bar = styled.div<{ filled: boolean; color: string }>`
  width: 0.5rem;
  height: 1.5rem;
  background-color: ${({ filled, color }) => (filled ? color : '#E0E0E0')};
  border-radius: 0.125rem;
`;
const TextRI = styled.span`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #424242;
`;

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ level, showText = true }) => {
  const { text, value } = levelMap[level];
  return (
    <ContainerRI aria-label={`Nivel de riesgo: ${text}`}>
      <Bars>
        {Array.from({ length: 5 }).map((_, i) => (
          <Bar key={i} filled={i < value} color={colorMap[level]} aria-hidden="true" />
        ))}
      </Bars>
      {showText && <TextRI>{text}</TextRI>}
    </ContainerRI>
  );
};

export default RiskIndicator;