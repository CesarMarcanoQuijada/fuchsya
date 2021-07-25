import React from "react";
import { Button, ButtonProps } from "@ui-kitten/components";

export const BlockButton = (props: ButtonProps) => (
    <Button {...props} style={{ width: "100%", marginVertical: 5, borderRadius: 16 }}>{props.children}</Button>
);
