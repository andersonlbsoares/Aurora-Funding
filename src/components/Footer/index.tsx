import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="aurora.png"
                  aria-label="homepage"
                  width="100px"
                  height="auto"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              {/* <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              /> */}
              <SocialLink
                href="https://www.instagram.com/aurorafunding/"
                src="instagram.svg"
              />
             
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
