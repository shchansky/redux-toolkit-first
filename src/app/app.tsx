import * as Features from "../modules";

export function App() {
  return (
    <>
      <Features.Counter />
      <hr />
      <Features.StringifyContent />

      <hr />

      <Features.MutatedContent />
    </>
  );
}
