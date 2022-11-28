import Logo from '../logo/logo';

type FooterProps = {
  isContainer?: boolean;
};

function Footer({ isContainer = false }: FooterProps): JSX.Element {
  return (
    <footer className={`footer ${isContainer ? 'container' : ''}`}>
      <Logo type={'footer'} width={64} height={33} />
    </footer>
  );
}

export default Footer;
