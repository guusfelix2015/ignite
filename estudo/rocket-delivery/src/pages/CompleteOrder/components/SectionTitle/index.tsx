import { RegularText } from '../../../../components/Typography';
import * as S from './styles';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <S.SectionTitleContainer>
      {icon}
      <div>
        <RegularText color='subtitle'>{title}</RegularText>
        <RegularText size='s'>{subtitle}</RegularText>
      </div>
    </S.SectionTitleContainer>
  );
}
