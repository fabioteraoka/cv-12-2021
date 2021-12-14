import { MdEngineering } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';
import {
  FaProjectDiagram,
  FaBusinessTime,
  FaCss3Alt,
  FaReact
} from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { AiFillHtml5 } from 'react-icons/ai';

import { IoLogoJavascript } from 'react-icons/io5';
import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';
import { HardSkillsItens } from './HardSkillsItens';

export function Skills() {
  return (
    <>
      <Container>
        <SectionTitle title=" HardSkills" />
        <section>
          <HardSkillsItens title="Engenharia" icon={<MdEngineering />} />
          <HardSkillsItens title="Manutenção" icon={<GiAutoRepair />} />
          <HardSkillsItens title="Planejamento" icon={<FaProjectDiagram />} />
          <HardSkillsItens title="Gestão de pessoas" icon={<RiTeamLine />} />
          <HardSkillsItens title="Negociação" icon={<FaBusinessTime />} />
        </section>
      </Container>
      <Container>
        <SectionTitle title=" Skills em desenvolvimento" />
        <section>
          <HardSkillsItens title="HTML" icon={<AiFillHtml5 />} />
          <HardSkillsItens title="CSS" icon={<FaCss3Alt />} />
          <HardSkillsItens title="Javascript" icon={<IoLogoJavascript />} />
          <HardSkillsItens title="React" icon={<FaReact />} />
        </section>
      </Container>
    </>
  );
}
