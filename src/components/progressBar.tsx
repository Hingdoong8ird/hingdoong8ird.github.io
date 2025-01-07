export type ProgressBarProps = {
  skill: string;
  progress: number;
};

const ProgressBar = ({ skill, progress }: ProgressBarProps) => {
  return (
    <div>
      <h6>{skill}</h6>
      <div className="progress mb-3">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
