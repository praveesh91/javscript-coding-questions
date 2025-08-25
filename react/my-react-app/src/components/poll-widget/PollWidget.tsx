import { CSSProperties, useEffect, useState } from "react";
import { Option } from "../../types";

interface PollStyles {
  container?: CSSProperties;
  title?: CSSProperties;
  optionsContainer?: CSSProperties;
  optionsLabel?: CSSProperties;
  optionsInput?: CSSProperties;
  optionsVote?: CSSProperties;
  progressBar?: CSSProperties;
  progressBarFill?: CSSProperties;
  removeButton?: CSSProperties;
}

interface PollProps {
  pollId: number;
  title: string;
  options: Option[];
  isMultiple: boolean;
  onVote: (pollId: number, selectedOptions: number[]) => Promise<Option[]>;
  onVoteRemove: (
    pollId: number,
    selectedOptions: number[]
  ) => Promise<Option[]>;
  styles?: PollStyles;
}

const PollWidget: React.FC<PollProps> = ({
  isMultiple = false,
  onVote,
  onVoteRemove,
  options,
  pollId,
  title,
  styles,
}) => {
  const [currentOption, setcurrentOption] = useState<Option[]>(options);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  useEffect(() => {
    const storedVotes = localStorage.getItem(`poll-${pollId}`);
    if (storedVotes) {
      setSelectedOptions(JSON.parse(storedVotes));
    }
  }, [pollId]);

  const totalVotes = currentOption.reduce(
    (acc, option) => acc + option.votes,
    0
  );

  const handleVote = async (optionId: number) => {
    let newSelectedOptions: number[];
    if (isMultiple) {
    } else {
      newSelectedOptions = [optionId];
      if (selectedOptions.length > 0 && selectedOptions[0] == optionId) {
        const updatedOptions = await onVoteRemove(pollId, newSelectedOptions);
        setcurrentOption(updatedOptions);
      }
      const updatedOptions = await onVote(pollId, newSelectedOptions);
      setcurrentOption(updatedOptions);
    }
    setSelectedOptions(newSelectedOptions);
    localStorage.setItem(`poll=${pollId}`, JSON.stringify(newSelectedOptions));
  };
  const removeVote = async () => {
    const upadtedOptions = await onVoteRemove(pollId, selectedOptions);
    setSelectedOptions([]);
    localStorage.removeItem(`poll-${pollId}`);
    setcurrentOption(upadtedOptions);
  };

  return (
    <fieldset role="group" style={styles?.container}>
      <legend style={styles?.title}>{title}</legend>
      <div
        style={{
          ...styles?.optionsContainer,
          maxHeight: currentOption.length > 4 ? "200px" : "auto",
        }}
      >
        {currentOption.map((option) => {
          const percentage =
            totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
          return (
            <div>
              <div>
                <label htmlFor="">
                  <input
                    id={`option-${option.id}`}
                    type={isMultiple ? "checkbox" : "radio"}
                    onChange={() => handleVote(option.id)}
                    checked={selectedOptions.includes(option.id)}
                    style={styles?.optionsInput}
                  />
                  <span>{option.title}</span>
                </label>
                {selectedOptions.length > 0 && (
                  <span>
                    {option.votes}votes {percentage.toFixed(1)}
                  </span>
                )}
              </div>
              <div
                className="w-full bg-gray-200 rounded-full h-2"
                style={styles?.progressBar}
              >
                {selectedOptions.length > 0 && (
                  <div
                    className="bg-blue-500 h-full rounded-full transform origin-left"
                    style={{
                      ...styles?.progressBarFill,
                      transform: `scale(${percentage / 100})`,
                    }}
                  ></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {selectedOptions.length > 0 && (
        <button onClick={removeVote}>Remove vote</button>
      )}
    </fieldset>
  );
};

export default PollWidget;
