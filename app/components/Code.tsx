export interface CodeProps {
  data: any;
  summary: string;
}

/**
 * @name Code
 * @description Simple component to render out our JSON responses.
 */
export const Code = (props: CodeProps) => {
  const { data, summary } = props;

  return (
    <details>
      <summary style={{ cursor: "pointer", color: "red" }}>{summary}</summary>
      <code style={{color: "blue"}}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
    </details>
  );
};
