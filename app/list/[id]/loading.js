import { CircleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {" "}
      <CircleLoader color="#36d7b7" size={150} />
    </div>
  );
}
