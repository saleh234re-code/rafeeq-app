import { useEffect } from "react";
import { Box } from "@mui/material";

export default function AdSense({ slot = "3331557063", style = {} }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <Box
      sx={{
        my: 2,
        textAlign: "center",
        overflow: "hidden",
        minHeight: "90px",
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7114645931029541"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </Box>
  );
}