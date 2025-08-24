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
          return (
            <div>
              <div>
                <label htmlFor="">
                  <input
                    type={isMultiple ? "checkbox" : "radio"}
                    style={styles?.optionsInput}
                  />
                  <span>{option.title}</span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

export default PollWidget;
