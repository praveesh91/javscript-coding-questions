import { Option, Poll } from "../types";

export const fetchPoll = async (pollId: number): Promise<Poll> => {
  const response = await fetch(`http://localhost:3000/polls/${pollId}`);
  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch the poll");
  }
  return response.json();
};

export const removeVote = async (
  pollId: number,
  selectOptions: number
): Promise<Option> => {};
