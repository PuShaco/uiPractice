import classNames from "classnames";

type Props = {
  height: number;
  width: number;
  flex?: number;
};

export default function SkeletonCard({ height, width, flex }: Props) {
  const baseClasses = "rounded-lg bg-gray-300 animate-pulse";

  return (
    <div
      className={classNames(baseClasses)}
      style={{
        minHeight: `${height}px`,
        minWidth: `${width}%`,
        flex: flex ? `${flex} 1 0%` : "0 0 auto", // flex 값이 있을 때는 flex-grow 사용
      }}
    ></div>
  );
}
