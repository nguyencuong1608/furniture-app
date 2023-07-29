import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrollY = document.documentElement.scrollTop;
    if (scrollY > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, [visible]);

  return (
    <Wrapper>
      <div style={{ display: visible ? "inline" : "none" }}>
        <FontAwesomeIcon
          onClick={scrollToTop}
          style={{
            fontSize: "20px",
            padding: "10px",
            backgroundColor: "var(--clr-grey-9)",
          }}
          icon={faChevronUp}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  overflow: hidden;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 6rem;
  right: 4rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

export default ScrollUpButton;
