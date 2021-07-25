import React from "react";
import { Input as OldInput, InputProps } from "@ui-kitten/components";

export const Input = (props: InputProps) => (
  <OldInput {...props} style={{ marginVertical: 5, borderRadius: 16 }} />
);
