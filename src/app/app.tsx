import * as Features from "../modules";

export function App() {
  return (
    <>
      <Features.Counter />

      <Features.StringifyContent />

      <hr />

      <Features.MutatedPostContainer />
    </>
  );
}
