import CodeBox from "component/syntax_highlighting/CodeBox";
import Typography from "@mui/material/Typography";
import CodeTag from "component/syntax_highlighting/CodeTag";

const SAMPLE = `\
#include <rebar/rebar.hpp>

REBAR_FUNCTION(UsefulFunction) {
    rebar::object arg1 = env->arg(0);
    
    std::cout << "This message comes from C++: " << arg1 << std::endl;
    
    REBAR_RETURN(null);
}

int main() {
    rebar::environment env;
    
    env.global_table()["UsefulFunction"] = env.bind(UsefulFunction);
    
    rebar::function string_func = env.compile_string("UsefulFunction(\\"Hello, world!\\");");
    
    string_func(); // This message comes from C++: Hello, world!
} \
`;

export default function Page() {
    return (
        <>
            <CodeBox language="cpp" showLineNumbers>
                {SAMPLE}
            </CodeBox>
            <Typography>
                Native Rebar functions can be defined by using the macro <CodeTag.Macro>REBAR_FUNCTION</CodeTag.Macro>.
                From there, the <CodeTag.Class short="environment">rebar::environment</CodeTag.Class> instance is exposed as <code>env</code>,
                and you can query arguments using <CodeTag.Function short="arg">rebar::environment::arg</CodeTag.Function>. Native
                Rebar functions must end with a call to <CodeTag.Macro>REBAR_RETURN</CodeTag.Macro>, otherwise undefined
                behavior will occur.
            </Typography>
            <br />
            <Typography>
                Native Rebar functions must be bound with a call to <CodeTag.Function short="bind">rebar::environment::bind</CodeTag.Function>,
                which returns a <CodeTag.Class short="function">rebar::function</CodeTag.Class> instance that can be used like a normal Rebar
                function.
            </Typography>
            <br />
            <Typography>
                The resultant function or other objects can be added to the environment's global variables by retrieving the
                global table using <CodeTag.Function short="global_table">rebar::environment::global_table</CodeTag.Function> and assigning the
                value as you would with any other map-like object.
            </Typography>
        </>
    );
}