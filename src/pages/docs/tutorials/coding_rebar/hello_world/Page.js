import CodeBox from "component/syntax_highlighting/CodeBox";
import Typography from "@mui/material/Typography";
import CodeTag from "component/syntax_highlighting/CodeTag";

const SAMPLE = `PrintLn("Hello, world!");`;

export default function Page() {
    return (
        <>
            <CodeBox language="txt" showLineNumbers>
                {SAMPLE}
            </CodeBox>
            <Typography>
                This is a simple "Hello, world!" program in Rebar. <CodeTag.Function>PrintLn</CodeTag.Function> outputs
                its arguments to the console with a terminating new-line. <CodeTag.Function>Print</CodeTag.Function> also
                outputs its arguments to the console, but without the ending new-line, allowing a chain of
                multiple <CodeTag.Function>Print</CodeTag.Function> calls to form a single line.
            </Typography>
        </>
    );
}