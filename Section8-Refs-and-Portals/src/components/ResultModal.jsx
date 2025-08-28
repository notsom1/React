import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ ref, reset, targetTime, timeRemaining }) {
  const dialog = useRef();

  const hasLost = timeRemaining <= 0;
  const formattedTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {hasLost ? <h2>You Lost</h2> : <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        Your time was <strong>{formattedTime} seconds</strong>{" "}
      </p>
      <form method="dialog" onSubmit={reset}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
