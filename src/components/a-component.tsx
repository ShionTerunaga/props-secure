import { z } from "zod";

const propsSchema = z
  .object({
    username: z.string(),
  })
  .strict();

type Props = z.infer<typeof propsSchema>;

export function AComponent(props: Props) {
  return (
    <>
      <h1>AComponent</h1>
      {props.username}
      <br />
      {JSON.stringify(props)}
    </>
  );
}
