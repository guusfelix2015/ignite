import * as S from './styles';

interface InfoWithIconProps {
  icon: React.ReactNode;
  text: string | React.ReactNode;
  iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
  return (
    <S.InfoWithIconContainer>
      <S.IconContainer iconBg={iconBg}>{icon}</S.IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </S.InfoWithIconContainer>
  );
}
