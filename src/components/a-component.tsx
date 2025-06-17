import type { StrictPropertyCheck } from "../shared/props";

interface AProps {
  username: string;
}

export function AComponent<T extends AProps>(
  props: StrictPropertyCheck<T, AProps, `T has excess property`>
) {
  const { username } = props;

  return (
    <>
      <h1>AComponent</h1>
      {username}
      <br />
      {JSON.stringify(props)}
    </>
  );
}
