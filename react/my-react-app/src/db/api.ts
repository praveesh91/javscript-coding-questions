import { Option, Poll } from "../types";

export const fetchPoll = async (pollId: number): Promise<Poll> => {
  const response = await fetch(`http://localhost:3000/polls/${pollId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch the poll");
  }
  return response.json();
};

export const submitVote = async (
  pollId: number,
  selectOptions: number[]
): Promise<Option[]> => {
  const poll = await fetchPoll(pollId);
  const updatedOptions = poll.options.map((option) => {
    if (selectOptions.includes(option.id)) {
      return { ...option, votes: option.votes + 1 };
    }
    return option;
  });
  const totalCount = updatedOptions.reduce(
    (acc, option) => acc + option.votes,
    0
  );
  await fetch(`http://localhost:3000/polls/${pollId}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ options: updatedOptions, totalCount }),
  });
  return updatedOptions;
};

export const removeVote = async (
  pollId: number,
  selectOptions: number[]
): Promise<Option[]> => {
  const poll = await fetchPoll(pollId);
  const updatedOptions = poll.options.map((option) => {
    if (selectOptions.includes(option.id)) {
      return { ...option, votes: option.votes > 0 ? option.votes - 1 : 0 };
    }
    return option;
  });
  const totalCount = updatedOptions.reduce(
    (acc, option) => acc + option.votes,
    0
  );
  await fetch(`http://localhost:3000/polls/${pollId}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ options: updatedOptions, totalCount }),
  });
  return updatedOptions;
};
