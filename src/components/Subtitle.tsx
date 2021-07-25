import React from "react";
import { Text } from "@ui-kitten/components";

export const Subtitle = ({ content }: { content: string }) => (
  <Text
    style={{ fontWeight: "500", color: "#7C00CF", marginBottom: 20 }}
    category="h3"
  >
    {content}
  </Text>
);
