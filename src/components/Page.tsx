import { useNavigate } from "react-router-dom";
import { backButton } from "@telegram-apps/sdk-react";
import { PropsWithChildren, useEffect } from "react";
import styled from "styled-components";

export function Page({
  children,
  back = true,
}: PropsWithChildren<{
  /**
   * True if it is allowed to go back from this page.
   */
  back?: boolean;
}>) {
  const navigate = useNavigate();

  useEffect(() => {
    if (back) {
      backButton.show();
      return backButton.onClick(() => {
        navigate(-1);
      });
    }
    backButton.hide();
  }, [back]);

  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative; /* Required for pseudo-element positioning */
  max-width: 400px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 100px;
  box-sizing: border-box;
  // border: 1px solid red;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(235deg, rgba(74, 204, 28, 0.8) 15%, rgba(74, 204, 28, 0) 100%);
    opacity: 0.08; /* Apply opacity only to the background */
    z-index: -1; /* Ensure the background is behind the content */
  }
`;
