import { ReactNode } from 'react';
import { SkillsContainer } from './styles';

interface HardSkillsItensProps {
  title: string;
  icon: ReactNode;
}

export function HardSkillsItens({ title, icon }: HardSkillsItensProps) {
  return (
    <SkillsContainer>
      {icon}
      <p>{title}</p>
    </SkillsContainer>
  );
}
