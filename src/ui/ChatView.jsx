import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getChats } from "../api/chat";

import Chat from "./Chat";

const ChatContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  overflow: auto;
  flex-direction: column-reverse;
`;

const ChatBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: radial-gradient(circle, rgba(191,34,195,1) 0%, rgba(253,187,45,1) 100%);
`;

// TODO: Create component