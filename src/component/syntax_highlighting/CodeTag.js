import {useState} from "react";
import {Popover} from "@mui/material";

function CreateTag(color) {
    function Tag(props) {
        const [anchorEl, setAnchorEl] = useState(null);

        const open = Boolean(anchorEl);
        const id = open ? "simple-popover" : undefined;

        return (
            <>
                <code
                    style={{ color: color }}
                    onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
                >
                    {props.short || props.children}
                </code>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{
                        vertical: "center",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "center",
                        horizontal: "center"
                    }}
                >
                    <code
                        style={{ color: color, padding: "0 5px" }}
                        onMouseLeave={() => setAnchorEl(null)}
                    >
                        {props.children}
                    </code>
                </Popover>
            </>
        );
    }

    return Tag;
}

const CodeTag = {
    Function: CreateTag("#6BD"),
    Macro: CreateTag("#D9D"),
    Class: CreateTag("#E55")
}

export default CodeTag;