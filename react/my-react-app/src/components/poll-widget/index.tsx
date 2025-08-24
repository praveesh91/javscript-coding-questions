import { useEffect, useState } from "react";
import { Poll as PollType } from "../../types";
import PollWidget from "./PollWidget";
import { fetchPoll } from "../../db/api";

const Poll = () => {
  const [pollData, setPollData] = useState<PollType | null>(null);

  const loadPoll = async () => {
    try {
      const data = await fetchPoll(41);
      setPollData(data);
    } catch (error) {
      console.log("Failed to load", error);
    }
  };

  useEffect(() => {
    loadPoll();
  }, []);

  const submitVote = () => {};
  const removeVote = () => {};

  if (!pollData) {
    return <>Loading...</>;
  }
  return (
    <div>
      <PollWidget
        pollId={pollData.id}
        title={pollData.question}
        options={pollData.options}
        onVote={submitVote}
        onVoteRemove={removeVote}
        styles={{}}
      />
    </div>
  );
};

export default Poll;
