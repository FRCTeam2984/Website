import React from "react"
import { colors } from "../theme"
import Container from "../container"
import ExternalLink from "./externalLink"
import ExternalLinkIcon from "./externalLinkIcon"
import { FaGithub, FaDiscord } from "react-icons/fa"
import Button from "../Helpers/button"

const Footer = () => (
  <footer
    style={{
      backgroundColor: colors.lightlightgray,
      border: "1px solid " + colors.lightgray,
      borderTopStyle: "solid",
      borderRightStyle: "none",
      borderBottomStyle: "none",
      borderLeftStyle: "none",
      marginBottom: "auto",
      minHeight: "200px",
    }}
  >
    <Container>
      <div className="row" css={{ marginTop: "25px" }}>
        <div className="col-12 col-md-4">
          <h3
            style={{
              marginBottom: "20px",
              marginTop: "25px",
            }}
          >
            Contact Us
          </h3>
          <div
            style={{
              marginBottom: "3px",
            }}
          >
            750 Nautilus St., La Jolla, CA 92037
          </div>
          <div>
            <ExternalLink href="mailto:ljhsvikingrobotics@gmail.com">
              ljhsvikingrobotics@gmail.com
            </ExternalLink>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <h3
            style={{
              marginBottom: "20px",
              marginTop: "25px",
            }}
          >
            Join Us
          </h3>
          <div>
            <ExternalLinkIcon
              href="https://github.com/FRCTeam2984"
              size="32px"
              marginRight="10px"
            >
              <FaGithub />
            </ExternalLinkIcon>
            <ExternalLinkIcon
              href="https://discordapp.com/invite/RshDdxa"
              size="32px"
            >
              <FaDiscord />
            </ExternalLinkIcon>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <h3
            style={{
              marginBottom: "20px",
              marginTop: "25px",
            }}
          >
            Support Us
          </h3>
          <div>
            <ExternalLink href="https://www.foundationofljhs.com/donate-to-academics.html#roboticsteam">
              <Button>Donate</Button>
            </ExternalLink>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "25px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Vikings Robotics
      </div>
    </Container>
  </footer>
)

export default Footer
