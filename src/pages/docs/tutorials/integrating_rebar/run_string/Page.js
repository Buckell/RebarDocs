import CodeBox from "component/syntax_highlighting/CodeBox";
import Typography from "@mui/material/Typography";
import CodeTag from "component/syntax_highlighting/CodeTag";

const SAMPLE = `\
#include <rebar/rebar.hpp>

int main() {
    rebar::environment env;
    
    rebar::function string_func = env.compile_string("PrintLn(\\"Hello, world!\\");");
    
    string_func(); // Hello, world!
} \
`;

export default function Page() {
    return (
        <>
            <CodeBox language="cpp" showLineNumbers>
                {SAMPLE}
            </CodeBox>
            <Typography>
                Strings can be run by calling <CodeTag.Function short="compile_string">rebar::environment::compile_string</CodeTag.Function> on a
                Rebar environment. <CodeTag.Function short="compile_string">rebar::environment::compile_string</CodeTag.Function> will return
                a <CodeTag.Function short="function">rebar::function</CodeTag.Function> object that functions
                as a normal Rebar function.
            </Typography>
        </>
    );
}