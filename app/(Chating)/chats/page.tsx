"use client";
import { useState } from "react";
import LeftSideSection from "../../../components/chats/leftSideSection";
import FriendsList from "@/components/chats/FriendsList";
export default function ChatsHome() {
  const [isFriendListOpen, setIsFriendListOpen] = useState(true);
  return (
    <div className="flex flex-row max-h-screen">
      <section>
        <LeftSideSection
          isFriendListOpen={isFriendListOpen}
          setIsFriendListOpen={setIsFriendListOpen}
        />
      </section>
      <section>{isFriendListOpen ? <FriendsList /> : <></>}</section>
    </div>
  );
}
