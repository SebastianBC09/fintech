import React from 'react';
import styled from 'styled-components';
import { RiskLevel } from '@/types/product';

interface RiskIndicatorProps {
  level: RiskLevel;
  showText?: boolean;
}

const levelMap: Record<RiskLevel, { text: string; value: number }> = {
  very_low: { text: 'Muy bajo', value: 1 },
  low: { text: 'Bajo', value: 2 },
  medium: { text: 'Medio', value: 3 },
  high: { text: 'Alto', value: 4 },
  very_high: { text: 'Muy alto', value: 5 },
};

const colorMap: Record<RiskLevel, string> = {
  very_low: '#4CAF50',
  low: '#66BB6A',
  medium: '#FFC107',
  high: '#FF7043',
  very_high: '#F44336',
};

const ContainerRI = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
`;

const Bars = styled.div`
    display: flex;
    gap: 0.25rem;
    position: relative;
`;

const Bar = styled.div<{ $filled: boolean; $color: string }>`
    width: 0.375rem;
    height: ${props => props.$filled ? '1.75rem' : '1.5rem'};
    background-color: ${({ $filled, $color }) => ($filled ? $color : 'rgba(224, 224, 224, 0.5)')};
    border-radius: 2px;
    transition: all 0.2s ease;
    position: relative;
    bottom: ${props => props.$filled ? '0.125rem' : '0'};
    box-shadow: ${props => props.$filled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const TextRI = styled.span<{ $color: string }>`
    font-size: 0.875rem;
    font-weight: 500;
    color: ${props => props.$color};
    position: relative;
    transition: color 0.2s ease;
`;

const LabelRI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

const SubLabel = styled.span`
  font-size: 0.75rem;
  color: #757575;
`;

export const RiskIndicator: React.FC<RiskIndicatorProps> = ({ level, showText = true }) => {
  const { text, value } = levelMap[level];
  const color = colorMap[level];

  return (
    <ContainerRI aria-label={`Nivel de riesgo: ${text}`}>
      <Bars>
        {Array.from({ length: 5 }).map((_, i) => (
          <Bar
            key={i}
            $filled={i < value}
            $color={i < value ? color : 'rgba(224, 224, 224, 0.5)'}
            aria-hidden="true"
          />
        ))}
      </Bars>

      {showText && (
        <LabelRI>
          <TextRI $color={color}>{text}</TextRI>
          <SubLabel>Nivel de riesgo</SubLabel>
        </LabelRI>
      )}
    </ContainerRI>
  );
};