import * as Features from "../modules";

export function App() {
  return (
    <>
      <Features.Counter />
      <hr />
      <Features.StringifyContent />
      <hr />
      <Features.UnmutatedContent />
      <hr />
      <Features.MutatedContent />
    </>
  );
}
